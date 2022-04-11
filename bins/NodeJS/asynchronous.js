// // console.time("First");
// // setTimeout(() => {
// //   console.timeEnd("First");
// //   console.log("Timer with 3 seconds");
// //   console.time("second");
// // }, 3000);

// // setTimeout(() => {
// //   console.log("Timer with 4 seconds");
// //   console.timeEnd("second");
// // }, 2000);

// // var promise = new Promise((resolve, reject) => {
// //   a = "Hello";
// //   b = "Hello";

// //   if (a === b) {
// //     resolve(`Hey you are correct ${a} is equal to ${b}`);
// //   } else {
// //     reject(`Hey you are wrong ${a} is not equal to ${b}`);
// //   }
// // });

// // promise
// //   .then((data) => {
// //     console.log(data);
// //   })
// //   .catch((err) => {
// //     console.log(err);
// //   });

// const api = "./input.txt";

// let data = {
//   abc: "data",
// };

let fetchData = {
  method: "GET",
  headers: new Headers({
    conetn: "asdsad",
  }),
};

// // fetch(api, fetchData)
// //   .then((data) => {
// //     return data.text();
// //   })
// //   .then((data) => {
// //     console.log(data);
// //   })
// //   .catch((err) => {
// //     console.log(err);
// //   });

// -----------------------------Promises

//  fetch returns a promise so we need to consume

const api = "http://api.icndb.com/jokes/";

function forFetch(number) {
  fetch(`${api}${number}`)
    .then((data) => {
      return data.json();
    })
    .then((data) => {
      console.log(data.value.id);
    })
    .catch((err) => {
      console.log(`Some error occured ${err}`);
    });
}

// forFetch(1);

const api = "http://api.icndb.com/jokes/";

// -----------------------------Aync/Await

async function forFetchAsync(number) {
  try {
    const get = await fetch(`${api}${number}`);
    const json = await get.json();
    return json;
  } catch (err) {
    console.log(`Error is ${err}`);
  }
}

forFetchAsync(1).then((data) => {
  console.log(data.value.id, data.value.joke);
});
