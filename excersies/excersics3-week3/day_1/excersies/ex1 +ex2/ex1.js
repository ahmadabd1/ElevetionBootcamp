const txt =  "<input type=text id = txt></input>"
const btn = "<button id = btn>add human</button>"

$("body").append(txt);
$("body").append(btn); 



const addLi = function(name){
    $("#list").append($("<li class=childs>"+ name +"</li>"));
}
$("button").on("click", function() {
    const newHuman = $("#txt").val()
    console.log(newHuman)
    addLi(newHuman);
  });

 

// $("button").on("click", function(){
//     $("#blogs").append("<div class='blog'>Cool blog</div>")
//   })
  
  $("#list").on("click", ".childs", function(){
    $(this).remove() 
  })
