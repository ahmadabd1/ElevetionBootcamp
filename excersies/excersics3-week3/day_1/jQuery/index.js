
//old one
// document.getElementById("container")
 // new one
//  $("#container")


 //vanilla JS
// document.getElementById("container").style.display = "none" 

//jQuery
// $("#container").hide() //when we select elements with jQuery, we also get methods that can work on the element, on top of the element itself

//if we can elemnt with id
// const elem = $("#id")

//if we have .class
// const elems = $(".class-name")


//spot check 1


// const header = $("#head")
// console.log(header)


// const myQuery = function (selector) {
//     if (selector[0] == "#") {
//         const elementId = selector.split("#")[1] //will return everything after the # in selector 
//         return document.getElementById(elementId)
//         }
//     }
// console.log(myQuery("#head"))
// console.log(myQuery("#head1"))
// console.log(myQuery("#head2"))
// console.log($)


// const sayHi = function(){
//     console.log("Hi!")
//   }
  
//   const $ = sayHi
  
 // $() //prints "Hi!"


//   $("h4")

//   $("h4").css("color", "red")


//Spot check 2

// $("h1").css("color", "blue")
// $(".red-div").css("color","red");
// $("#l1").css("color","green");
// $("#l2").css("color","pink");
// $("#brown-div").css("color","brown");

//spot check 3

// $("#b1").addClass("box")
// $("#b2").addClass("box")
// console.log($('#my-input').val())
// // $("#my-input").val("Terabyte")
// const barcod = $("#blue").data().barcode
// const date = $("#blue").data().expirationdate
// console.log(barcod) //prints #2980b9
// console.log(date) //prints #2980b9

// $('button').on('click', function () {
//     alert('clicked!')
//   })


//   $('button').click(function () {
//     alert('clicked!')
//   })

// const clicked = function () {
//     alert('clicked!')
//   }
  
//   $('button').on('click', clicked)

//make alert what we input in text after we click the button

// $("button").on("click", function () {
//     alert($("#my-input").val())
// })


const clicked = function () {
    alert($("#my-input").val())
  }
const valtext = $("#my-input").val()
  $('button').click(clicked)

console.log($("#my-input").val())


$("div").hover(function(){
    $(this).css("background-color", "blue");
    }, function(){
    $(this).css("background-color", "pink");
  });
  $("#b1").hover(function () {
    console.log($(this))
})

$("p").remove()
$("p").remove(".brown")