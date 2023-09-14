// the promise pattern

console.log("start")
fetch("https://api.randomuser.me/?nat=US&results=1")
.then(res=>res.json())
.then(json=>json.results)
.then(console.log)
.catch(console.error)
console.log("hello world")

//the async/await pattern

