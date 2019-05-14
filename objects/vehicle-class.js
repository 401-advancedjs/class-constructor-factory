'use strict';

class Car {
    constructor(name){
        this.name = name;
        this.wheels = 4;
    }

    drive(){
        return 'Moving Forward';
    }

    stop(){
        return 'Stopping';
    }
}

class Motorcycle extends Car{
    wheelie(){
        return 'Wheee!';
    }

    stop(){
       return super.stop(); 
    }
}

module.exports = {Car, Motorcycle};