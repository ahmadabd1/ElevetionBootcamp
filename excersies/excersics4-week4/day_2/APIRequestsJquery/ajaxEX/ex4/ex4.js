
//javascript, jQuery &limit=5
// let newframe;
// var xhr = $.get("http://api.giphy.com/v1/gifs/search?q=cats&api_key=27OrgcfJOTOCzBf0NdWpgMpMZ6mOz6ow");
// xhr.done(function(data) { console.log("success got data", data.data[0].embed_url)
 
// ; });



const output = $("#book")

const display = function (result) {
    console.log("success got data", result.data[0].embed_url)
   let newframe = "<iframe src = "+ result.data[0].embed_url + "></iframe>"
    $("#book").append(newframe)

}
const fetch = function (nameanimal) {
    $.ajax({
        method: "GET",
        url: "http://api.giphy.com/v1/gifs/search?q="+nameanimal+"&api_key=27OrgcfJOTOCzBf0NdWpgMpMZ6mOz6ow",
        success: display,
        error: function (xhr, text, error) {
            console.log(text);
        }
    });
}

fetch("cats")
let inputVal = $("#name")
const render=function(){
    output.empty()
    fetch(inputVal.val())
}


$("#btnsearch").on("click",render)
//javascript, jQuery

// var xhr = $.post("http://upload.giphy.com/v1/gifs", {api_key: "27OrgcfJOTOCzBf0NdWpgMpMZ6mOz6ow", username: "JoeCool3000", source_image_url: "http://www.mysite.com/myfile.mp4"});
// xhr.done(function(data) { console.log("success got data", data); });