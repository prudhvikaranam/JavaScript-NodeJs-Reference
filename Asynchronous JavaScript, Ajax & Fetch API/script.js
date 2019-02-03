// forEach might be useful

// function(data){ //here data is the data array
//   let output = '';
//   //since data is array we are looping using forEach
//   data.forEach(function(valuesinJson){ 
//      output += `${valuesinJson.id}<br> //here are outputting the data into empty output variable
//                 ${valuesinJson.img}<br>`;
//   })

// console.log("********************Greeting**************");


var date = new Date().getHours();
document.getElementById('greeting').style.font = "bold 20px arial,serif";
document.getElementById('greeting').style.color = "red";

// console.log(date);

var greetingImage = document.createElement('img');


if(date >6 && date < 12){
  document.getElementById('greeting').innerHTML = 'Good Morning Prudhvi, Hope you will something new today';
  greetingImage.src = '';
}else if(date >= 13 && date < 22){
  document.getElementById('greeting').innerHTML = 'Good day Prudhvi, Hope you will learn something new today';
}else if(date > 22 && date < 6){
  document.getElementById('greeting').innerHTML = 'Hey Prudhvi it is already late, Do a fresh start and learn something new tomorrow';
}

// console.log("*****************Another example***Greeting**************");


// var myOtherVar = setInterval (myTimeOfDay, 1000);
// function myTimeOfDay() {
// var currentTime = new Date();
// var h = currentTime.getHours();
// hourarray = ["It's Midnight", "Good Night","Good Night","Good Night","Good Night","Good Morning","Good Morning"
// ,"Good Morning", "Good Morning", "Good Morning", "Good Morning", "Good Morning", " It's Lunch Time",
// "Good Afternoon", "Good Afternoon", "Good Afternoon", "Good Afternoon", "Good Afternoon", "Good Afternoon"
// , "Good Evening", "Good Evening", "Good Evening", "Good Evening"];
// document.getElementById("salute").innerHTML = hourarray[h];
// }






















// console.log("********************XHR Object Methods & Working ***** Text**************");


// function loadData(){
//   var xhr = new XMLHttpRequest();
//   xhr.open('GET','data.txt',true);

//   // xhr.onprogress = function(){
//   //     document.getElementById('output').innerHTML = `<h1><img src='spinner.gif'></h1>`;
//   // }

//   xhr.onload = function(){
//     if(this.status === 200 ){
//       document.getElementById('output').innerHTML = `<h1>
//         ${this.responseText}
//       </h1>`; 
//     }else if(this.status === 404){
//       document.getElementById('output').innerHTML = `<h1>
//         Page not fuond</h1>`
//     }
//   }
//   xhr.send();
// }








// console.log("******************** Working With AJAX *** JSON***********");

//***********************************/Single post**********


// function loadCustomer(){
//   var xhr = new XMLHttpRequest();

//   xhr.open('GET','https://jsonplaceholder.typicode.com/posts/1',true);

//   xhr.onload = function(){
//     if(this.status === 200){
//       var customer = JSON.parse(this.responseText);
//       document.getElementById('customerid').innerHTML = `<h4>
//       Customer Id: ${customer.id}<br>
//       Customer title: ${customer.title}<br>
//       Customer body: ${customer.body}
//       </h4>`
//       // or we can assign an variable like below
//       // var output = `<h4>
//       // Customer Id: ${customer.id}<br>
//       // Customer title: ${customer.title}<br>
//       // Customer body: ${customer.body}
//       // </h4>`
//       // document.getElementById('customer').innerHTML = output;
//     }
//   }
//   xhr.send();
// }




//***********************************Multiple posts**********


function loadCustomers(){
  
  var xhr = new XMLHttpRequest();

  xhr.open('GET','products.json',true);

  xhr.onload = function(){
    if(this.status ===200){}
      var customers = JSON.parse(this.responseText);
      var image = document.createElement('img');
      var output;
      customers.forEach(function(cust){
        output += `
          <ul>
            <li>${cust.id}</li>
            <li>${cust.img}</li>
          </ul>
        `
      }
      );
      document.getElementById('customers').innerHTML = output;
  }
  xhr.send();
}




// console.log("******************** Working With AJAX ******* JSON (Sample Chuck Norris Project) **************");

// function loadCustomersFromInput(){
  
//   var xhr = new XMLHttpRequest();
//   var input = document.getElementById('number').value;
  
//   xhr.open('GET',`http://api.icndb.com/jokes/random/${input}`,true);

//   if(input ==''){
//     alert('Please enter a value');
//   }else{
//     if(xhr.readyState != 4){
//       document.getElementById('output1').innerHTML = `<h1><img src='spinner.gif'></h1>`;
//     }
//   }   
    
//    xhr.onload =  function(){
//       if(this.status ===200){
//         var output1;
//         var customers = JSON.parse(this.responseText);
//         customers.value.forEach(function(cust){
//           output1+= `<h5>
//             ${cust.id}<br>       
//             ${cust.joke}<hr>
//           </h5>`
//         }
//         )
//       }
      
//       document.getElementById('output1').innerHTML = output1;
//   }
//     xhr.onerror = function(){
//       console.log('Some error occured');
//     }  
//   xhr.send();
// }














// console.log("******************** Sample example on callbacks **************");

// function fn(){
//   console.log('Hello from Sample example on callbacks example');
// }
// window.setTimeout(fn,900);


// var posts = [
//   {title:'Post One',body:'body one'},
//   {title:'Post two',body:'body two'},
//   {title:'Post three',body:'body three'}
// ]

// ************************************Callbacks with loading data synchronusly

// function createPost(post){
//   setTimeout(function(){
//     posts.push(post);
//   },1000);
// }

// function displayPost(){
//   setTimeout(function(){
//     let output;
//     posts.forEach(function(postt){
//       output += `<li>${postt.title}</li>`
//     });
//     document.body.innerHTML = output;
//   },3000)
// }

// createPost({title:'Post four',body:'post four'});

// displayPost();



// ************************************Callbacks with loading data ASynchronusly


// function createPost(post,callback){
//   setTimeout(function(){
//     posts.push(post);
//     callback();
//   },5000);
// }

// function displayPost(){
//   setTimeout(function(){
//     let output;
//     posts.forEach(function(postt){
//       output += `<li>${postt.title}</li>`
//     });
//     document.body.innerHTML = output;
//   },1000)
// }

// createPost({title:'Post four',body:'post four'},displayPost);













// console.log("******************** Custom HTTP Library (AJAX with callbacks) ****Project(get data)******check easyhttp.js external file****");

// var http = new easyhttp();

// //Fetch the Details of API by passing the link in the input field

// function load(){
//   var link = document.getElementById('loadTheLink').value;
//   if(link === ''){
//     console.log('Please paste a valid link');
//   }else{
//     http.getPost(link,function(error,response){
//       if(error){
//         console.log(error);
//       }else{
//         console.log(response);
//       }
//     });
//   }
// }


 // or by passing link directly
// http.getPost('https://jsonplaceholder.typicode.com/posts',function(error,response){
//   if(error){
//     console.log(error);
//   }else{
//     console.log(response);
//   }
// })







// console.log("******************** Custom HTTP Library (AJAX with callbacks) **********check easyhttp.js external file POST method****");

// // const datas = {
// //   body : prompt('PLease enter some text'), //we can hardcore a text or we can get an value from input field
// //   title : prompt('PLease enter some tiel') //we can hardcore a text or we can get an value from input field
// // };
// // http.post('https://jsonplaceholder.typicode.com/posts',datas,function(error,response){
// //   if(error){
// //     console.log(error);
// //   }else{
// //     console.log(response);
// //   }
// // });










// console.log("******************** Custom HTTP Library (AJAX with callbacks) **********check easyhttp.js external file PUT method****");

// // const data = {
// //   body : 'new updated body',
// //   title : 'new updated title'
// // }

// // http.put('https://jsonplaceholder.typicode.com/posts/1',data,function(error,response){
// //   if(error){
// //     console.log(error);
// //   }else{
// //     console.log(response);
// //   }
// // });




// console.log("******************** Custom HTTP Library (AJAX with callbacks) **********check easyhttp.js external file DELETE method**Pendings`**");











// console.log("************Promises**********");

// ****************************************Basic structure
// const promise = new Promise((resolve, reject) => {
//   //asynchronous code goes here
// });


// *****************************************Basic structure example


// let promiseToCleanTheRoom = new Promise(function(resolve, reject) {
//   //cleaning the room
//   let isClean = false;
//   if (isClean) {
//     resolve('Clean');
//   } else {
//     reject('not Clean');
//   }
// });

// promiseToCleanTheRoom.then(function(fromResolve) {
//   console.log('the room is' + fromResolve);
// }).catch(function(fromReject){
// 	console.log('the room is' + fromReject);
// })


//****************************Basic structure Another example with dependencies

// Link: https://www.youtube.com/watch?v=s6SH72uAn3Q

// let cleanRoom = function() {
//   return new Promise(function(resolve, reject) {
//     resolve('Cleaned The Room');
//   });
// };

// let removeGarbage = function(message) {
//   return new Promise(function(resolve, reject) {
//     resolve(message + ' remove Garbage');
//   });
// };

// let winIcecream = function(message) {
//   return new Promise(function(resolve, reject) {
//     resolve( message + ' won Icecream');
//   });
// };

// cleanRoom().then(function(result){
// 	return removeGarbage(result);
// }).then(function(result){
// 	return winIcecream(result);
// }).then(function(result){
// 	console.log('finished ' + result);
// })



// ****************************************Sample Example

// var keepsHisWord;
// keepsHisWord = true;
// promise1 = new Promise(function(resolve, reject) {
//   if (keepsHisWord) {
//     resolve("The man likes to keep his word");
//   } else {
//     reject("The man doesnt want to keep his word");
//   }
// });
// console.log(promise1);

// ****************************************Another Example


// var momsPromise = new Promise(function(resolve, reject) {
//   momsSavings = 20000;
//   priceOfPhone = 60000;
//   if (momsSavings > priceOfPhone) {
//     resolve({
//       brand: "iphone",
//       model: "6s"
//     });
//   } else {
//     reject("We do not have enough savings. Let us save some more money.");//These would be the value, resolve(value), here these can is passed as reason in the below catch method 
//   }
// });
// momsPromise.then(function(value) {
//   console.log("Hurray I got this phone as a gift ", JSON.stringify(value));
// });
// momsPromise.catch(function(reason) {
//   console.log("Mom coudn't buy me the phone because ", reason);
// });
// momsPromise.finally(function() {
//   console.log(
//     "Irrespecitve of whether my mom can buy me a phone or not, I still love her"
//   );
// });


//  ********************************My Another example

// var posts1 = [
//   {title : 'Post one'}
// ]

// function createPost(post){
//   return new Promise(function(resolve,reject){
//     setTimeout(function(){
//       posts1.push(post);
//       const error = false;
//       if(!error){
//         resolve();
//       }else{
//         reject('something went wrong');
//       }
//     },100 * 5000);
//   });
// }

// function displayPost(){
//   setTimeout(function(){
//     let output;
//     posts1.forEach(function(postt){
//       output += `<li>${postt.title}</li>`
//     });
//     document.body.innerHTML = output;
//   },1000)
// }

// createPost({title:'Post two'}).then(displayPost).catch(function(err){
//   console.log(err);
// });










// console.log("*********************************FETCH API**********");
// // ***********************************Getting data from .txt file

// document.getElementById('buttonF-data').addEventListener('click',getText);

// function getText(){
//   fetch('data.txt')
//   .then(function(response){ //these .then tells that we got successed in fetching some file from fetch and goes to next .then, if it gets rejected in fetchinig the data these .then will be ignored and it directly goes to .catch hence thowing the error
//      return response.text();
//   })
//   .then(function(data){ //these .then tells that OK sicnce we got some succcessed in fetching we will output the data
//      console.log(data);
//   })
//   .catch(function(err){// these executes if 1st .then fails in fetching the data
//       console.log(err);
//   })
// };





//  ****************************************Getting data from JSON file


// document.getElementById('buttonF-JSON').addEventListener('click',getJSON);

// function getJSON(){
//   fetch('products.json')
//   .then(function(response){ 
//      return response.json();
//   })
//   .then(function(data){
//      let output = '';
//      data.forEach(function(valuesinJson){
//         output += `${valuesinJson.id}<br>
//                    ${valuesinJson.img}<br>`;
//      })
//      document.getElementById('fetchoutput').innerHTML = output;
//   })
//   .catch(function(err){
//       console.log(err);
//   })
// };






//  *********************************************Getting data from JSON file


// document.getElementById('buttonF-JSON').addEventListener('click',getJSON);

// function getJSON(){
//   fetch('products.json')
//   .then(function(response){ 
//      return response.json();
//   })
//   .then(function(data){
//      let output = '';
//      data.forEach(function(valuesinJson){
//         output += `${valuesinJson.id}<br>
//                    ${valuesinJson.img}<br>`;
//      })
//      document.getElementById('fetchoutput').innerHTML = output;
//   })
//   .catch(function(err){
//       console.log(err);
//   })
// };





// //  **************************************Getting data from API


// document.getElementById('buttonF-External').addEventListener('click',getAPI);

// function getAPI(){
//   fetch('https://jsonplaceholder.typicode.com/posts')
//   .then(function(response){ 
//      return response.json();
//   })
//   .then(function(data){
//      let output = '';
//      data.forEach(function(valuesinAPI){
//         output += `${valuesinAPI.id}<br>
//                    ${valuesinAPI.title}<br>`;
//      })
//      document.getElementById('fetchoutput').innerHTML = output;
//   })
//   .catch(function(err){
//       console.log(err);
//   })
// };













// console.log("************ARROW function**********");

// ***********************************normal function
// function something(){
//   console.log('Hello! These is a normal function');
// }
// something();


// var something1 = function (){
//   console.log('Hello! These is also a  normal function');
// }
// something1();


//*************************************** */Arrow function

// var arrowFunction = () => {console.log('Hello These is a arrow function')};
// arrowFunction();

// var arrowFunction1 = () => console.log('Hello These is also arrow function');
// arrowFunction1();




// console.log("************ASYNC/AWAIT (ES7)**********");
