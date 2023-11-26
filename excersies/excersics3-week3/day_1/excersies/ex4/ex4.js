



const addLi = function(name){
    $("#cart").append($("<div class=cart-item>"+name+"</div>"));
}
$("div").on("click", function() {
    if ($(this).data().instock){
        addLi($(this).text());
    }
  });