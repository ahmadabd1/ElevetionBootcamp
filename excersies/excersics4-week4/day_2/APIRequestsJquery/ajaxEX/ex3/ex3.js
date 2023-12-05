

const display = function (data) {
    // for (let d in data){
    //     console.log(d)
    for (let i in data.items) {
        console.log("name is : " + data.items[i].volumeInfo.title)

        if (data.items[i].volumeInfo.industryIdentifiers) {
            data.items[i].volumeInfo.industryIdentifiers.forEach((element) => console.log("isbn : " + element.identifier))
        }
        else {
            console.log("noo isbn")
        }
        if (data.items[i].volumeInfo.authors) {
            console.log(data.items[i].volumeInfo.authors.forEach((element) => console.log("the authors: " + element)))

        } else {
            console.log("no author")
        }
        console.log("")
    }
    // }
    // const title = data.items[0].volumeInfo.title
    // console.log(title)
    console.log(data)
    console.log(data.items)
    // const newbook = `<div>book name :${title} - <br>book author ${author} - <br> desc: ${desc} `
    // $("#book").append(newbook)

}


const fetch = function (queryType, queryValue) {
    $.ajax({
        method: "GET",
        url: 'https://www.googleapis.com/books/v1/volumes?q=items',
        success: display,
        error: function (xhr, text, error) {
            console.log(text);
        }
    });

}

// fetch("title", "The Wise Man's Fears")
// fetch("isbn", 9781945048470)
fetch()

