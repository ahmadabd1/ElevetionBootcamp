const box1 = "<div class=box ></div>"
const box2 = "<div class=box ></div>"



$("body").append(box1);
$("body").append(box2);





$(".box").hover(function(){
    $(this).css("background-color", "blue");
    }, function(){
    $(this).css("background-color", "#8e44ad");
  });
