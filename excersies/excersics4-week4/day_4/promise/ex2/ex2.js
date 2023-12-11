
const output = $("#book")

const display = function (result) {
    console.log("success got data", result.data[0].embed_url)
   let newframe = "<iframe src = "+ result.data[0].embed_url + "></iframe>"
    $("#book").append(newframe)

}

const getWordRandom = function(data){
    const anyWrod = data[Math.floor(Math.random()*data.length)]
    console.log("the Random Word is : "+anyWrod)
    return anyWrod
}

const wordPromise = $.get('https://random-word-api.herokuapp.com/all')
const hereword= wordPromise.then(getWordRandom)

// getRandomWord(callback)
const callback = function(data){
    let i =  Math.floor(Math.random()*data.items.length)
    // console.log(data.items.length)
    console.log("the title of the random word is : "+data.items[i].volumeInfo.title)
}




const booksAPIPromise = $.get("http://api.giphy.com/v1/gifs/search?q="+hereword+"&api_key=27OrgcfJOTOCzBf0NdWpgMpMZ6mOz6ow")
const work = booksAPIPromise.then(callback)


