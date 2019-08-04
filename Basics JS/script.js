// var job;
// console.log(job);

// var job1 = null;
// console.log(job1); 

// // var btn = document.getElementById('btn');

// // console.log(btn.innerText);

// function onClickbtn(e){
 
//   if(btn.innerHTML == "Click Me"){
//     btn.innerHTML = "Hey don't click me"
//   }else{
//     btn.innerHTML = "Click Me";
//   }
//   // console.log(e);
// }


// function Person(name,age){
//   this.name = name;
//   this.age = age;
//   this.years = function(){
//     return 2019 - this.age;
//     console.log(this);
//   }
//   return this;
// }
// console.log(Person('Teja',25).years());


// Person.prototype.years = function(){
//   return 2019 - this.age;
  //  console.log(new Date().getFullYear() - this.age);
// }

// Person.prototype.lastName = 'Doe';

// var john = new Person('John',1997);
// console.log(`${john.name} is ${john.years()} years old`);
// // john.years();

// var x  = [0,8,3,7];
// var y = [1,108,3,8];
// var z = x;
// console.log(x);
// console.log(x.indexOf(7));
// var z = x.concat(y).sort((a,b) => {
//   return a -b;
// })


// console.log(z);
// // console.log(x.forEach((a) => {
// //   console.log(a);
// // }));

// function Person(name,emp){
//   return this;
// }
// var a = Person();
// console.log(a);








// --------------------Calling function inside another function


// function calculateAge(yearOfBirth){
//   return 2019 - yearOfBirth
// }

// function retirement(year,firstName){
//   // var age = new Date().getFullYear() - year ;
//   // var yearsLeft = 65 - age;
//   var age = calculateAge(year);
//   var yearsLeft = 65 -age;
//   var name = firstName;
//   return (`Hey ${name} your have ${yearsLeft} years for your retirement`)
// }
// console.log(retirement(1992,'Teja'));












// -----------------------Switch Statements

// function profile(job,firstName){
//   switch(job){
//     case  'Teacher' :
//     return `${firstName}  teaches`;
//     case 'Designer' : 
//     return `${firstName}  designs`;
//     case 'developes' : 
//     return `${firstName}  develops`;
//   }
// }

// var show = profile('Designer','john');
// console.log(show);


// function profile(job,firstName){
//   if(job === 'Teacher'){
//     return `${firstName}  teaches`;
//   }
//   else if(job === 'Designer'){
//     return `${firstName}  designs`;
//   }
//   else{
//     return `${firstName}  does something else`;
//   }
// }

















// -------------------------------------Primitives and Objects --------------------------------------- 

// Primitives (strings,numbers,booleans,null and undefined) : Primitives stores the values in the variables,

// Objects : when an object is created it is stored in some memory and variable gets the values from that memory, so data in the object is not directly stored in the variable. Next time when variable is called or instantiated data of the object is retrieved from that memory

// Primitives

// var a = 23;
// var b = a;

// a = 41;
// console.log(a);
// console.log(b);



//Objects

// var obj1 = {
//   name : 'Teja',
//   age : 27
// }

// var obj2 = obj1;

// console.log(obj1.name);
// console.log(obj2.name);

// // obj1.name = 'John';
// obj1 = {
//   name : 'Brad',
//   age : 45
// }
// obj2 = obj1
// console.log(obj1.name);
// console.log(obj2.name);



// Same above in function scope

// var age = 27;

// var Person = {
//   name : 'John',
//   state : 'Texas'
// }

// function change(a,b) {
//   a = 30;
//   b.state ='San Fransico';
//   console.log(a);
// }

// change(age,Person);

// console.log(age); //27
// console.log(Person.state); //San Fransico










// -------------------------Passing function as an arguments-----------------------


// Passing functions as arguments (callback function) : we pass one function into another function in a situations where we have some logic in one function which we want to execute and call in another function

// ex : function first(fn){
        // some logic
// }

  // function second(){
  //   return some logic
  // }

  // first(second);


  // in the above example logic in the second function will be executed when first function is called. (first function is called by passing second function as a argument)

// var years = [1992,1997,1965,2011,1865];

// function arrayCalculator(arr , fn){
//   var array = [];
//   for(var i = 0; i < arr.length; i++){
//     array.push(fn(arr[i]));
//     // console.log(arr[i]);
//   } 
//   return array;
// }

// function calculateAge(el){
//   return 2019 - el
// }

// // var result = arrayCalculator(years,calculateAge); //[27, 22, 54, 8, 154]
// // console.log(result);

// function fullAge(el){
//   return el >= 18;
// }

// // var isFullAge = arrayCalculator(result,fullAge); //is same as below

// var isFullAge = arrayCalculator(arrayCalculator(years,calculateAge),fullAge);


// // console.log(result);
// console.log(isFullAge);



// ---------------------My example

//  years = [1992,1997,1965,2011,1865];

//  function calculateYears(){
//    var array = ['Hello'];
//    for(var i = 0; i < this.years.length; i++){
//       array.push(2019 - this.years[i]);
//    }
//    return array;
//   //  return this.years[0];
//  }

//  var result = calculateYears();
//  console.log(result);













// ------------------------ Function returning functions ------------------------------------------



// function interviewQuestion(job){
//   if(job === 'designer'){
//     return function(name){
//       for(var i = 0; i < name.length; i++){
//         console.log(`Hey ${name[i]} what can you design`);
//       }
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
// console.log(result); // Now this will return a function
// console.log(result('John'));
// interviewQuestion(' developer')('Jane');

// interviewQuestion('designer')(['Mark','John']);




// function sample(){
//   return function name(name){
//     console.log(`Hey ${name}`);
//   }
// }
// var result = sample();
// console.log(result('Doe'));









// ------------------------ Immediately invoked function Expressions---------------------------------

// example:

// (function(name){
//   alert(`IIFE executed ${name}`);
// })('teja');

// NON IIFE example

// function name(){
//   alert('NON IIFE executed');
// }
// name();













// ------------------------ Clousures---------------------------------


// var b = 'Another something';
// function closures(){
//   var a = 'Something';
//   function name(){  
//     return a;
//     // return b;
//   }
//   return name()
// }
// // console.log(a);

// var result = closures();
// console.log(result);



// function print(){
//   document.write(calculateSum(10,20));
// }

// function calculateSum(first,second){
//   return first + second;
// }
// print();




// function onClickbtn(e){
//   window.print();
//   console.log(e.target.innerHTML);
// }

// var name  = "nnasjdnsandaslnksandksaldnklsandklasnd";
// if(name.indexOf('z') > 1){
// 	alert('YES');
// }else{
// 	alert('NO');
// };
