const express = require('express')
const bodyParser = require('body-parser')
const app= express()

app.use(bodyParser.json())
app.use(bodyParser.urlencoded({ extended: true }))

app.use(express.json())
let wordCounter ={
    "ahmad":2,
    "and":3,
    "hello":4,
    "age":1,
    "lama":5
}

//EX 1
app.get('/sanity',function(request,response){
    // response.send(`Server is up and running/n ${wordCounter}`)
    response.send(wordCounter)
})

//EX 2 
app.get('/sanity/:word',function(request,response){
    const word = request.params.word
    if(word in wordCounter){
        response.send(`{count : ${wordCounter[word]}}`)
    }else{
        // wordCounter[word] = 0
        response.send(`{count : 0}`)
    }
})

 //EX 3
app.post('/sanity/word',function(request,response){
    const word = request.body
    // console.log(word.name)
    if(word.name in wordCounter){
        wordCounter[word.name]+=1
        response.send(`{count : ${wordCounter[word.name]}}`)
    }else{
        wordCounter[word.name] = 1
        response.send(`{text: "Added ${word.name}", currentCount: ${wordCounter[word.name]} }`)
    }
})
//Ex 4
function removeDuplicates(arr) {
    return arr.filter((item,
        index) => arr.indexOf(item) === index);
}
function getOccurrence(array, value) {
    var count = 0;
    array.forEach((v) => (v === value && count++));
    return count;
}
function countThewordsInArray(arrywords){
    let cleanArray = removeDuplicates(arrywords)
    let wordsAndCount = {}
    for(let i=0 ;i<cleanArray.length;i++){
        wordsAndCount[cleanArray[i]] = getOccurrence(arrywords,cleanArray[i])
    }
    return wordsAndCount
}

const checkOldAndNewWords =function(newSentenseWords){
    let numNewWords = 0;
    let numOldWords =0;
    for(let word in newSentenseWords){

        if(word in wordCounter){
            numOldWords++
            wordCounter[word]+=wordCounter[word]
        }else{
            numNewWords++
            wordCounter[word] = 1
            
        }
    }
    return {
        numOldWords,numNewWords
    }
}

//EX 4
app.post('/sanity/sentence',function(request,response){
    const sentence = request.body
    let arrywords = sentence.words.split(" ")
    let newCountWords = countThewordsInArray(arrywords) //apple ahmad ahmad ahmad ==> [apple:1, ahmad:3] 
    let oldNewCount = checkOldAndNewWords(newCountWords)

    response.send(`{text: "Added ${oldNewCount.numNewWords} words, ${oldNewCount.numOldWords} already existed", currentCount: -1}`)

})

//EX 5
app.delete('/sanity/:word', function (request, response) {
    let word = request.params.word
    if(word in wordCounter){
        delete wordCounter[word]
        response.status(200).send('The Word is  Deleted');
    }else{
        response.status(404).send('Not Found');
    }
})


const port = 3000
app.listen(port,function(request,response)
{
    console.log(`Running in port ${port}`)
})