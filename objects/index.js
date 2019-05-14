'use strict';

const VehicleConstructor = require('./vehicle-constructor.js');
const VehicleClass = require('./vehicle-class.js');
const VehicleFactory = require('./vehicle-factory.js');

// Implement a car and motorcycle using a Constructor
const mazda = new VehicleConstructor.Car('Mazda 3');
console.log(mazda.name, mazda.drive(), mazda.stop());

const harley = new VehicleConstructor.Motorcycle('Harley');
console.log(harley.name, harley.wheelie(), harley.stop());

// Implement a car and motorcycle using a Class
const honda = new VehicleClass.Vehicle('CRV', 4);
console.log(honda, honda.drive(), honda.stop());

const gxr = new VehicleClass.Motorcycle('gxr', 2);
console.log(gxr, gxr.wheelie(), gxr.stop());

// Implement a car and motorcycle using a Factory
const subaru = new VehicleFactory('Outback', 4);
console.log(subaru);

const cbr600 = new VehicleFactory('cbr600', 2);
console.log(cbr600);
