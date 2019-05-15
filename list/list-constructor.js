'use strict';

function List() {
  this.length = 0;
  this.data = {};
}
/**
 * Add item to the end of the list
 * @param item
 */

List.prototype.push = function(item) {
  this.data[this.length] = item;
  this.length++;
};

/**
 * // Remove an item from the end of the list and return it's value
 * @returns {*}
 */
List.prototype.pop = function() {
  let returnValue = this.data[this.length - 1];
  delete this.data[this.length];
  this.length--;
  return returnValue;
};

// Remove the first element from the list and return its value
List.prototype.shift = function() {
  let returnValue = this.data[0];
  delete this.data[0];
  this.length--;
  return returnValue;
}

// Adds an item to the begining of the list and returns the new length of the list
List.prototype.unshift = function(list) {
  let totalidx = this.length + list.length - 1;
  let reverseidx= this.length - 1;
  for(totalidx; totalidx >= list.length; totalidx--){
    this.data[totalidx] = this.data[reverseidx];
    reverseidx--;
  }
  let newidx = list.length - 1;
  for(newidx; newidx >= 0; newidx--){
    this.data[newidx] = list[newidx];
  }

  this.length = this.length + list.length;
  return this.length;
}

// Executes the callback once on each item of the list
List.prototype.forEach = function(callback){
  for(let i = 0; i < this.length; i++){
    this.data[i] = callback(this.data[i]);
  }
}

module.exports = List;
