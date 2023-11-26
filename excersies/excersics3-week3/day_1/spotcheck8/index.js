$(".box").hover(function(){
    $(this).css("background-color", "blue");
});





// $("div").hover(function(){
//     $(this).css("background-color", "blue");
//     }, function(){
//     $(this).css("background-color", "pink");
//   });

const aDynamicDiv = "<div class='mine'>Oh yes</div>"
const elem = $(aDynamicDiv)
console.log(elem)
$("body").append(elem)
$('.fruits').append('<p class="red">Raspberry</p>')
$('.fruits').append('<p class="brown">Kiwi</p>')


const text = "Banana"
const item = $("<div class=fruit>" + text + "</div>")

console.log(item) //prints <div class=fruit>Banana</div> as a jQuery object - this is what we created!

const text1 = "Banana"
const item1 = $(`<div class=fruit>${text1}</div>`)
let feed = "feed me more"
console.log(item1) //the same
$(".feedme").on("click", function(){
    let divCopy = $("<div class=feedme>" + feed + "</div>")//use template literals and $(this)
    
    $("body").append(divCopy)
  })