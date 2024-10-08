class Person {
    constructor(firstName, lastName) {
      this._firstName = firstName;
      this._lastName = lastName;
    }
  
    get fullName() {
      return `${this._firstName} ${this._lastName}`;
    }
  
    set fullName(name) {
      const [first, last] = name.split(' ');
      this._firstName = first;
      this._lastName = last;
    }
  }
  
  const person = new Person('Jane', 'Doe');
  console.log(person.fullName); // Output: Jane Doe
  person.fullName = 'John Smith';
  console.log(person.fullName); // Output: John Smith
  