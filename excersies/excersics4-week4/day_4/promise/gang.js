
getRandomWord(
    function (word) {
        getSynonyms(word,
            function (synonyms) {
                getSentiment(synonyms[0],
                    function (sentiment) {
                        console.log(`The word ${word} has a synonym ${synonyms[0]} which has a 
            ${getSentimentDescription(sentiment)} sentiment`)
                    }, function (error) {
                        console.log(error);
                    }
                )
            }, function (error) {
                console.log(error);
            }
        )
    }, function (error) {
        console.log(error);
    }
) 