let queue = [];
let completed = [];
let numberOfTasks = 100;
let active = 0;
let maxActive = 5;

for(let i = 0; i < numberOfTasks; i+=1){
  queue.push(`Task ${i}`);
}

processQueue();

function processQueue(){
  if(active <= maxActive){
    active += 1;
    let t = queue.shift();
    console.log(`${t} started.`)
    setTimeout(
      () => task((result)=>{
        active -= 1;
        console.log(`${result} complete.`)
      }, t)
      ,
      randomIntFromInterval(2000, 10000));

  }
  setTimeout(processQueue, 500);
}

function task(callback, task){
  console.log(`Inside ${task}.`);
  callback(task);
}

function randomIntFromInterval(min, max) {
  return Math.floor(Math.random() * (max - min + 1) + min)
}
