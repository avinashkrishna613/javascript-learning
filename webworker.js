// there is main thread executing code
console.log("hello world");
// here we want to execute a callback after we got some response
var worker = new Worker("./workerscript.js"); // we offloaded the task to separate process
// we need to ask worker to execute the script and once if response if available we do some callback
worker.postMessage("execute-script");
worker.onmessage = (event) => {
    console.log(event);
}
console.log("hello world bye");