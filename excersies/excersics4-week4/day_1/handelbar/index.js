const people = [
    { name: "ahmad", animal: "rabbit", type: "land" ,shouldShow : false},
    { name: "john", animal: "horse", type: "land" ,shouldShow : false},
    { name: "mhmod", animal: "eagle", type: "air" ,shouldShow : true},
    { name: "ali", animal: "salmon", type: "sea" ,shouldShow : true},
]

const source = $("#template").html()
const template = Handlebars.compile(source)

const newRender = function (data) {

    
    for (let person of data) {
        // let someHTML = template({ name: person.name ,animal:person.animal,type:person.type})
        //or
        let someHTML = template(person) // must recive an object
        $("#people").append(someHTML)
    }
    // console.log(template)
}
//more powerful
const newRenderpower = function (data) {

        let someHTML = template({people : data}) // must recive an object
        $("#people").append(someHTML)
    
    // console.log(template)
}


const oldRender = function (data) {
    for (let person of data) {
        $("#people").append(`
            <p class = ${person.type}> ${person.name} - ${person.animal} </p>
        
        `)
    }
}
//oldRender(people)
// newRender(people)
newRenderpower(people)





const menuData = {
    menu: [
      { name: "Google", link: "http://google.com" },
      { name: "Facebook", link: "http://facebook.com" },
      { name: "Instagram", link: "http://nstagram.com" },
      { name: "Twitter", link: "http://twitter.com" },
    ]
  };
  
  const source1 = $('#menu-template').html();
  const template1 = Handlebars.compile(source1);
  const newHTML = template1(menuData);
  
  // append our new html to the page
  $('.menu').append(newHTML);