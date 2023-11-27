const tweeter = postsMange()
const res = tweeter.getPosts()

render = renderPosts(res)


// renderPosts(posts)
const post=function(){
    const np = $("#input").val()
    tweeter.addPost(np)
    const ahmad = tweeter.getPosts()
    renderPosts(ahmad)
}
// const addComment = function(){
//     const nc = $("#nComment").val()
//     tweeter.addComment(np)
//     const ahmad = tweeter.getPosts()
//     renderPosts(ahmad)

// }
$("button").on("click",function(){
    const nc = $("#nComment").val()
    tweeter.addComment(nc,"p1")
    const ahmad = tweeter.getPosts()
    renderPosts(ahmad)
})
const a = tweeter.getPosts()
console.log(a)