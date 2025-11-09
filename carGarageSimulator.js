
//  Part 1: The Car Object
function simulateGarage() {
  const car = {
    brand: "Toyota",
    model: "Corolla",
    year: 2020,
    mileage: 0,

    drive: function (distance) {
      this.mileage += distance;
      console.log(`${this.brand} ${this.model} has driven ${distance} km. Total mileage: ${this.mileage} km.`);
    },

    getDetails: function () {
      console.log(`Brand: ${this.brand}, Model: ${this.model}, Year: ${this.year}, Mileage: ${this.mileage}`);
    },

    service: function () {
      console.log(`Service check for ${this.brand}`);
    },
  };


  car.getDetails();
  car.drive(50);
  car.drive(70);
  car.service();
}

simulateGarage();


//  Part 2: Working with Arrays
const garage = [
  { brand: "Toyota", model: "Corolla", year: 2020, mileage: 120 },
  { brand: "Honda", model: "Civic", year: 2019, mileage: 180 },
  { brand: "Ford", model: "Focus", year: 2021, mileage: 90 },
];

console.log("\n--- Using for loop ---");
for (let i = 0; i < garage.length; i++) {
  const car = garage[i];
  console.log(`${i + 1}. ${car.brand} ${car.model} - ${car.year} (${car.mileage} km)`);
}

console.log("\n--- Using for...of loop ---");
for (const car of garage) {
  console.log(`${car.brand} ${car.model} - ${car.year} (${car.mileage} km)`);
}

console.log("\n--- Using forEach() ---");
garage.forEach((car, index) => {
  console.log(`${index + 1}. ${car.brand} ${car.model} - ${car.year} (${car.mileage} km)`);
});


console.log("\n--- Modifying Garage ---");
garage.push({ brand: "BMW", model: "X5", year: 2022, mileage: 60 });
console.log("After push:", garage);

garage.pop();
console.log("After pop:", garage);

garage.shift();
console.log("After shift:", garage);

garage.unshift({ brand: "Kia", model: "Rio", year: 2023, mileage: 30 });
console.log("After unshift:", garage);


console.log("\n--- Filter and Map ---");
const lowMileageCars = garage.filter(car => car.mileage < 200);
console.log("Cars with mileage below 200:", lowMileageCars);

const carBrands = garage.map(car => car.brand);
console.log("Car brands in garage:", carBrands);


class Car {
  constructor(brand, model, year, mileage) {
    this.brand = brand;
    this.model = model;
    this.year = year;
    this.mileage = mileage;
  }

  drive(distance) {
    this.mileage += distance;
    console.log(`${this.brand} ${this.model} has driven ${distance} km. Total mileage: ${this.mileage} km.`);
  }

  getDetails() {
    console.log(`Brand: ${this.brand}, Model: ${this.model}, Year: ${this.year}, Mileage: ${this.mileage}`);
  }
}

const car1 = new Car("Mercedes", "C300", 2022, 0);
const car2 = new Car("Audi", "A4", 2021, 150);
const car3 = new Car("Tesla", "Model 3", 2023, 20);

const classGarage = [car1, car2, car3];

function showGarageDetails(garage) {
  console.log("\n--- Garage Details (Class-based) ---");
  garage.forEach(car => car.getDetails());
}

showGarageDetails(classGarage);
