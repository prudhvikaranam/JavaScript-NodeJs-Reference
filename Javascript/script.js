
console.log("************for Each**********");

var array = ['John','Doe','Brad','Traversy'];

// 1st Method

array.forEach(function(valueInArray){
  console.log(valueInArray);
})

// 2nd Method  or we can create a separate function and assign that value to a variable

var valueUsingVar = function(value){
  console.log(value);
}

array.forEach(valueUsingVar);

// We can pass 3 argument in array.forEach

array.forEach(function(item,index,something){
  console.log(index + 'hello ' +item);
  console.log(something);
})
