Give some reflection on Asynchronous Programming.

console.log("Start");
for(let i =0; i < 45;i++ )
{
    console.log(i);
}
console.log("Done");




// O/P
// Start
// 0 to 44(Stoppped)
// Done

______________________________________________________________________

console.log("Start");

setTimeout(()=> {for(let i =0; i < 45;i++ )
{
    console.log(i);
}},100);

console.log("Done");

// O/P
// Start
// Done
// 0 to 44(The task didn't stop because of it.)
