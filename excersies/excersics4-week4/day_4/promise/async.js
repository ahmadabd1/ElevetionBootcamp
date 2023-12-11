console.log("before setTimeout")
setTimeout(function () {
    console.log("in the callback")
}, 1000)
console.log("after setTimeout")





// const getRandomWord = function () {
//     let words = ['Bonanza', 'Elusive', 'Hindrance', 'Astute', 'Polaroid', 'Phonic', 'Yonder']
//     return words[Math.floor(Math.random() * words.length)]
// }

// const getRandomWord = function () {
//     let words = ['Bonanza', 'Elusive', 'Hindrance', 'Astute', 'Polaroid', 'Phonic', 'Yonder']

//     // using setTimeout to simulate an async operation that takes time
//     setTimeout(() => {
//         return words[Math.floor(Math.random() * words.length)]
//     }, 1000);
// }

// console.log(getRandomWord());





const getRandomWord = function (callback) {
    let words = ['Bonanza', 'Elusive', 'Hindrance', 'Astute', 'Polaroid', 'Phonic', 'Yonder']

    setTimeout(() => {
        callback(words[Math.floor(Math.random() * words.length)])
    }, 1000);
}


getRandomWord((randomWord)=> {
    console.log(randomWord);
})

getRandomWord(function (word) {
    getSynonyms(word, function (synonyms) {
        getSentiment(synonyms[0], function (sentiment) {
            console.log(
                `The word ${word} has a synonym ${synonyms[0]}                which has a ${getSentimentDescription(sentiment)} sentiment`)
        })
    })
})

