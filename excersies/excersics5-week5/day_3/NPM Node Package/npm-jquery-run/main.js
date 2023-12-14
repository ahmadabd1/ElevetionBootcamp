

// $("#div").on("click",function(){
//     $("#div").css("color","#f39c12")
// })


// $.get("http://data.nba.net/10s/prod/v1/2016/players.json",data=>console.log(data))

const urllib = require('urllib')
console.log("herleradfagsdfg")
// urllib.request('http://data.nba.net/10s/prod/v1/2016/players.json').then((data)=>console.log(data.data.toString()))

// urllib.request('http://www.omdbapi.com/?apikey=[yourkey]&').then((data)=>console.log(data.data.toString()))
// urllib.request('http://www.omdbapi.com/?apikey=46ea539b&t=MOVIE_TITLE').then((data)=>console.log(data.data.toString().Released))
urllib.request('http://www.omdbapi.com/?apikey=46ea539b&t=The Lion King').then((data)=>console.log(data.date))//toString("Realeased")))

// 


// const { data, res } = await urllib.request('http://cnodejs.org/');
// // result: { data: Buffer, res: Response }
// console.log('status: %s, body size: %d, headers: %j', res.status, data.length, res.headers);