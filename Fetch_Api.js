/*
Pass the path of the resource that we want to retrieve as a parameter to fetch(). We cannot block the user interface by waiting until the request finishes. 
That is why to fetch() returns a Promise, an object which represents a future result. We are using the then method to wait for the server's response. 
The catch() method is optional. Its purpose is to intercepts errors if the request fails to complete due to network failure or any other reason.
*/

fetch('/js/users.json')
   .then(response => {
     // handle response data
   })
   .catch(err => {
     // handle errors
   });

fetch('URL here')
.then(res => res.json())
.then(json => console.log(json));

// ____________________________________________________________________________________________________________________________________________________________

/*
GET requests are widely used methods in APIs and websites. The purpose of this method is to retrieve data from the server at the specified resource. 
The Fetch API uses the GET method for asynchronous requests. Here is an example of get request:
*/

fetch('https://api.github.com/orgs/nodejs')
.then(response => response.json())
.then(data => {
  console.log(data) // Prints result from `response.json()` in getRequest
})
.catch(error => console.error(error))

//_______________________________________________________________________________________________________________________________________________________________

/*
The purpose of the post request is to send the data to the server and creates a new resource. The resource post request creates subordinate to 
some other parent resource. When a new resource is posted to the parent, the API service will automatically associate the new resource by assigning it an ID. 
All we need to do is set the method and body parameters in the fetch() options:
*/

let data = {
   first_name: 'John',
   last_name: 'Adams',
   job_title: 'Software Engineer'
};
const options = {
   method: 'POST',
   body: JSON.stringify(data),
   headers: {
     'Content-Type': 'application/json'
}
}
fetch('https://reqres.in/api/users', options)
   .then(res => res.json())
   .then(res => console.log(res));

___________________________________________________________________________________________________________________________________________________________________
