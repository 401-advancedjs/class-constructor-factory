
'use strict';

function drive(){
    return 'Moving Forward!';
}

function stop(){
    return 'Stopping';
}

function wheelie(){
    return 'Wheee!';
}

function Car(name) {
    return Object.assign({},{name, wheels: 4}, {drive}, {stop});
}
function Motorcycle(name) {
    return Object.assign({},{name, wheels: 2}, {drive}, {wheelie}, {stop});
}

module.exports = {Car, Motorcycle};