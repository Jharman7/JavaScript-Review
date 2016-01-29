//Make a 'favoriteThings' object that contains the following keys: band, food, person, book, movie, holiday. Have the values to those keys be your favorite thing in that category.

  //Your code here
var favoriteThings = {
  band: 'beatles',
  food: 'pizza',
  person: 'me',
  book: 'WoK',
  movie: 'LOTR',
  holida: 'Thanksgiving'
}

//After you've made your object, add another key named 'car' with the value being your favorite car and then another key named 'brand' with the value being your favorite brand.

  //Your code here
favoriteThings.car = 'mustang';
favoriteThings.brand = 'ford';
//Now change the food key in your favoriteThings object to be 'Lettuce' and change the book key in your favoriteThings object to be '50 Shades of Gray'.
favoriteThings.food = 'Lettuce';
favoriteThings.book = 'hahano'
  //Your code here

//Now, alert your favorite person, then alert your favorite book.

  //Your code here

alert(favoriteThings.person);
alert(favoriteThings.book);

/* NEXT PROBLEM - NEXT PROBLEM - NEXT PROBLEM */


//Above you're given a user object. Loop through the user object checking to make sure that each value is truthy. If it's not truthy, remove it from the object. hint: 'delete'.

  //Your code here

  var user = {
    name: 'Tyler McGinnis',
    email: null,
    pwHash: 'U+Ldlngx2BYQk',
    birthday: undefined,
    username: 'tylermcginnis33',
    age: 0
  }

for (var key in user) {
  if (user[key]) {
    delete user[key];
  }
}
user.name = 'jeff';
user.username = 'jharm';
console.log(user);
//Once you get your truthy object, Change the remaining values in the object to be specific to you (name: 'your name', username: 'your username'), rather than my information.

//Now console.log your object and make sure it looks right.

  //Your code here


/* NEXT PROBLEM - NEXT PROBLEM - NEXT PROBLEM */



//create an empty object called methodCollection.

  //Your code here

//Now add two methods (functions that are properties on objects) to your methodCollection object. One called 'alertHello' which alerts 'hello' and another method called logHello which logs 'hello' to the console.

  //Your code here

//Now call your alertHello and logHello methods.

  //Your code here
var methodCollection = {};
methodCollection.alertHello = function () {
  alert('hello');
}

methodCollection.logHello = function () {
  console.log('hello');
}

/* NEXT PROBLEM - NEXT PROBLEM - NEXT PROBLEM */



//write a function called voweler that accepts a string, and returns an object with the keys being all the vowels in that string, and the values being how many times that particular vowel was in the string.
//voweler("This is a test") --> {i: 2, a: 1, e: 1};
function voweler (str) {
  var arr = str.split('');
  var obj = {};
  for (var i = 0; i < arr.length; i++) {
    arr[i] = arr[i].toLowerCase();
    if (obj[arr[i]]) {
      obj[arr[i]]++;
    } else {
      switch (arr[i]) {
        case 'a':
          obj[arr[i]] = 1;
          break;
        case 'e':
          obj[arr[i]] = 1;
          break;
        case 'i':
          obj[arr[i]] = 1;
          break;
        case 'o':
          obj[arr[i]] = 1;
          break;
        case 'u':
          obj[arr[i]] = 1;
          break;
        default:

      }
    }
  }
  return obj;
}
