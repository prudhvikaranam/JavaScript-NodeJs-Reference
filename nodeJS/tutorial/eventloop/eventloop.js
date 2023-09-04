// ---------------------------------- Event loop flow of Microtasks queue ----------------------------------------------------------
// First priority is given to process queue once all CB's are done in there then queue is entered into Promise and once all are done in there and if there are any pending tasks in process queue then it again triggers those CB's if there are no then exists the loop

// See image processNextTick.png in folder to check pros and cons

Promise.resolve().then(() => {
    console.log('promise resolve 1');
})

Promise.resolve().then(() => {
    console.log('promise resolve 2');
    process.nextTick(() => {
        console.log('process next tick inside Promise resolve 2');
    })
})

Promise.resolve().then(() => {
    console.log('promise resolve 3');
})

process.nextTick(() => {
    console.log('process next tick 1');
    Promise.resolve().then(() => {
        console.log('promise resolve inside nexttick 1');
    })
})

process.nextTick(() => {
    console.log('process next tick 2');
    process.nextTick(() => {
        console.log('process next tick innerr 2');
    })
})

process.nextTick(() => {
    console.log('process next tick 3');
})

setImmediate(() => {
    Promise.resolve().then(() => {
        console.log('promise resolve inside timeout');
    })
});




