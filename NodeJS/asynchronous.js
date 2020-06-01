console.time("First");
setTimeout(() => {
  console.timeEnd("First");
  console.log("Timer with 3 seconds");
  console.time("second");
}, 3000);

setTimeout(() => {
  console.log("Timer with 4 seconds");
  console.timeEnd("second");
}, 2000);
