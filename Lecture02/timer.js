const startTime = Date.now();
function someHeavyTask(){
    let result = 0;
}
const endTime = Date.now();

const duration = endTime - startTime;
console.log(`Task duration: ${duration} milliseconds`);
someHeavyTask();
