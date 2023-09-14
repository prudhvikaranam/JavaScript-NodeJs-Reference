// ----------------Thread pool 

const crypto = require("crypto");
// Example 1: This will be the synchronous version and will neither enter event loop nor the thread pool and we see the time in the console

// Sync suffix always runs in the main thread and is blocking
// Try increasing the pbkdf2Sync methods we see a increase in the the time.

// console.time('threadPool Time with synchronous time');
// crypto.pbkdf2Sync('password',"salt",10000,512,"sha512");
// crypto.pbkdf2Sync('password',"salt",10000,512,"sha512");
// crypto.pbkdf2Sync('password',"salt",10000,512,"sha512");
// crypto.pbkdf2Sync('password',"salt",10000,512,"sha512");
// crypto.pbkdf2Sync('password',"salt",10000,512,"sha512");
// crypto.pbkdf2Sync('password',"salt",10000,512,"sha512");
// crypto.pbkdf2Sync('password',"salt",10000,512,"sha512");
// crypto.pbkdf2Sync('password',"salt",10000,512,"sha512");


// console.timeEnd('threadPool Time with synchronous time');



// Example 2: 

// Here pbkdf2 runs inside eventloop (Thread pool) hence we can't use the console.time() methods because console.time() methods are in top level and is executed and time is shown before itself (as it is top level code).

// NOTE ************* : A few async methods like fs.readFile and crypto.pbkdf2 run on a separate threads in libuv's thread pool. They do run synchronously in their own thread but as far as the main thread is concerned, it appears as if the method is  running asynchronously. 

// NOTE ************* : One thing to remember is that if we increase the thread pool size to more than our machine's CPU cores then the average time taken per method execution also increases.


// const start = Date.now();
// process.env.UV_THREADPOOL_SIZE = 4;
// const maxSize = 2;

// for (let i = 0; i < maxSize; i++) {
//     crypto.pbkdf2('password', "salt", 10000, 512, "sha512", () => { // This entire CB code will occupy one thread (that means when i = 0, it occupies one thread, when i = 1 it occupies another thread and when i = 2 it occupies one more thread and it continues to occupy the threads for each iteration); -------------------- and the code inside this CB will run synchrously.
         
//         console.log(`Hash 1st--- ${i + 1} ${Date.now() - start}`);
//         // for (let j = 0; j < 5; j++) {
//         //     console.log(`Executing for loop with J = ${j + 1} and I = ${i + 1}`)
//         // }
//         // console.log(`Hash 2nd--- ${i + 1} ${Date.now() - start}`);
//     })
// }

