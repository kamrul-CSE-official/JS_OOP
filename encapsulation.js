class Person {
    constructor(name) {
      this._name = name;
    }
  
    get name() {
      return this._name;
    }
  
    set name(newName) {
      if (newName.length > 0) {
        this._name = newName;
      } else {
        console.log('Invalid name');
      }
    }
  }
  
  const person = new Person('John');
  console.log(person.name); // Output: John
  person.name = 'Jane'; // Setter
  console.log(person.name); // Output: Jane
  