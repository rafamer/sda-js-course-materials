class Person {
  constructor(name, age) {
    this.name = name;
    this.age = age;
  }

  sayHello() {
    console.log('Hello my name is ' + this.name);
  }
}

class Student extends Person {
  constructor(name, age, faculty) {
    super(name, age);

    this.faculty = faculty;

    Student.someStaticMethod();
  }

  sayHello() {
    super.sayHello();
    console.log('I\'m student of ' + this.faculty);
  }

  static someStaticMethod() {
    alert('Instace creared');
  }
}

var kate = new Student('Kate', 20);
var john = new Student('John', 25, 'Computer Science');

kate.sayHello();
john.sayHello();