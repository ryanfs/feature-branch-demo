class Person {
  constructor(options) {
    this.name = options.name || 'John Smith';
    this.age = options.age;
    this.gender = options.gender;
  }

  sayHi() {
    console.log(`Hi, I am ${this.name}`);
    console.log(`My gender is ${this.gender}`);
  }
}
