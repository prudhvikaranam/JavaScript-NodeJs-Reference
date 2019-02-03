
  

//Calling API goes here

function load(){
  var inputEL =  document.getElementById('name').value;
  
  var http = new XMLHttpRequest();  
  http.open('GET',`https://jsonplaceholder.typicode.com/${inputEL}`,true);
  http.onload = function(){
    if(this.status === 200){
      var data = JSON.parse(this.responseText);
      var output;    
      data.forEach((cust) => {
        output += `
          <ul>
            <li>${cust.id}</li>
            <li><img src=${cust.url}></li>
          </ul>          
        `
      }
      );
      document.getElementById('outputel').innerHTML = output; 
    }else if(this.status === 404){
      document.getElementById('outputel').innerHTML = 'Page Not found'; 
    }else{
      document.getElementById('outputel').innerHTML = 'Some other error occured'; 
    }    
  }
  http.send();
}