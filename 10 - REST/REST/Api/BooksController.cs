using System;
using System.Collections.Generic;
using System.Linq;
using System.Net;
using System.Net.Http;
using System.Web;
using System.Web.Http;
using RestDemo.Models;

namespace REST.Api
{
    public class BooksController: ApiController
    {
        private IBooksRepository _repo = new BooksRepository();
        
        //[HttpGet]
        public IEnumerable<Book> GetBooks()
        {
           return _repo.GetBooks();
        }

        public HttpResponseMessage GetBook(int id)
        {
            var book = _repo.GetBook(id);
            if (book == null)
            {
                return Request.CreateResponse(HttpStatusCode.NotFound);
            }

            return Request.CreateResponse(HttpStatusCode.OK, book);
        }
    }
}