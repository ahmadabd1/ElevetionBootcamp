
// $(this).closest(".post") - the closest method says “go up the DOM tree until you reach some element”

// $(this).closest(".post").data().id - extracts the data-id from the desired post

// $(".post").data( ).id
// $(".remove").on("click", function(){
//     alert($(this).closest(".post").data().id)
//   })


  $('button').on('click', function() {
    let relevantInputValue = $(this).closest("div").find("span").text()
    alert(relevantInputValue)
  })