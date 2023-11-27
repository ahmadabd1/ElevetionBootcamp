
const renderPosts =function(posts){

    $("#posts").empty()
    $("#posts").addClass("posts")
    for (let p in posts){
       const newElemntPost = "<div  class= post id="+posts[p].id+">"+ posts[p].text +"</div>"
       $("#"+posts[p].id).css("font-weight","bold")
       $("#posts").append(newElemntPost)

       for (let pc in posts[p].comments){
            const deletX ="<span class= delete-comment >x</span>"
            const newElemntComment = "<div class= ></div><div class = comments id=" + posts[p].comments[pc].id + ">"+deletX +" "+ posts[p].comments[pc].text +"</div>"
            $("#"+posts[p].id).append(newElemntComment)
            
       }
       const newtext = "<input classs = text id = nComment type=text placeholder= comment? >"
    //    newtext.addClass("text")
       const newbtn = "<button >comment</button>"
       $("#"+posts[p].id).append("<div></div>")
       $("#"+posts[p].id).append(newtext)
       $("#"+posts[p].id).append(newbtn)
       const delBtn = "<br><br><button class = delete> delete comment</button>"
       $("#"+posts[p].id).append(delBtn)

    }


}


// //const playrend = 

// // renderPosts(posts)
// const post=function(){
//     const np = $("#input").val()
//     tweeter.addPost(np)
// }
// const a = tweeter.getPosts()
// console.log(a)