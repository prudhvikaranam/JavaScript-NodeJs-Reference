// class Calculator{
//   add(a,b){
//     return a+b;
//   }

//   sub(a,b){
//     console.log(a-b);
//   }

//   multiply(a,b){
//     console.log(a*b);
//   }

// }

// module.exports = Calculator;

// or like below

module.exports = class{
  add(a,b){
    return a+b;
  }

  sub(a,b){
    console.log(a-b);
  }

  multiply(a,b){
    console.log(a*b);
  }

}