

// const display = function(data){
    
//     const title = data.items[0].volumeInfo.title
//     console.log(title)

// }


// const fetch =function(queryType ,queryValue){
//     $.ajax({
//         method: "GET",
//         url: 'https://www.googleapis.com/books/v1/volumes?q='+queryType+':'+queryValue,
//         success: display,
//         error: function (xhr, text, error) {
//             console.log(text);
//         }
//     });
    
// }

// fetch("title", "The Wise Man's Fears")
// fetch("isbn", 9781945048470)

let data = $.get('https://www.googleapis.com/books/v1/volumes?q=isbn:0439023521', function(result){
    return result
})
console.log(data)
