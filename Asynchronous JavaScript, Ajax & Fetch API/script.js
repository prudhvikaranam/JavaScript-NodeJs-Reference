var date = new Date().getHours();
document.getElementById('greeting').style.font = "bold 20px arial,serif";
document.getElementById('greeting').style.color = "red";

var greetingImage = document.createElement('img');


if(date >6 && date < 12){
  document.getElementById('greeting').innerHTML = 'Good Morning Prudhvi, Hope you will something new today';
  greetingImage.src = '';
}else if(date > 13 && date < 22){
  document.getElementById('greeting').innerHTML = 'Good day Prudhvi, Hope you will learn something new today';
}else if(date > 22 && date < 6){
  document.getElementById('greeting').innerHTML = 'Hey Prudhvi it is already late, Do a fresh start and learn something new tomorrow';
}


console.log("********************XHR Object Methods & Working With Text**************");
function loadData(){
  var xhr = new XMLHttpRequest();
  xhr.open('GET','data.txt',true);

  // xhr.onprogress = function(){
  //     document.getElementById('output').innerHTML = `<h1><img src='spinner.gif'></h1>`;
  // }

  xhr.onload = function(){
    if(this.status === 200 ){
      document.getElementById('output').innerHTML = `<h1>
        ${this.responseText}
      </h1>`; 
    }else if(this.status === 404){
      document.getElementById('output').innerHTML = `<h1>
        Page not fuond</h1>`
    }
  }
  xhr.send();
}



console.log("******************** Working With AJAX and JSON**************");

//Single post
function loadCustomer(){
  var xhr = new XMLHttpRequest();

  xhr.open('GET','https://jsonplaceholder.typicode.com/posts/1',true);

  xhr.onload = function(){
    if(this.status === 200){
      var customer = JSON.parse(this.responseText);
      // document.getElementById('customer').innerHTML = `<h4>
      // Customer Id: ${customer.id}<br>
      // Customer title: ${customer.title}<br>
      // Customer body: ${customer.body}
      // </h4>`
      // or we can assign an variable like below
      var output = `<h4>
      Customer Id: ${customer.id}<br>
      Customer title: ${customer.title}<br>
      Customer body: ${customer.body}
      </h4>`
      document.getElementById('customer').innerHTML = output;
    }
  }
  xhr.send();
}

//Multiple posts

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

// // console.log("******************** Working With AJAX and JSON (Sample Project) **************");

function loadCustomersFromInput(){
  
  var xhr = new XMLHttpRequest();
  var input = document.getElementById('number').value;
  
  xhr.open('GET',`http://api.icndb.com/jokes/random/${input}`,true);

  if(input ==''){
    alert('Please enter a value');
  }else{
    if(xhr.readyState != 4){
      document.getElementById('output1').innerHTML = `<h1><img src='spinner.gif'></h1>`;
    }
  }   
    
   xhr.onload =  function(){
      if(this.status ===200){
        var output1;
        var customers = JSON.parse(this.responseText);
        customers.value.forEach(function(cust){
          output1+= `<h5>
            ${cust.id}<br>
            ${cust.joke}<hr>
          </h5>`
        }
        )
      }
      
      document.getElementById('output1').innerHTML = output1;
  }
    xhr.onerror = function(){
      console.log('Some error occured');
    }  
  xhr.send();
}


console.log("******************** Sample example on callbacks **************");

function fn(){
  console.log('Hello from Sample example on callbacks example');
}
window.setTimeout(fn,900);


var posts = [
  {title:'Post One',body:'body one'},
  {title:'Post two',body:'body two'},
  {title:'Post three',body:'body three'}
]

// Callbacks with loading data synchronusly

// function createPost(post){
//   setTimeout(function(){
//     posts.push(post);
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

// createPost({title:'Post four',body:'post four'});

// displayPost();

// Callbacks with loading data ASsynchronusly


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



console.log("******************** Custom HTTP Library (AJAX with callbacks) **********check easyhttp.js external file****");

var http = new easyhttp();

//Fetch the Details of API by passing the link in the input field

function load(){
  var link = document.getElementById('loadTheLink').value;
  if(link === ''){
    console.log('Please paste a valid link');
  }else{
    http.getPost(link,function(error,response){
      if(error){
        console.log(error);
      }else{
        console.log(response);
      }
    });
  }
}
 // or by passing link directly
// http.getPost('https://jsonplaceholder.typicode.com/posts',function(error,response){
//   if(error){
//     console.log(error);
//   }else{
//     console.log(response);
//   }
// })




console.log("******************** Custom HTTP Library (AJAX with callbacks) **********check easyhttp.js external file POST method****");

// const datas = {
//   body : prompt('PLease enter some text'), //we can hardcore a text or we can get an value from input field
//   title : prompt('PLease enter some tiel') //we can hardcore a text or we can get an value from input field
// };
// http.post('https://jsonplaceholder.typicode.com/posts',datas,function(error,response){
//   if(error){
//     console.log(error);
//   }else{
//     console.log(response);
//   }
// });


console.log("******************** Custom HTTP Library (AJAX with callbacks) **********check easyhttp.js external file PUT method****");

const data = {
  body : 'new updated body',
  title : 'new updated title'
}

http.put('https://jsonplaceholder.typicode.com/posts/1',data,function(error,response){
  if(error){
    console.log(error);
  }else{
    console.log(response);
  }
});




















document.getElementById('buttonZ').addEventListener('click', getExOne);


var source = document.createAttribute('src');
function getExOne(){
const xhr= new XMLHttpRequest();
xhr.open('GET', 'data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wCEAAkGBxAQEA8QEBIQFQ8PDw0PDw4PEBAQDw8NFREXFhUVFRUYHSggGBolHRUVITEhJSkrLi4uFx8zODMtNygtLisBCgoKDg0OGhAQGy4lHyUtLS0rLS0vLS0tLS0tLS0tKy0tLS0tLS0tLS0tLSsrLS0rLS0tLS0tLS0tLSstLS0tLf/AABEIALcBEwMBIgACEQEDEQH/xAAcAAACAwEBAQEAAAAAAAAAAAAAAwECBAUGBwj/xAA9EAACAQMCAwYEAggEBwAAAAAAAQIDERIEITFBYQUiUXGBkRNSobEyQgYUFWKSwdHwQ1OC4QcWIzNyovH/xAAaAQADAQEBAQAAAAAAAAAAAAAAAQIDBAYF/8QAJREAAgIBBAICAwEBAAAAAAAAAAECERIDEyFRBDFBYRQiocGR/9oADAMBAAIRAxEAPwD5MkWSJsWSPQHzmyqRKRdImwybISJsSkXSCiWymJOJdItYCbF4hiNxDEdCyFYhiMxCw6DIXiRiNxIcQoMhdgsMxJsOgyF4hiMsFgoLKYhiMsFgoWQpxDEa0RYKHYrEMRtgsKh5CsSMRtiLBQWKsGI3EhxFQ8hTRVoa0VaCikxdiLDLBYQ7FWBxGYkNAOxVgL2ACrGWJSL2JSHRjZVIlRLKJZIdCbKYlki1i1gJbISLWJiiyQUQ2VSJxLJFrDomxWIYjcSMR0GQvEhxG4hiOh5ClEMRlgxCgyF4k4jEicQoWQrEnEZiTiFBkJxIxG4hiFBkKxDEbiGIqHkKxIxG4hiFBkJxIaHNFGhUUmJaIxG4kYhRVi8SMRtirQqHYpoq0NaKtBRSYuxAywBRVjkibFlEskBhZRRLKJfElIYsiqRNiyiWUR0Q2USLJFsSyQ6E2VSLJEpFkgohspYMRlicR0LIViGI3EMR0GQjEnEY4k4joeQtRJxLqJbEVCchaiDiNUQcQoWQjEFEa4gohQ8hWIYjsSHEQZCcQxG4kSQUPIRJFGhzRGIUWmKxIxG4kNCHYpoo0OaKtCotMS0Q0NcSrQFJirAXsAFWPxLJF1EsoiOdyKKJbEukWURkuQvElIZiTiMnIpYnEuok4lE5FEiyiWUS6iBLkUUScS6iXUAJchOIYj8CHAYZCHEMRziQojDIUollEuollEAciiiRKJpp0rlJxJJszuJOI3EsoDHkIxIcR7iRiIMhGIuSNMkKcQLTE4g0OxIcQKyEtFXEc0VcQKUhDRDiOcSjQi0xTQuQ5oo0ItMTYBmIDLs2JEqIxRLKJJyOQtRLKJdRLKIyXIook4l8SyQyXIXiSkMxJxGTkLxJSGYk4DFZVRHUVuWpQuaIUH4EtoqEW+UV+GJqUzowolZ0DNTN5ado5jpi1E6ioGd6fvGimjF6UkZFEZCmPVHcfGj9gckKMGytKl3eBlnT3OuqdomWdPiZxnybT0+EY6NG5pVAfSp2JqA5Wxx00lyc+tDeyKVKdkbqdPmJ1aKUuaIlDhs50kGJpp0Gxv6ttd8PuW5JERjJmDEq0aZw9hTQCsS0VaHNC5AUmKkLaGtFWgNExLRVoc0UaEWmKsAywAVZsRdF4ai8MLKye107p9CVTZkpHPJdBGI6FMvQfiaY0ZNXSdvJ7Ccxx021ZkdMh0jbGkMjQHmG1Zz4wLfCOg9KCpND3BbD+TAqYyNL2NvwSypA9QpaJkjSsaoQuMjSG04WZnKZtCFFtM2tuXXdGienv4b7llQfHw+pt09rbp+aMJT+UdcYfDONKjZiK9Kzv9k2eiq6RVH3VHfZXeyly2Fansy8oPf8UYSweUcmuKS2suZH5KT5L/Fclwea+LG747X4pr+2aaKUldc/udbX/ozGlN/hnJu+MYNuMfFrl7/cmEIxli0+7jZpWcbdGuJUfIc1wKXjRh7Zl1dCUdppqXHcwYHW10bsyqkawlwYakeeBCiUdO+xrdMtSp8X7DyFjZmqU7RMDp5M6FZXKxpFKVESjbM8YeyFVdzZOHsJlTBMHHijBUiZ6iN9WKXEwVZXNos5dRUJkLaGVJJbtpLq7HN1naFtoNP95bjlNR9hpwlL0bHERUqpcfoYFrpu/et6Izamu29pN9WjOWsq4OqHju+TfWqx/eu+G9jPHWW5O3Pdv0MHee276Flp5pZWsr8X4mW436OlaMUuWaH2hLwQGb4QBnIrb0+j3S7Mk05R/CrJtyild9LlqWhluns00rf15/QfTrStbl9F1HU5uL2s+O7Sf3MG5V7M1GF20Up6V3d01jxdmle/K/E6el0c5pSbtFf5q2fLa6sK0upUbXinZt35t9enQbqtY6itikr7RSVlt5GLzbr+nQnpxVr/AIM1XZ9KnGTdVOpxjCEU426tcPQwwRanRm77Oy4vkjfQ0U2u7TldJu6/vgaqWCpuzFxc3aVGWJb4Vx8fJeROfRDyFivkpDTdV5cxkdFkr3ivVXuWjK5v7PlRi71E34LZpehEpySs0hGLdGOn2ZJ/mhy2beV/JGqPYFSUG0k2ud3aK67XY2vqVKqpQeCVrNRV1FLpY2a3XXhGEKtR2te8VFP14mEpavFM3jHS5tGPs/SwSip1I5u2KSbinfe7HuKhOVNTyg3e72jl5X38yqqUsMVTvPbvXd15Ipg5Rvi9uaTt7gk/n/Btr4Q39Ui0sZd672ttx23Ffq0pJpZN8Ixj83VjdM+F1exojq5LZbbW7t162XMG2gSXyYe/Tc4SjFPBxadm9+N3xfuWoaWPwpTtGU5ScWpXvHwlF8vUHSbb2be7fFk0qN7LqivsX0c7UUmnYpCieh/Z1GV+/eWEm1Luq78Oq9THqNLjzjuk1j8v8n5jj5CboUtClZy1Qu7eJSvC2yOiqNld8/sIVO7va7fDa5qtQyemYaemfhu+QyropxV3GSV7Xa4s6EMqe6yUuF1dOwqtVqT/ABSbXVtiepJvj0C04pcnKnp6ju4wcopbuL3T8LWObW1DhFuorNOyjaV/Zo9PWqSo0JJKcakk5weajBxXG68dml43PHS0uoqNzmniuMp8OGxnvyy98G68eLj65Ofqu1W21GO31/oJr1WoKScmpKz4bPztxN9bs6cI3+FlFr/uK7V+hn/Z9T4blKElTU9ldpyfO3ltuax8j7MpeJG1wcGpFybe768Ra0lR/ldmd7S1IRuu+k/HvK5oyuljHi/zNRVreG7NFXtsxk5J1GJ5uOjnwttxs+Ayn2e7rJPrY9G6L/dfWKdv/YYoR/NdtRstlx5X/vkXSM3OXaRwaGhxfBPz4G2XZLe8mrKKsndbWtz+xtnFckkFapKXFg4dEx1mk8uejD+yV4P3X8wNLjcB4/Ybn0bZT37qsvC7Y+nUfP3fAVGn1GqD8DmtUbc3bNcad4Kd478IvaTXjYItmdRXkXhkuAk+2OXvhGmNR+JpWqlbG7s+RjVZ80PTXPbzBtArGQfVjFFFYoZFBmPEZFIZGCKRiNhEnMtRGRiOp0RcB0SHItRHae6528jZ+uSww3xtbbmjLRlbhb1SY2DMpNP2bRTXovBwxaweT/Pk9vQZR0rk9rbK/eaQU2MjxIci1ERqaUsnfovbYtS0MrZNOys79HsjdQqY8Ix/1K9vcmrqZyabfDglwXoRuP0Xtr2zM+zpb7JbJ/iW/TzEV9FJSSaaTUd/y26v0ZplJ8ea58Ck6jas27bu19hqUgcYl6nZ1Ga2qLZLnbe3CzM0NHTTazjx2m8uHkiJQFTlYavsmVdF9Ro4XVqqd5JXtsl4+Rn1NOUcrVIqMV3MbZSlvfhw25iZ3f8AewurUxS53W221vP0LSfZDkugpamUUls0nfvJSt7la/aau24wcvG3P7GLV6l47K7fLfu7cbrj5WOdGpK/exxd+F1NPqnyNFCDfKIynFcM3ajWqpjGcU6cW38NPCN+lt0Jc4p7wTT4Kbyirvw+m4nK/TbjxbZaEktnv12f0aNMYr0jLOTfLK6iFGX5IdIqLwS24LkZ5UklJRjBbrlun4bmmMlHh9f6EZfXiwVL0NycvZzp0nzFukdCVhUrGy1DnekYnTKOmapCpD3BbSEYAXsAbhW2WjIfCocyOoGx1COHM7Ns6UZF1FMwQrjoagW4PaN8Ka8X9xk6cX+Ferlz9jFHUDo6gncY9pD5wkrYxXVpt8F4DIVZr/Dy3/fjt7MVDUjoarqS9Rmi010aKMpO94uPSV0OWXgZ46jqNjqOot1j2UOUy0anmLVS5KsG8PYNMK5ppTvwOdivH3V190UTaeXxJXv+FQVvW73IlrI1j47O9SUvB+zNCi+pytPWcrYyW/5ZRs/fI62njOy29pKxzy1zpj4o6MX1CVM1UoSfFP8AiQypSqLhuvDJrYz32VsR9Wc+UBc4pG34Tt3tul7iakLc/ohrXD8ZP0c/UTktrP2ZknK34lu+Bq1eny4TlHokrengcnVae3BzbXi27+a8TWOuZS8U0frEVs1FrZ8X/L7GPU1aEnfvx8cXG1/VcDFOm73kqj/8YS4dG+AippnK3ccUntHl9f73NVNMyei0NqQobb1NuPfbyfUh/DunGNkvFybfnuVjpbKyxXkiropczVakTGWlIJNdPQo5FmkhcqqRe8ZPQYO5VopKuhMtQh7obI6QuTESriZVw3A2TRKSFSkZ5VxMq482G0anMDD8fqQPNj2zjR7Th8y90MXasPmXuePU2T8RkZQL5PYrtinwy+/3HR7Xp/MvdHiPisn4zC4fYXI90u2afzoau2Kfzx90eBVZkrUSD9AuR7+PbtL5/pL+hoj21T/zI+6PnP6zIlal9BY6fYKc+kfSqfblN/4kfXb7jl27Bfnh7nzBauRK10iXDT7KWrLo+sUu10+E6b6Kcb/c1U+0J/KvSaPkC7RmWXak1/8ASHpR7No69e0fa6Orb6eeLOjQ1D6X8bW2Pg67Yn4fUfT/AEiqx4OS8qkkYy8e/Uv4dEPLivaP0Jp6z4/U6FCr5H5x/wCZKrtlk7eM5Oy9UaaH6TNW2l6S/wBjnl4r7OheZCXFH6e0KT5r3R0p0FY/M/Zf6TJSUv8Aqbb7STX2PQan/iHUnBRyqJLhadml7GOTh+uNkvQU/wBlOj69rdrnKrVevpdHxjW/ppUle9Sq1+9Ub9zjV/0mTu7Sv43/AJjjoSlz6NN2Gkuz7hqKvX6nOrauPzL3R8Tqdvt8pddzLU7Xk2rLbn4s6Y+L3L+GM/Nj8R/p9l1HakI8ZwX+pXMVTtenwVSPuj5LLtSXg/co+0Zf2zeOhFfJzy8m/g+rVe0o85x/iRln2pD54/xI+YPXSKPVM0WnBfJk9dv4PpUu1ocM47fvIS+1ofPH+JHzp6lkfrEisYdme5Lo+hT7Tj80fdCn2kvmj7o8D8eRHxpDqAs30e8lruoqWu6niPjS8SPiy8R3Eeb6PZy13VCJ9ox+Ze6PJ/EfiRkwyiLJnq1r14r3QHlMmA84hkyAADIQAAAAAAAAAAABIEAMACwAIAsTiQSAFlEvCC5/zF3LKQmUmbKckl/uyZVvC3qn/Ux5kZEYGu6aJ1X4R9hMpdEUciGykqIlKyW+hFyLkFmZa5BAABIXIAAC4AAAAAAAAAAgAAAAAAAAIAAAAAAACQIAAJAAAAAAAAAAAAAAAAAAACQAAAgAAAAAAAAAAAAAAAAAAAAAAAIAAEAAADAAAAA//9k='  , true);
xhr.onload= function(){
    if(this.status ===200){
    var image = document.createElement('img');
    image.src = `${this.response}`;
      document.getElementById('output4').appendChild(image);
      console.log(this.response);
    }
    };
    xhr.send();
}

