// console.log("********************Constructors and **THIS keyword**************");
// console.log("********************Basic example for Constructor**************");


// function Person(firstName,lastName,age){
//   this.fName = firstName;
//   this.lName = lastName;
//   this.age = age;
// }

// var brad = new Person('Brad','Traversy',21);
// console.log(brad);
// console.log(brad.lName); //we can call as below also
// console.log(brad['fName']);

// var John = new Person('John','Doe', brad.age+1);
// console.log(John);
// console.log(John.age);

// // We Can do below (Adding a Property to an Object)
// John.nationality = 'English';
// console.log(John);

// //But difficult to do below (Adding a Property to a Constructor)
// Person.nationality = 'English';
// // instead we can do below
// function Person1(firstName,lastName,age){
//   this.fName = firstName;
//   this.lName = lastName;
//   this.age = age;
//   this.nationality = 'English';
// }

// // var user1 = new Person1(prompt('Please enter user first name'),prompt('Please enter user last name'),prompt('Please enter user age'));

// // document.write(user1.fName,user1.lName,user1.age);








// console.log("********************Prototypes**************");


// function Person(firstName,lastName){
//     this.fName = firstName;
//     this.lName = lastName;
// }
// var prudhvi = new Person('Prudhvi','Karanam');


// Person.prototype.nationality = 'Indian';
// console.log(prudhvi);
// console.log(prudhvi.nationality);

// Person.prototype.greeting = function(){
//   return `Hello ${this.fName} ${this.lName}`
// }
// console.log(prudhvi.greeting());


// Person.prototype.changeLastName = function(newlastName){
//   this.lName = newlastName;
// }

// prudhvi.changeLastName('teja');

// console.log(prudhvi.greeting());

// //to check if an object has a property which is defined in a constructor
// console.log(prudhvi.hasOwnProperty('fName'));

// console.log(prudhvi.hasOwnProperty('greeting')); // These won't work because greeting is not in the actual Person constructor and it is added through prototype






// console.log("********************ProtoTypal Inheritance**************");

// function Person(firstName,lastName){
//     this.fName = firstName;
//     this.lName = lastName;
// }
// var person1 = new Person('John','Doe');

// Person.prototype.fullName = function(){
//   return `${this.fName} ${this.lName}`
// }

// Person.prototype.greeting = function(){
//   return `Hello ${this.fullName()} your are successful Person now` ; //, (these is returning from Person/Person prototype)
// }

// console.log(person1.greeting());

// function Customer(firstName,lastName,country,language){
//   Person.call(this, firstName,lastName);//Using these we inherit the properties of Person Constructor
//   this.country = country;
//   this.language = language;
// }
// Customer.prototype = Object.create(Person.prototype);//Using these we can inherit the prototypes of                                                           Person to Customer

// Customer.prototype.constructor = Customer;

// Customer.prototype.greeting = function(){
//   return `Hello ${this.fullName()}, Your a successful customer now `
// }//Like these we can create a own greeting prototype for Customer separately also, here full name is inheriting from Person prototype since we inherited Person prototype also

// var kevin = new Customer('Kevin','doe','England','English');


// console.log(kevin);
// console.log(kevin.greeting()); //(these is returning from Customer prototype which is returing from Person prorotype)`


// console.log("********************Object.create**************");


// const personPrototype = {
//   greeting : function(){
//     return `Hello ${this.firstName} ${this.lastName}`
//   }
// }


// const mary = Object.create(personPrototype);
// mary.firstName = 'Mary';
// mary.lastName = 'Williams';
// mary.age = 30;
// console.log(mary);
// console.log(mary.greeting());

// const brad = Object.create(personPrototype,{
//   firstName : {value : 'Brad'},
//   lastName : {value : 'Traversy'},
//   age : {value : 30},
// });
// console.log(brad);
// console.log(brad.greeting());


// console.log("********************ES6 Classes**************");

// class Person {
//   constructor(firstName,lastName,gender){
//     this.fName = firstName;
//     this.lName = lastName;
//     this.gender = gender;
//   }
//     greeting(){
//       return `Hello ${this.fName} ${this.lName}`;
//     }

//     static pricePerHead(){
//       var gender = prompt('Please enter your gender');
//       if(gender === 'male'){
//         return `Price is $10`;
//       }else if(gender === 'female'){
//         return `Price is $8`;
//       }else{
//         return `Price is ${10 - 5}`;
//       }      
//     }
// }

// var brad = new Person('Brad','Traversy','male');
// console.log(brad);
// console.log(Person.pricePerHead());



// console.log("********************ES6 Sub Classes**************");


// class Person{
//     constructor(firstName,lastName){
//         this.fName = firstName;
//         this.lName = lastName;
//     }
//     greeting(){
//       return `Hello there ${this.fName} ${this.lName}`
//     }

//     static memberShip(){
//       return 10;
//     }

// }

// var person1 = new Person('John','Doe');

// console.log(person1.greeting());

// console.log(Person.memberShip());


// class Customer extends Person{
//     constructor(firstName,lastName,age,country){
//       super(firstName,lastName);
//       this.age = age;
//       this.country = country;
//     }
//     greeting(){
//       return `Hello Customer ${this.fName} ${this.lName} `
//     }
//     static memberShip(){
//       return 5;
//     }

// }

// var customer1 = new Customer('David','Smith',30,'Australia');
// console.log(customer1);
// console.log(customer1.greeting());
// console.log(Customer.memberShip());


// example

// class Person{
//   constructor(firstName,lastName,country){
//       this.fName = firstName;
//       this.lName = lastName;
//       this.country = country;
//   }
//   greeting(){
//     return `Hello ${this.fName} ${this.lName} now your a citizen of ${this.country}`
//   } 
//   newLastName(newlName){
//     this.lName = newlName;
//   }
//   newcountry(newCountry){
//     this.country = newCountry;
//   }
//   language(){
//       if(this.country === 'india'){
//          return 'Telugu';
//       }
//       else if(this.country === 'America'){
//         return 'English';
//       }
//   }    
  
// }

// class Owner{
//   constructor(location,phone){
//     this.location = location;
//     this.phone = phone;
//   }
// }

// var person1 = new Person('brad','traversy','America');
// person1.newLastName(prompt('Please enter new last name'));
// var newCountry = person1.newcountry(prompt('Please enter new country'));

// // console.log(`${this.person1.greeting()} ${person1.language()}`);

// person1.Owner = new Owner('Boston',948012345);


// console.log(person1);
 

Checking the request with .txt filesadsadsda
