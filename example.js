let queue = [];
let completed = [];
let numberOfTasks = 100;
let active = 0;
let maxActive = 5;

// Add "task" to queue
for(let i = 0; i < numberOfTasks; i+=1){
  queue.push(`Task ${i}`);
}

// Start recursive processing
processQueue();

// Function that calls itself, validates it can act, then calls itself again in 1/2 a second
// If validation succeeds, add to active, remove the oldest task, emulate a fake completion time with set timeout and random between 2 and 10 seconds, start task function
// In callback of function decrement active, add result to completed.
function processQueue(){
  if(active <= maxActive){
    active += 1;
    let t = queue.shift();
    console.log(`${t} started.`)
    setTimeout(
      () => task((result)=>{
        active -= 1;
        // You can print out completed to see ordering
        completed.push(result);
        console.log(`${result} complete.`)
      }, t)
      ,
      randomIntFromInterval(2000, 10000));

  }
  setTimeout(processQueue, 500);
}

// Whatever function
function task(callback, task){
  console.log(`Inside ${task}.`);
  callback(task);
}

function randomIntFromInterval(min, max) {
  return Math.floor(Math.random() * (max - min + 1) + min)
}
