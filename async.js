 async function getAsync(){
    console.log("in function")    
    sleepFor(2000)
    return "finish" ;

    
};
function sleep(ms) {
    return new Promise(resolve => setTimeout(resolve, ms));
}
function sleepFor(sleepDuration){
    var now = new Date().getTime();
    while(new Date().getTime() < now + sleepDuration){ /* Do nothing */ }
}
console.log("start");
var myString= getAsync();
console.log("outside2");
console.log(myString);
console.log(await myString);