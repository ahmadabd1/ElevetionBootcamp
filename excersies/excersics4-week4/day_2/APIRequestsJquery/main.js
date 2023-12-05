// Initialize the HTTP request to a server located at "someURL"
// var xhr = new XMLHttpRequest();
// xhr.open('get', 'https://www.google.com');

// // Track the state changes of the request.
// xhr.onreadystatechange = function () {
//     var DONE = 4; // readyState 4 means the request is done.
//     var OK = 200; // status 200 is a successful return.
//     if (xhr.readyState === DONE) {
//         if (xhr.status === OK) {
//             console.log(xhr.responseText); // 'This is the returned text.'
//         } else {
//             console.log('Error: ' + xhr.status); // An error occurred during the request.

//         }
//     }
// };

const displaybook = function(result){
    const title = result.items[0].volumeInfo.title
    const author = result.items[0].volumeInfo.authors[0]
    const desc = result.items[0].volumeInfo.description
    const newbook = `<div>book name :${title} - <br>book author ${author} - <br> desc: ${desc} `
    $("#book").append(newbook)
}

//ajax http requests - GET requests
$.ajax({
    method: "GET",
    url: 'https://www.googleapis.com/books/v1/volumes?q=isbn:0439023521',
    success: displaybook,
    error: function (xhr, text, error) {
        console.log(text);
    }
}); 
// up and down the same ^
$.get("https://www.googleapis.com/books/v1/volumes?q=isbn:0439023521",  displaybook   )
// Send the request to send-ajax-data.php
// xhr.send(null);
// $.get("https://www.google.com", function(result){
//     console.log(result)
// })



// let data = $.get("/some_api")
//request the data with a GET request
$.get("https://jsonplaceholder.typicode.com/users", function(users){
  //extract the geo data of the first user

  let lat = users[0].address.geo.lat
  let long = users[0].address.geo.lng
  let lastusercompany = users[users.length - 1].company.catchPhrase
  
  //log the data
  console.log(`${lat}, ${long} , ${lastusercompany}`) //prints -37.3159, 81.1496
})
// asynchronously
// let person
// setTimeout(function(){
//     console.log("hello")
//     let person = "hi"
// },1000)
// console.log(person)