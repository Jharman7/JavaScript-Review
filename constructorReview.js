//Create a Animal Constructor that has the following parameters. species, name, legs, color, food (which is an array of foods they can eat).

  //code here
function Animal (species,name,legs,color,food) {
  this.species = species;
  this.name = name;
  this.legs = color;
  this.color = color;
  this.food = food;
}

//Now create a person function that creates an object and returns it (not in constructor form) that has the following parameters. name, age, height, gender

  //code here
function Person (name,age,height,gender) {
  return {
    this.name: name,
    this.age: age,
    this.height: height,
    this.gender: sex
  }
}

//Create a animal array and a person array.

  //code here
var animal = [];
var person = [];

//Create two instances of Animal and push those into your animal array

  //code here
animal.push(new Animal('zebra','frank','white','striped','grass'), new Animal ('dog','spot','brown','brown','dogfood'))

//Create two instances of person and push those into your person array.

  //code here
person.push(Person('jeff','26',"5'9",'male'),Person('kris','21',"5'2",'female'))

//Now we want every instance of Animal to have a eat method. This method will choose a random item in that instances food array, then alert "(name) ' ate ' (whichever food was chosen)".

  //code here
Animal.prototype.eat = function () {
  alert(name + " ate " + food)
}

//At this point, if we wanted to add something to every istance of person could we?

  //Yes or no? and why or why not?
// No.  because there is no common pointer among objects returned from the person function.


/*
  1) What happens when you use the 'new' keyword to call a Constructor function?
  2) What's a good way to describe the keyword 'this'
  3) Can a normal function which creates an object and then returns that object use the prototype?
  4) What happens if you forget to use 'new' when calling a constructor?
*/
// When the new keyword is used it creates a new object and the following function executes in that context allowing the this keyword to modify this new, anonymous object.
