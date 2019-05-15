'use strict';

const VehicleConstructor = require('./vehicle-constructor.js');
const CarClass = require('./vehicle-class.js');
const VehicleFactory = require('./vehicle-factory.js');

// Implement a car and motorcycle using a Constructor
const mazda = new VehicleConstructor.Car('Mazda 3');
console.log(mazda.name, mazda.drive(), mazda.stop());

const harley = new VehicleConstructor.Motorcycle('Harley');
console.log(harley.name, harley.wheelie(), harley.stop());

// Implement a car and motorcycle using a Class
const honda = new CarClass.Car('CRV');
console.log(honda, honda.drive(), honda.stop());

const gxr = new CarClass.Motorcycle('gxr');
console.log(gxr, gxr.drive(), gxr.wheelie());

// Implement a car and motorcycle using a Factory
const subaru = new VehicleFactory.Car('Outback');
console.log(subaru);

const cbr600 = new VehicleFactory.Motorcycle('cbr600');
console.log(cbr600);
