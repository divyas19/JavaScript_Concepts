// **********Map************
var a = [1,2,3,4];
console.log(a);

function double(elem)
{
     return elem*2;
}
console.log(a.map(double));

// o/p [2,4,6,8]

// **********Filter************
var b = [1,2,3,4];
console.log(b);

function func(elem)
{
     return elem>3;
}
console.log(b.filter(func));

// o/p [4]

// **********Reduce************
var c = [1,2,3,4];
console.log(c);

function f(total,val)
{
     return total+val;
}
console.log(c.reduce(f));

// o/p 10
