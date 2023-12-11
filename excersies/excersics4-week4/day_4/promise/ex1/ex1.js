
const getWordRandom = function(data){
    const anyWrod = data[Math.floor(Math.random()*data.length)]
    console.log("the Random Word is : "+anyWrod)
    return anyWrod
}

const wordPromise = $.get('https://random-word-api.herokuapp.com/all')
const hereword= wordPromise.then(getWordRandom)

const callback = function(data){
    let i =  Math.floor(Math.random()*data.items.length)
  
    console.log("the title of the random word is : "+data.items[i].volumeInfo.title)
}

const booksAPIPromise = $.get("https://www.googleapis.com/books/v1/volumes?q=intitle:"+hereword)
const work = booksAPIPromise.then(callback)


