'use strict';

// These 2 should be interchangeable!
const List = require('../list-class.js');
// const List = require('../list-constructor.js');

describe('List Data Structure', () => {

  it('starts with a length of -1 and an empty data set', () => {
    let stuff = new List();
    expect(stuff.length).toEqual(0);
    expect(stuff.data).toEqual({});
  });

  it('pushes items to the end of the data set', () => {
    let stuff = new List();
    stuff.push('a');
    stuff.push('b');
    expect(stuff.length).toEqual(2);
    expect(stuff.data[1]).toEqual('b');
  });

  it('pop removes the last element of the data set and returns its value', () => {
    let stuff = new List();
    stuff.push('a');
    stuff.push('b');

    expect(stuff.pop()).toEqual('b');
    expect(stuff.length).toEqual(1);
    expect(stuff.data[0]).toEqual('a');
  });

  it('shift removes items from the front of the data set and returns its value', () => {
    let stuff = new List();
    stuff.push('a');
    stuff.push('b');

    expect(stuff.shift()).toEqual('a');
    expect(stuff.length).toEqual(1);
    expect(stuff.data[1]).toEqual('b');
  });

  it('unshift adds an item from the front of the data set and returns the lists new length', () => {
    let stuff = new List();
    stuff.push('a');
    stuff.push('b');
    stuff.unshift('c');

    expect(stuff.length).toEqual(3);
    expect(stuff.data[0]).toEqual('c');
  });

  it('unshift can add more then one item at a time', () => {
    let stuff = new List();
    stuff.push('a');
    stuff.unshift(['b','c','d','e']);

    expect(stuff.length).toEqual(5);
    expect(stuff.data[0]).toEqual('b');
  });

  it('Executes the callback once on each item of the list', () => {
    let stuff = new List();
    stuff.push(1);
    stuff.push(2);
    stuff.push(3);
    stuff.forEach(a => a*2);

    expect(stuff.length).toEqual(3);
    expect(stuff.data[0]).toEqual(2);
  });

});
