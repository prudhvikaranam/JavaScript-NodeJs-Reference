function easyhttp(){
  this.http = new XMLHttpRequest();
}

// console.log("**************GET Method***********");

// //Tried by directly passing url into onload


// easyhttp.prototype.getPost = function(){
//   this.http.open('GET','https://jsonplaceholder.typicode.com/posts',true);
//   var self = this;
//   this.http.onload = function(){
//     if(self.http.status){
//       console.log(self.http.responseText);
//     }
//   }

//   this.http.send();
// }

// var http = new easyhttp();
// http.getPost();


// //getting the url dynamically from Input box

function easyhttp(){
  this.http = new XMLHttpRequest;
}

easyhttp.prototype.getPost = function(url,callback){
  this.http.open('GET',url,true);
  
  this.http.onload = () =>{
    console.log(this.http.readyState);
    if(this.http.status ===200){
      callback(null,this.http.responseText);
    }else{
      callback('Error is :' + this.http.status)
    }
  }

  this.http.send();
}


// console.log("**************PUT Method***********");

easyhttp.prototype.post = function(url,data,callback){
  this.http.open('POST',url,true);

  this.http.setRequestHeader('Content-type','application/JSON');
  var self = this;
  this.http.onload = function(){
     callback(null,self.http.responseText);
     //console.log(self.http.responseText); 
  }

  this.http.send(JSON.stringify(data));
}

// console.log("**************PUT Method***********");

easyhttp.prototype.put = function(url,data,callback){
  this.http.open('PUT',url,true);

  this.http.setRequestHeader('Content-type','application/JSON');
  var self = this;
  this.http.onload = function(){
     callback(null,self.http.responseText);
     //console.log(self.http.responseText); 
  }

  this.http.send(JSON.stringify(data));
}

// console.log("**************DELETE Method***********");





