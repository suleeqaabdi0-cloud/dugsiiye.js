function delayBlocking() {
   alert("Fetching user data..."); 
    return "you are late for the lesson!";
}

console.log("Start blocking delay...");
console.log(delayBlocking());
console.log("This message is blocked until the delay is complete.");
   

function delayNonBlocking(callback) {
    setTimeout(() => {
        callback(" i am late for the work!");
    }, 2000);
}

console.log("Start non-blocking delay...");
delayNonBlocking((message) => {
    console.log(message);
});
console.log("This message is not blocked and runs immediately.");
