// let data = $.get('https://randomuser.me/api/', function(result){
//     console.log(result.responseJSON.results)
//     return result
// })
// console.log(data)
// data.results[0].location.city
// data.results[0].location.country
// data.results[0].name.first
// data.results[0].name.last
// data.results[0].picture.large
$.ajax({
    url: 'https://randomuser.me/api/?results=7',
    dataType: 'json',
    success: function(data) {
      console.log(data
        );
    }
  });
// $.ajax({
//     url: 'https://api.kanye.rest',
//     dataType: 'json',
//     success: function(data) {
//       console.log(data.quote
//         );
//     }
//   });

// $.ajax({
//     url: "https://pokeapi.co/api/v2/berry/"  +"",
//     dataType: 'json',
//     success: function(data) {
//       console.log(data.results
//         );
//     }
//   });
