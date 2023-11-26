// const names = ["Alex", "Byron", "Cassandra", "Deandre", "Ellena"]
// const names = [
//     { first: "Alex", last: "Johnson" },
//     { first: "Byron", last: "Loveall" },
//     { first: "Cassandra", last: "Wuthers" },
//     { first: "Deandre", last: "Rahm" },
//     { first: "Ellena", last: "Freeman" }
//   ]
// for(let name of names){
//   $("body").append(`<div>${name.first}-${name.last}</div>`)
// }
const txt = `<div>iam here when yopu hovered me iam pooof</div>`

$("body").append(txt)

$("div").hover(function(){
    $(this).remove();
    });