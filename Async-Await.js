//async makes a function return a Promise
//await makes a function wait for a Promise

console.log("Async/Await");

async function learn(){
    console.log('Inside learn function');
    const response = await fetch('https://api.github.com/users');
    console.log('before response');
    const users = await response.json();
    console.log('users resolved')
    return users;
}

console.log("Before calling learn")
let a = learn();
console.log("After calling learn")
console.log(a);
a.then(data => console.log(data))
console.log("Last line of this js file")
