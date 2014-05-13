﻿using System;
using System.ComponentModel.DataAnnotations;
using System.Linq;
using System.Net;
using System.Net.Http;
using System.Web.Http;
using CORSServer.Models;

namespace CORSServer.Api
{
    public class BooksController : ApiController
    {
        private IBooksRepository _repo = new BooksRepository();

        // GET api/books
        public IQueryable<Book> Get()
        {
            return _repo.GetBooks().AsQueryable();
        }

        // GET api/books/5
        public HttpResponseMessage Get(int id)
        {
            var book = _repo.GetBook(id);
            if (book == null)
            {
                return Request.CreateResponse(HttpStatusCode.NotFound);
            }

            var response= Request.CreateResponse(HttpStatusCode.OK, book);

            response.Headers.Add("Access-Control-Allow-Origin", "*");
            return response;
        }

        // POST api/books
        public HttpResponseMessage Post(Book newBook)
        {
            try
            {
                var book = _repo.AddBook(newBook);
                var result = Request.CreateResponse(HttpStatusCode.Created, book);
                result.Headers.Location = new Uri(Url.Link("DefaultApi", new { id = book.Id }));
                return result;
            }
            catch (ValidationException ex)
            {
                return Request.CreateResponse(HttpStatusCode.NotAcceptable, ex.Message);
            }
        }

        // PUT api/books/5
        public HttpResponseMessage Put(int id, Book newBook)
        {
            try
            {
                if (newBook.Id != id)
                {
                    throw new ValidationException("Invalid book ID.");
                }
                var book = _repo.UpdateBook(newBook);
                return Request.CreateResponse(HttpStatusCode.OK, book);
            }
            catch (ValidationException ex)
            {
                return Request.CreateResponse(HttpStatusCode.NotAcceptable, ex.Message);
            }
        }

        // DELETE api/books/5
        public HttpResponseMessage Delete(int id)
        {
            try
            {
                _repo.DeleteBook(id);
                return Request.CreateResponse(HttpStatusCode.NoContent);
            }
            catch (ValidationException ex)
            {
                return Request.CreateResponse(HttpStatusCode.NotAcceptable, ex.Message);
            }
        }
    }
}
