const renderFirst = function(){
    const source = $('#first-template').html();
    const template = Handlebars.compile(source);
    let newHTML = template({ text: "This gets rendered" });
    $('body').append(newHTML);  
  }
  
  const renderSecond = function(){
    const source = $('#second-template').html();
    const template = Handlebars.compile(source);
    let newHTML = template({ moreText: "This also gets rendered" });
    $('#special').append(newHTML);  
  }
  
  renderFirst()
  renderSecond()

  const animals = ["Rabbit", "Giraffe", "Kangaroo", "Whale", "Seagull", "Caterpie"]

const languages = ["French", "Spanish", "Togolese", "Javascript", "Uruk"]


const rennames = function(data ,id){
    const source = $('#names-template').html();
    const template = Handlebars.compile(source);
    let newele = template({data})
    $("#"+id).append(newele)
}
rennames(animals,"animal")
rennames(languages,"lang")