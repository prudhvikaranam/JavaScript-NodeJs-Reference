function Book(id,name,company,telephone,companyid,image){
  this.id = id;
  this.name = name;
  this.company = company;
  this.telephone = telephone;
  this.companyid = companyid;
  this.image = image;
}

function UI(){}
UI.prototype.addBookToList = function(book1){
  const list = document.getElementById('emp-list');
  const row = document.createElement('tr');
  const image = document.createElement('img');
  image.setAttribute('src',book1.image.value);
  image.width = '25';
  row.innerHTML = `
    <td>${book1.id}</td>
    <td>${book1.name}</td>
    <td>${book1.company}</td>
    <td>${book1.telephone}</td>
    <td>${book1.companyid}</td>
    `
  list.appendChild(row);
  list.appendChild(image);

}
var id = 0;

document.getElementById('form').addEventListener('submit',
  function(e){
    var name = document.getElementById('name').value,
     company = document.getElementById('company').value,
     telephone = document.getElementById('telephone').value;
      id = id+1;
    var companyid;
          if(company === 'Altisource'){
              companyid = `##1`;
          }else if(company === 'tvsr'){
            companyid = '##5';
          }else{
            companyid = 'Metioned Company has not yet assigned a Company ID';
          }
    var image = document.getElementById('image');
    
    var book = new Book(id,name,company,telephone,companyid,image);
    var ui = new UI();
    ui.addBookToList(book);
    e.preventDefault();
  }
);



// //see below to understand more 

// function Book(name,company,telephone){
//   this.name = name;
//   this.company = company;
//   this.telephone = telephone;
// }

// // UI constructor
// function UI(){}
// //prototype for UI and passing parameters as book1
// UI.prototype.addBookToList = function(book1){
//   console.log(book1);
// }

// // Person.prototype.newlastName = function(newLastName){
// //   this.lastName = newLastName;
// // }

// document.getElementById('form').addEventListener('submit',
//   function(e){
//     var name = document.getElementById('name').value,
//      company = document.getElementById('company').value,
//      telephone = document.getElementById('telephone').value;

//     //When button is clicked instantiate Book and UI constructor
//     // instnatiating book so that it takes all the parameters passed in Book Constructor
//     var book = new Book(name,company,telephone);

//     var ui = new UI();
//     // var person1 = new Person():
//     // and add book to ui prototype
//     ui.addBookToList(book);
//     // person1.newlastName(someName);
//     e.preventDefault();
//   }
// );




// // Without a prototype method

// function Book(id,name,company,telephone,companyid,image){
//   this.id = id;
//   this.name = name;
//   this.company = company;
//   this.telephone = telephone;
//   this.companyid = companyid;
// }

// function UI(book){
//   this.book = book;
//   const list = document.getElementById('emp-list');
//   const row = document.createElement('tr');
//   row.innerHTML = `
//     <td>${book.id}</td>
//     <td>${book.name}</td>
//     <td>${book.company}</td>
//     <td>${book.telephone}</td>
//     <td>${book.companyid}</td>
//     `
//   list.appendChild(row);
// }

// var id = 0;

// document.getElementById('form').addEventListener('submit',
//   function(e){
//     var name = document.getElementById('name').value,
//      company = document.getElementById('company').value,
//      telephone = document.getElementById('telephone').value;
//       id = id+1;
//     var companyid;
//           if(company === 'Altisource'){
//               companyid = `##1`;
//           }else if(company === 'tvsr'){
//             companyid = '##5';
//           }else{
//             companyid = 'Metioned Company has not yet assigned a Company ID';
//           }
    
    
//     var book = new Book(id,name,company,telephone,companyid);
//     var ui = new UI(book);
 
//     console.log(ui.book);
//     e.preventDefault();
//   }
// );


// // Without creating a UI constructor

// function Book(id,name,company,telephone,companyid,image){
//   this.id = id;
//   this.name = name;
//   this.company = company;
//   this.telephone = telephone;
//   this.companyid = companyid;
// }
// var id = 0;
// document.getElementById('form').addEventListener('submit',
//   function(e){
//     var name = document.getElementById('name').value,
//      company = document.getElementById('company').value,
//      telephone = document.getElementById('telephone').value;
//       id = id+1;
//     var companyid;
//           if(company === 'Altisource'){
//               companyid = `##1`;
//           }else if(company === 'tvsr'){
//             companyid = '##5';
//           }else{
//             companyid = 'Metioned Company has not yet assigned a Company ID';
//           }
//     var book = new Book(id,name,company,telephone,companyid);
//     const list = document.getElementById('emp-list');
//     const row = document.createElement('tr');
//     row.innerHTML = `
//       <td>${book.id}</td>
//       <td>${book.name}</td>
//       <td>${book.company}</td>
//       <td>${book.telephone}</td>
//       <td>${book.companyid}</td>
//       `
//   list.appendChild(row);
//     e.preventDefault();
//   }
// );