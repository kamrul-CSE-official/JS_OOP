class Car {
    constructor(brand, model) {
      this.brand = brand;
      this.model = model;
    }
  
    getDetails() {
      return `${this.brand} ${this.model}`;
    }
  }
  
  const myCar = new Car("Tesla", "Model S");
  console.log(myCar.getDetails()); 