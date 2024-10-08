class Animal {
    speak() {
      console.log("Animal makes a sound");
    }
  }
  
  class Dog extends Animal {
    speak() {
      console.log("Dog barks");
    }
  }
  
  class Cat extends Animal {
    speak() {
      console.log("Cat meows");
    }
  }
  
  const animals = [new Dog(), new Cat()];
  
  animals.forEach(animal => {
    animal.speak(); // Output: Dog barks, Cat meows
  });
  