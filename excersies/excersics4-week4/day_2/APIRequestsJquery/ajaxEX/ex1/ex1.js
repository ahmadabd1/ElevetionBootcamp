



const display = function(data){
    
    const title = data.items[0].volumeInfo.title
    console.log(title)

}


const fetch =function(isbn){
    $.ajax({
        method: "GET",
        url: 'https://www.googleapis.com/books/v1/volumes?q=isbn:'+isbn,
        success: display,
        error: function (xhr, text, error) {
            console.log(text);
        }
    });
    
}

fetch("9782806269171" )
fetch("1440633908 " )
fetch(9781945048470  )

