

//var person = {
//    name: "Maurice",
//    cats: [
//        'Zorro',
//        'Diego'
//    ],
//    sayHello: function() {
//        console.log(this.name);
//    }
//};


function Person(name, cats) {
    if (this === window) throw new Error("Please use new!");


    this.name = name;
    this.cats = cats;
    //this.sayHello = function() {
    //    console.log(this.name);
    //};
}

Person.prototype.sayHello = function() {
    console.log("Hello " + this.name);
};

var person = new Person("Maurice", ["Zorro"]);

console.log(person.name);
console.log(person['name']);

person[' it is cool'] = true;
console.log(person[' it is cool']);

person.sayHello();

console.log(person)


function Employee(name) {
    Person.call(this, name, []);
}


Employee.prototype = new Person();

var john = new Employee("John")
var emp = new Employee("Bob");
emp.sayHello();
john.sayHello();

var original = emp.sayHello;
emp.sayHello = function() {
    console.log("I am the bob instance");
    original.call(this);
};

emp.sayHello();
john.sayHello();

delete emp.sayHello;

emp.sayHello();
john.sayHello();


if (emp.sayHello) {
    emp.sayHello();
}

if (emp.notThere) {
    emp.notThere();
}

for (var p in emp) {
    if (emp.hasOwnProperty(p)) {
        console.log(p, emp[p]);
    }
}