// Without callback function

var arr = ["Diya","Tiya"]

function display()
{
    arr.forEach(function(studentName){
    console.log(studentName);
    }
    );
}

function add(name)
{
setTimeout(function()
{
    arr.push(name);
},800);
}

add("Giya")

 display()
// setTimeout(function(){display()},900);


_______________________________________________________________________________________
//With callback function

var arr = ["Diya","Tiya"]

function display()
{
    arr.forEach(function(studentName){
    console.log(studentName);
    }
    );
}

function add(name,callbackFunc)
{
setTimeout(function()
{
    arr.push(name);
    display();
},800);
}

add("Giya",display)

//  display()
// setTimeout(function(){display()},900);
