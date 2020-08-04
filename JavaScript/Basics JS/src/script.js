// ************************************************Ternary and switch Operators 
// ***********************Ternary
/*
var name = 'John' , age = 16;
age >=18 ? console.log(`${name} can drink beer`) : console.log(`${name} cannot drink beer since he is still ${age} years old`)

var drink = age>=18 ? 'beer' : 'milk'; // assiging different values to a variable;
console.log(age >=18 ? `${name} can drink ${drink}` : `${name} can drink ${drink}`);
*/


// ***********************Switch
/*
var teaches = 'teacher';

switch(teaches){
  case 'teacher' : case 'instructor' : console.log('teacher');break; // we can even have two case's like above to                                                                          emit same value for both cases
  case 'driver' : console.log('drives');break;
  case 'salesperson' : console.log('sales');break;
  default : console.log('unknown');
}
*/

/*
age = 45;

var teaches = 'teacher';
console.log(typeof(teaches) === 'string');

switch(true){
  case age >= 10 && age < 18 : console.log('boy');break;
  case age >= 18 && age < 22: console.log('teenager');break;
  case age >= 22 && age < 40: console.log('young');break;
  default : console.log('man');
}
*/

/*
var name , teaches = 'teacher';

switch (teaches) {
  case 'teacher' : name = 'JohnTeacher';break;
  case 'driver' : name = 'Johndriver';break;
  case 'desinger' : name = 'Johndesinger';break;
  default : name = 'unknown';
}
console.log(name);
*/
// ************************************************Ternary and switch Operators ends
















// ************************************************Truthy and Falsy and Equal Operator

// This will be handy if we want to check any variablle is defined or not
/* 
var height = ' ';
if(height){
  console.log('defined');
}else {
  console.log('undefined');
}
*/
/*
var width = 0;
if(width){
  console.log('defined');
}else{
  console.log('undefined');
}
*/
// ************************************************Truthy and Falsy and Equal Operator ends















// ************************************************Functions

// Functions help not to repeat same code again (DRY principal)
/*
function calculateAge(year){
  return new Date().getFullYear() - year;
}
console.log(calculateAge(1991));
*/
// Function used in another function 
/*
function personAge(name,age){
  var ageCalculated = calculateAge(age);
  return `Hey ${name} you are ${ageCalculated} years old`;
}
console.log(personAge('Prudhvi',1992));
*/
/*
function calculateAge(year){
return new Date().getFullYear() - year;
}
function retirement(name,age){
 var ageCalculated = calculateAge(age);
 var retirement = 60 - ageCalculated;
 if(retirement > 0){
  console.log(`${name} retires in ${retirement}`);
 }else{
  var retiredYears = Math.abs(retirement);
  console.log(`${name} has already retired ${retiredYears} years back`)
}
}

retirement('John' , 1940);
*/

// ************************************************Functions ends



















// ************************************************Functions Expressions and declaration
/*
      var functionExpression = function(job,name){
        switch(job){
          case 'teacher' : return `${name} teaches`; //here we no need to using break since we have return statement 
          case 'driver' : return `${name} drives`;
          default : return `unknown`;
        }
      }

      var result = functionExpression('driver','John');
      console.log(result);
 */
// ************************************************Functions Expressions and declaration ends
















// ************************************************Array 

//  var array = ['John','Jane','James'];
//  var array = new Array('John','Jane','James'); // Another way of creating array

// array.push('Thomas'); // add to end
// array.unshift('Doe'); // add at the start
// array.shift(); // removes first element
// array.pop(); // removes last element

//  console.log(array);

//  array[5] = 'Thomas'; //adds to the  5
//  console.log(array);
//   array[array.length] = 'Thomas'; //add to the last  element considers based on the length of the array
//  console.log(array);

//  console.log(array.indexOf('John'));

// NOTE : array.push() returns length of the array i.e., try this --> var arr = array.push('SomeThign') console.log(arr);


// ************************************************Array ends















// ************************************************Objects and properties

// Object literals
/*  
var john = {
  name : 'John Doe',
  age : 26,
  country : 'USA',
  familyMembers : ['Jane','Bob','Elly']
}
console.log(john.familyMembers.indexOf('Bob'));
console.log(john['name']);
*/

// new Object Syntax
/*
var jane = new Object();
jane.name = 'Jane Smith';
jane.age = 26;
jane['country'] = 'Europe';
jane['familyMembers'] = ['Jane','Bob','Elly'];
console.log(jane);
*/

// ************************************************Objects and properties ends



















// ************************************************Objects and methods

// functions defined inside object is referred as method
/*
var jane = {
  name : 'Jane',
  yearOfBirth : 1992,
  country : 'Canada',
  familyMembers : ['John','Doe','Smith'],
  this : this, // Here this refers to window object
  calculateAge : function(){
  this.age = 2019 - this.yearOfBirth; // we can create a key(property) by using this, here this refers to the object i.e.,                                          Jane
  console.log(this); // Here this refers to current Object (i.e., entire jane object) since it is inside function which is                          inside an object
  console.log(this.name); // jane.name

  }
}
jane.calculateAge();
console.log(jane);
console.log(jane.this);

*/

// ************************************************Objects and methods ends

















// ************************************************Loops and Iterations


// var array = ['Jane',1992,'India'];

// for(let i = 0; i < array.length; i++){
//   console.log(array[i])
// }


// for(let i = 0; i < array.length; i++){
//   if(typeof array[i] !== 'string'){
//     continue //if it is not string then it will not go to the next statement ( i.e.,  console.log statemen) and starts                continuing the loop skipping the next line
//   }
//   console.log(array[i]);
// }

// for(let i = 0; i < array.length; i++){
//   if(typeof array[i] !== 'string'){
//     break; //if it is not string then it will break the execution and the loop as well
//   }
//   console.log(array[i]);
// }



//Looping backwards
// for(let i = array.length -1; i >= 0; i--){
//   console.log(array[i]);
// }

// array.forEach(data => console.log(data));

// ************************************************Loops and Iterations ends


















// ************************************************Hoisting 


// In Function context: Hoisting works only in function declarations and not in function expressions


// calculateAge(1992); // works since it is function declaration
// function calculateAge(year){
//   console.log(2019 - year);
// }



// calculateSum(2); // will not work since function is an expression
// var calculateSum = function(number){
//   console.log(10 + number)
// }

// In variable context : 

// console.log(a); // undefined
// var a = 23;

// function foo(){
//   console.log(a); // undefined
//   var a = 65;
//   console.log(a);
// }

// foo();
// console.log(a);

// ************************************************Hoisting  ends






























// ************************************************Object Inheritance and prototype chain

// Function constructor
// function Person(name,age){
//   this.name = name;
//   this.age = age;
//   // console.log(this);
// }

// Person.prototype.calculateAge = function(){
//   console.log(2019 - this.age);
// }



// var jane = new Person('Teja',1992);
// console.log(jane);
// jane.calculateAge();
// // console.log(jane.hasOwnProperty('age'));

// var john = new Person('John',1993);
// console.log(john);
// john.calculateAge();
// ************************************************Object Inheritance and prototype chain  ends






















// *******************************************Passing fucntions as arguments (Callbacks)


// var yearsArray = [1990,1991,1992,1993,1994];

// // var concatArray = ['d','a','b','c',1]
// // console.log(yearsArray.concat(concatArray).sort());


// function calculateAge(array,func){
//   var arrayResponse = [];
//   array.forEach((element,i) => {
//     arrayResponse.push(func(element));
//   });    
//   return arrayResponse;
// }

// function callBack(year){
//   var result = new Date().getFullYear() - year;
//   return result;
// }

// var totalResult = calculateAge(yearsArray,callBack); // here we are not calling function because                                                         fucntion should be executed later as an                                                              argument
// console.log(totalResult);
// totalResult.forEach(data => {
//   console.log(data);
// })


// function higher(name,callback){
//   callback(name);
// }

// function callbackfunc(argument){
//   document.getElementById('name').innerHTML = argument;
// }
// higher('Prudhvi Karanam',callbackfunc);


// ****************************************************Passing fucntions as arguments ends




























// ****************************************************Functions returning functions


// function interviewQuestion(job){
//   if(job === 'designer'){
//     return function(name){
//         console.log(`Hey ${name} what can you design`);
//     }
//   }else if(job ===' developer'){
//     return function(name){
//       console.log(`Hey ${name}, can you develop some application for me?`);
//     }
//   }else{
//     return function(name){
//       console.log(`Hey ${name}, What is your profession`);
//     }
//   }
// }

// var result = interviewQuestion('designer');
// // console.log(result); // Now this will return a function
// // var answer = result('John');
// // interviewQuestion(' developer')('Jane');

// interviewQuestion('designer')(['Mark','Smith']);


// function sample(){
//   return function name(name){
//     console.log(`Hey ${name}`);
//   }
//   }
//   var result = sample();
//   console.log(result('Doe'));

// ****************************************************Functions returning functions ends























// **************************************************** Bind, Call and apply

// In all this three methods first argument passed (this) will say what should be referred, If we directly say this then it will refer to scope of this

// example : 1
// var john = {
//   name : 'Prudhvi',
//   age : 27,
//   foodTimings : function(timeOfDay){
//     var self = this;
//     return function(){
//       if(timeOfDay === 'Morning'){
//         console.log(`Hey ${self.name} it is ${timeOfDay}, go and have a heavy breakfast`);
//       }else if(timeOfDay === 'Afternoon'){
//         console.log(`Hey ${self.name} it is ${timeOfDay}, go and have a lunch`);
//       }else if(timeOfDay === 'Night'){
//         console.log(`Hey ${self.name} it is ${timeOfDay}, go and have a minimum dinner`)
//       }else{
//         console.log(`Hey ${self.name} if your feeling hungry go and have something`);
//       }
//     }
//   }
// }

// var mike = {
//   name : 'Mike'
// };


// var result = john.foodTimings.call(mike,'Morning')(); // This has to be called since foodtimings is returning a function 

// console.log(result);
// // result();

// var years = [1991,1937,1965,2005,1995];

// // example 2 :
// function arrayCalculator(years,callback){
//   emptyArray = [];
//   years.forEach(element => {
//     emptyArray.push(callback(element))
//   });
//   return emptyArray;
// }

// function calculateAge(year){
//   return new Date().getFullYear() - year;
// }

// function isFullAge(limit,ages){
//  return ages >= limit;
// }

// var ages = arrayCalculator(years,calculateAge);
// console.log(ages);

// var fullJapan = arrayCalculator(ages,isFullAge.bind(this,20)); // Here this refers to window object
// console.log(fullJapan );

// console.log(isFullAge.bind(this,20));


// example 3 :



// function sample(){
//   return this.name;
// }

// var emily = {
//   name : 'Emily'
// }

// var result  = sample.bind(emily)

// console.log(result());



// -------------------------------------------------------bind method in Constructor and prototype


// function Person(name){
//   this.name = name;
// }

// Person.prototype.greeting = function(){
//   console.log(`Hey ${this.name}, how are you?`);
//   return function(){
//     console.log(this);
//   }.bind(this); // If we are not using these bind method then it will be a normal function and this will refer to window object 
// }



// Person.prototype.greeting = function(){
//   console.log(this);
//   console.log(`Hey ${this.name}, how are you?`);
//   return function(){
//     console.log(this);
//   } 
// }

// let john = new Person('John');

// john.greeting()();


// Extras

// var john = {
//     name : 'John Doe',
//     age : 25,
//     presentation : function(time,style){
//         if(style === 'formal'){
//             console.log(`Hey ${this.name} it is ${time} and you are ${style}`);
//         }else if(style === 'informal'){
//             console.log(`Hey ${this.name} it is ${time} and you are ${style}`);
//         }

//     }
// }

// john.presentation('Morning','formal')



// var emily = {
//     name : 'Emily'
// }

// var result = john.presentation.bind(emily,'Evening');
// result();



// var years = [2000,1991,1994,1782,1894];

// function arrayCalc(yearspassed,callback){
//     var newYears = [];

//     yearspassed.forEach(element => {
//         newYears.push(callback(element));
//     });
//     return newYears;
// }

// function calculateAge(agePassed){
//     return 2019 - agePassed;
// }

// var res = arrayCalc(years,calculateAge);
// console.log(res)

// function fullAge(limit,el){
//     return el >= limit;
// }

// var resu = fullAge.bind(this,20);
// var ress = arrayCalc(res,resu);

// console.log(ress);


// var person = {
//     name : 'John'
// }

// function namee(){
//     console.log(this);  
//     console.log(`Hey ${this.name}`);
// }

// namee();

// var a = namee.bind(person);

// a();


// ****************************************************Bind ends




















// **************************************************** Slice method

// var years = [
//   {
//     name : 'TEja',
//     age : 27
//   },
//   {
//     name : 'John',
//     age : 30
//   },
//   {
//     name : 'Mick',
//     age : 35
//   },
//   {
//     name : 'Smith',
//     age : 27
//   },
// ]

// a = years.slice(0,2);
// b = years.slice(2,years.length);
// console.log(a);
// console.log(b);

// ****************************************************Slice method ends


















// ****************************************************ES6 string methods

// let firstName = 'John';

// let lastName  = 'Smith';

// console.log(firstName.startsWith('J')); // True
// console.log(lastName.endsWith('h')); // True

// console.log(firstName.includes('oh')); //Check if string is available
// console.log(`${firstName} `.repeat(4)); // if we want space












// ****************************************************ES5 this

// var person = {
//     name : 'John',
//     age : 25,
//     log : function(){
//         console.log('method',this);
//         return function(){
//             console.log('normal function',this);
//         }
//     }
// }

// person.log()();










// ****************************************************  ES6 this in arrow functions

// var person = {
//     name : 'John',
//     age : 25,
//     log : function(){
//         console.log('method',this); //this will refer to person
//         return () => {
//             console.log('normal function',this); // Here this will refer to its surrounding this i.e., it surrounded with this which is pointing to object (person)
//         }
//     }
// }

// person.log()();


// var person1 = {
//     name : 'John',
//     age : 25,
//     self : this,
//     log : () => {
//         console.log('method',this); // Here this will refer to window because this is window (see self above)
//         return () => {
//             console.log('normal function',this); // Here this will refer to its surrounding this i.e., it surrounded with this which is pointing to object (window)
//         }
//     }
// }
// console.log(person1.self);
// person1.log()();


// function Person(name){
//     this.name = name;
//     this.my = function(){
//         console.log('Method');
//     }
// }

// Person.prototype.myFriends = function(){
//     console.log(this);
//     // console.log('Hey prototype',this.name);
//     return function(){
//         // console.log('Normal function',this.name,'asd')
//         console.log(this);
//     }.bind(this);
// }

// var john = new Person('John');
// console.log(john.myFriends()());




// ****************************************************ES6 this ends




























// ****************************************************Destructing

// Helps in destructing a data structure like an object or array and Destructing helps to return multiple values


// ES5 array

// var john = ['John',25];

// var name = john[0];
// var age = john[1];
// console.log(name);
// console.log(age);

// ES6 destructing array

// let [name,age] = ['John',25];
// console.log(name);
// console.log(age);


// ES6 destructing Objects


// let obj = {
//     firstName : 'Johnn',
//     lastName : 'Doe'
// }

// let {firstName,lastName} = obj; // here we have created variable as same name in the object else this will not work

// console.log(firstName);
// console.log(lastName);



// let {firstName : a ,lastName : b} = obj; // if we don't want to have same name then we can use like this

// console.log(a);
// console.log(b);


// Normal way of returning multiple values

// let name = 'John Doe';
// let age = 25;


// function hello(){
//     return {
//         namee : name,
//         agee : age
//     }
// }

// let result = hello();
// console.log(result.namee);
// console.log(result.agee);

// using Destructing way


// let name = 'John Doe';
// let age = 25;


// function hello(){
//     a = [name,age];
//     return a;
// }
// let result = hello();

// console.log(result);

// Another example:

// function calculateAge(year){
//     const age = new Date().getFullYear() - year;
//     return [age, 65 - age];
// }

// let [age,retirementAge] = calculateAge(1992);
// console.log(age);
// console.log(retirementAge);



// ****************************************************Destructing ends
























//  ****************************************************Array and methods in ES6


// Array.from creates an new instance of old array or strings

// var boxes = document.querySelectorAll('.box');

// box = Array.from(boxes);

// console.log(box);

// boxes.forEach((element) => {
//     element.style.color = 'white';
// })



// var arr = ['John','Smith','Doe','Jole','Jane','xyz'];

// for(let i = 0;i < arr.length; i++){
//     if(arr[i] === 'Doe'){
//         continue;
//     }
//     console.log(arr[i]);

// }

























// ****************************************************for of loop

// for of loop is the combination of forEach/map along with for loop.
// In forEach/map loops we can't use continue or break statements but in for loop we can use
// if we want to achieve this we can use for of loop, example below
// we can write less code when compared to for loop



// Normal for loop

// var boxes = document.querySelectorAll('.box');
// var box5 = Array.prototype.slice.call(boxes);
// for(let i = 0; i < box5.length; i++){
//     if(box5[i].className === 'box blue'){
//         continue;
//     }
//     box5[i].textContent = 'I changed to blue';
// }



// for of loop (ES6)


// var boxes = document.querySelectorAll('.box');
// var box6 = Array.from(boxes);

// for(let arr of box6){
//     if(arr.className.includes('blue')){
//         continue;
//     }
//     arr.textContent = 'I changed to blue';
// }


// **************************************************** for of loop ends





























// ****************************************************findIndex and find

// Find index method helps in finding the index easily. Find index method has a callback function

// ES5

// var ages = [14,17,18,22,10];

// console.log(ages.indexOf(18));

// var full = ages.map((curr) => {
//   return curr > 18; 
// })

// console.log(full.indexOf(true));
// console.log(ages[full.indexOf(true)]);


// ES6

// var ages = [14,17,18,22,10];


// var result = ages.findIndex((curr) => {
//   return curr > 18;
// })

// console.log(result);
// console.log(ages[result]);
//if we don't want to find index and directly want a value more than 18 we can simple use find method even this also has callback function

// var result = ages.find((ele) => {
//   return ele > 18;
// })

// console.log(result);


// ****************************************************findIndex and find ends


























// **************************************************** Spread operator

// function addFourAges(a,b,c,d){
//   console.log(a + b + c + d);
// }

// addFourAges(1,2,3,4);

// If we want to pass array into addFourAges function we have to do below

// ES5 

// var array = [1,2,3,4];

// addFourAges.apply(this,array); // or we can use below (null)

// addFourAges.apply(null,array);

// ES6

// var array = [1,2,3,4];

// addFourAges(...array);

// We can also use this to join two arrays


// var first = ['John','Jane','Jonas'];

// var second = ['Doe','Jos','Smith'];


// ES5 (Here if we want to add any thing in between these two arrays we can do but using spread operator we can do)

// var a = first.concat(second);
// console.log(a);


// ES6

// var a = [...first,...second];
// console.log(a);


// we can add anything in between these two arrays

// var a = [...first,'Lilly',...second];

// console.log(a);


// **************************************************** Spread operator ends































// **************************************************** Rest Parameters


// ES5


// function isFullAge(){
//   console.log(arguments);// it looks like array but not it is an Object we can this proto;  
//   // Converting arguments into array using below
//   var arr = Array.prototype.slice.call(arguments); // Now it becomes perfect array
//   console.log(arr); 
//   arr.forEach((element) => {
//       console.log( new Date().getFullYear() - element);
//   });
// }
// isFullAge(1990,1992,1993); // we can add any number of parameters




// ES6

// function isFullAge6(...years){ //transforms into array
//   //Here we no need to convert years as it will be an array
//   years.forEach(data => console.log(data));
// }

// isFullAge6(1990,1992,1994);


// Another example

// ES5

// function isFullAge(limit){
//   // console.log(arguments); // Here even 18 will become a part of array
//   var arr = Array.prototype.slice.call(arguments,1); // using slice method and passing 1 we are considering from years only
//   // console.log(arr); 
//   arr.forEach((element) => {
//       console.log((new Date().getFullYear() - element) > limit);
//   });
// }
// isFullAge(18,1992,2010,1993); // we can add any number of parameters



// ES6

// function isFullAge6(limit,...years){ //transforms into array
//   //Here we no need to convert years as it will be an array
//   years.forEach(data => {
//     console.log((new Date().getFullYear() - data) > limit)
//   });
// }

// isFullAge6(18,1992,2015,1994);



// function rest(...arguments){ // here it converts into array
//   return arguments.reduce((a,b) => {
//     return a + b;
//   });
// }

// console.log(rest(1,2,3,4,5,6));


// **************************************************** Rest Parameters ends










































// **************************************************** ASynnchronous Programming


// Synnchronous way using callback


// let second = () => {
//   console.log(`Hey second`);
// }

// let first = () => {
//   console.log(`Hey First`);
//   second();
//   console.log(`Hey third`);
// }

// first();


// Asynchrounous way using callback

// example one

// let second = () => {
//   setTimeout(() => {
//     console.log(`Hey second`);
//   },3000); // Here we are assuming that data is coming after 3 seconds
// }

// let first = () => {
//   console.log(`Hey First`);
//   second();
//   console.log(`Hey third`);
// }

// first();

// example two:

// function getReceipe() {
//   let receipeId = [1, 2, 3, 4];

//   setTimeout((receipe) => {
//     console.log(receipe);

//     setTimeout((id) => {
//       console.log(id);
//     }, 1000, receipe[1]);

//   }, 2000, receipeId); 
// }

// getReceipe();

// If we are using Callbacks for Asynchronous programming code structring might become more complex because in above case we have just used only two callbacks but what if we have more hence callbacks are referred as callback hell in asynchrous programming.




// loadData1 = function (){
//   var xhr = new XMLHttpRequest();
//   xhr.open('GET','https://api.chucknorris.io/jokes/random',true);

//   xhr.onload = function(){
//     if(this.status = 200){
//       console.log(this.responseText);
//     }
//   }
//   xhr.send()
// }

// loadData2 = function (){
//   var xhr = new XMLHttpRequest();
//   xhr.open('GET','https://jsonplaceholder.typicode.com/photos',true);

//   xhr.onload = function(){
//     if(this.status = 200){
//       console.log(this.responseText);
//     }
//   }
//   xhr.send()
// }

// document.getElementById('first').addEventListener('click',() => {
//   this.loadData2();
//   this.loadData1();
//   console.log('asdsad');
// })


// console.log('asdsada');




// Asynchrounous way using Promises by example


// Sample example

// document.getElementById('first').addEventListener('click',() => {
//   let getJokes1 = fetch('https://api.chucknorris.io/jokes/random');
//   getJokes1.then((data) => {
//     console.log(data);
//   })
// })



// document.getElementById('second').addEventListener('click',() => {
//   let getJokes2 = fetch('https://jsonplaceholder.typicode.com/comments');
//   getJokes2.then((data) => {
//     console.log(data);
//   })
//   setTimeout(() => { // This code does'nt wait until fetch is completed
//   console.log('asdsadsad');
//   },200) 
// })


// Another example

// var getJokes = fetch('https://api.chucknorris.io/jokes/random'); // This returns a promise and by default it has resolve and reject methods in it hence we can directly use then and catch methods
// console.log(getJokes);


// getJokes.then((jokeReceived) => {
//   return jokeReceived.json() // This  json() returns a Promise hence we can use then again
// }).then((result) => {
//   console.log(result.value);
// }).catch((error) => {
//   console.log(`Error is ${error}`);
// })


// Example using Aysnc/Await.

// async function getJokes(){
//   var getJokes = fetch('https://api.chucknorris.io/jokes/random');
//   var getJoke = await getJokes; // await is like .then, it fetches successful result and stores in variable
//   var convertJson = await getJoke.json(); // since getJoke will also return promise we need to await
//   console.log(convertJson);
// }

// getJokes();


// -----------------------------------Few local examples

//  Creating Promise
// var getId = new Promise((resolve, reject) => {
//   let ids = [10, 120, 20, 30];
//   var show = true;
//   if (show) {
//     resolve(ids)
//   } else {
//     reject('error')
//   }

// })


// var getIndividualId =  function (recIds){
//   return new Promise((resolve,reject) => {
//     setTimeout((recIds) => {
//       resolve(recIds[1]);
//     },5000,recIds)
//   })
// }

 

// Consuming using .then

// getId.then((result) => {
//   console.log(result)
//   return getIndividualId(result)
// }).then((result1) => {
//   console.log(result1);
// }).catch((err) => {
//   console.log(err);
// })

 

// // Consuming using  Async/await cannot  create promise, they only will consume promises

// async function getReceipe() {
//   const id = await getId; // await is like .then, it fetches successful result and stores in variable
//   console.log(id);
//   const individual = await getIndividualId(id);
//   console.log(individual);
// }

// getReceipe()

// **************************************************** ASynnchronous Programming ends



















var name = 'John';

function first(){
  var a = 'First';
  second();
  console.log(a + '' + name);
}



function second(){
  var b = 'Second';
  third();
  console.log(b + '' + name);
}


function third(){
  var c = 'First';
  console.log(c + '' + name);
}

console.log('Outside' + ' ' + name);

first();