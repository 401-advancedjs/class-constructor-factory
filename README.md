![CF](http://i.imgur.com/7v5ASc8.png) LAB
=================================================

## Classes, Inheritance, Functional Programming

### Author: Melissa Stock

### Links and Resources
* [submission PR](https://github.com/401-advancedjs/lab02/pull/1)
* [travis](https://www.travis-ci.com/401-advancedjs/lab02/jobs/200228891#L462)


#### Documentation

### Modules
#### `modulename.js`

##### Exported Values and Methods

###### `class Car(name) -> obj`
###### `const Car(name) -> obj`
###### `function Car(name) -> obj`

###### `const List(name) -> obj`
###### `class List(name) -> obj`

###### `(array) -> array`


### Setup
#### `.env` requirements
* `PORT` - Port Number
* `MONGODB_URI` - URL to the running mongo instance/db

#### Running the app
* `node objects/index.js`
  * Returns different cars and motorcycles using classes, constructors, and factories
* `node list/index.js`
  * Returns different methods used to modify lists
  
#### Tests
* `npm test`
* What assertions were made?
    * For Vehicles: confirm all cars have 4 wheels, motorcycles have 2 wheels and can do wheelies
    * For List: confirm that lists are the correct length after being modified and that the items within the list are in the desired order
* What assertions need to be / should be made?
    * Error catching needs to be implemented for all files

