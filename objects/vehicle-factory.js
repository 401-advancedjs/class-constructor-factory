
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

function VehicleFactory(name, wheels) {
    return Object.assign({},{name, wheels}, {drive}, {stop});
}

module.exports = VehicleFactory;