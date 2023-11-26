// const addDiv = function() {
//     $("body").append("<div class=box></div>")
//   };
  
//   $("button").on("click", function() {
//     addDiv()
//   });
  
//   $(".box").on("click", function() {
//     alert("hi")
//   });

const addDiv = function() {
    $("body").append("<div class=box></div>");
  };
  
  $("button").on("click", function() {
    addDiv();
  });
  
  $("body").on("click", ".box", function() {
    alert("hi");
  });

  $("button").on("click", function(){
    $("#blogs").append("<div class='blog'>Cool blog</div>")
  })
  
  $("#blogs").on("click", ".blog", function(){
    $(this).text("uncool blog") 
  })