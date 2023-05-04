// Understanding basics 

function myDisplayer(some) {
  document.getElementById("demo").innerHTML = some;
}

let myPromise = new Promise(function(myResolve, myReject) {
  let x = 0;

// The producing code (this may take some time)

  if (x == 0) {
    myResolve("OK");
  } else {
    myReject("Error");
  }
});

myPromise.then(
  function(value) {myDisplayer(value);},
  function(error) {myDisplayer(error);}
);


// ________________________________________________________________________________________________________________________________________________________

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
   return new Promise(function (resolve, reject) {
   setTimeout(function()
   {
      arr.push(name);
      const error = false;
      if (!error) 
      {
         resolve();
      }
      else 
      {
         reject();
      }
   },800);
   });
}

add("Giya").then(display).catch(function () {
    console.log("Some error occured");
})

