'use strict';

class List {

  constructor() {
    this.length = 0;
    this.data = {};
  }

  /**
   * Add item to the end of the list
   * @param item
   */
  push(item) {
    // Add an item to the end
    this.data[this.length] = item;
    this.length++;
  }

  /**
   * // Remove an item from the end of the list and return it's value
   * @returns {*}
   */
  pop() {
    let returnValue = this.data[this.length - 1];
    delete this.data[this.length];
    this.length--;
    return returnValue;
  }

  shift() {
    let returnValue = this.data[0];
    delete this.data[0];
    this.length--;
    return returnValue;
  }

  unshift(list) {
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

  forEach(callback){
    for(let i = 0; i < this.length; i++){
      this.data[i] = callback(this.data[i]);
    }
  }
}

module.exports = List;
