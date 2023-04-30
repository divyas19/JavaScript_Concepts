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

