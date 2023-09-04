// ---------------------------------- Event loop flow of Microtasks queue starts here------------------------------------------------
// First priority is given to process queue once all CB's are done in there then queue is entered into Promise and once all are done in there and if there are any pending tasks in process queue then it again triggers those CB's if there are no then exists the loop

// See image processNextTick.png in folder to check pros and cons

// Promise.resolve().then(() => {
//     console.log('promise resolve 1');
// })

// Promise.resolve().then(() => {
//     console.log('promise resolve 2');
//     process.nextTick(() => {
//         console.log('process next tick inside Promise resolve 2');
//     })
// })

// Promise.resolve().then(() => {
//     console.log('promise resolve 3');
// })

// process.nextTick(() => {
//     console.log('process next tick 1');
//     Promise.resolve().then(() => {
//         console.log('promise resolve inside nexttick 1');
//     })
// })

// process.nextTick(() => {
//     console.log('process next tick 2');
//     process.nextTick(() => {
//         console.log('process next tick innerr 2');
//     })
// })

// process.nextTick(() => {
//     console.log('process next tick 3');
// });

// setImmediate(() => {
//     Promise.resolve().then(() => {
//         console.log('promise resolve inside timeout');
//     })
// });
// ---------------------------------- Event loop flow of Microtasks queue ends here------------------------------------------------

// *****************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************


// ---------------------------------- Event loop flow of Timers starts here------------------------------------------------

// Before Timer, I/O and immeddiate queues....process.nextTick and promise queue's take priority.
// Also CB's in the microtask queue are executed in between the execution of callbacks in timer queue. (After execution of every callback in the timer queue the event loop goes back and checks the microtask queue, if there are any it will execute them else event loop will continue executing the call back in the Timer queue)

// process.nextTick(() => {
//     console.log('Process Tick 1');
// })

// process.nextTick(() => {
//     console.log('process next tick 2');
//     process.nextTick(() => {
//         console.log('process next tick inside nexttick 2');
//     })
// })

// Promise.resolve().then(() => {
//     console.log('promise resolve 1');
// })


// Promise.resolve().then(() => {
//     console.log('promise resolve 2');
//     Promise.resolve().then(() => {
//         console.log('promise inside promise resolve 2');
//     })
// })

// setTimeout(() => {
//     console.log('Timer 1');
// }, 0)


// setTimeout(() => {
//     console.log('Timer 2');
//     process.nextTick(() => {
//         console.log('Process Tick inside timer 2'); // This will be executed before the next setTimeout because CB's in the microtask queue are executed in between the execution of callbacks in timer queue.
//     })
//     Promise.resolve().then(() => {
//         console.log('promise resolve inside Timer 2'); // This will be executed before the next setTimeout because CB's in the microtask queue are executed in between the execution of callbacks in timer queue.
//     })
// }, 0)

// setTimeout(() => {
//     console.log('Timer 4');
//     process.nextTick(() => {
//         console.log('Process Tick inside timer 4');
//     })
// }, 0)

// setTimeout(() => {
//     console.log('Timer 3');
//     process.nextTick(() => {
//         console.log('Process Tick inside timer 3');
//     })
// }, 0)


// ---------------------------------- Event loop flow of Timers ends here------------------------------------------------


// *****************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************




// ---------------------------------- Event loop flow of I/O starts here------------------------------------------------
