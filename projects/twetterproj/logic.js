const postsMange = function(){
    const posts = [ {
        text: "First post!",
        id: "p1",
        comments: [
            { id: "c1", text: "First comment on first post!" },
            { id: "c2", text: "Second comment on first post!!" },
            { id: "c3", text: "Third comment on first post!!!" }
        ]
    },
    {
        text: "Aw man, I wanted to be first",
        id: "p2",
        comments: [
            { id: "c4", text: "Don't wory second poster, you'll be first one day." },
            { id: "c5", text: "Yeah, believe in yourself!" },
            { id: "c6", text: "Haha second place what a joke." }
        ]
    }]
    let postIdCounter = 3
    let commentIdCounter = 7
   
    const  getPosts   = function(text){
        return posts
    }
   
    const   addPost  = function(text){

        const newPost = {
            id :"p"+ postIdCounter,
            text :text ,
            comments :[]
        }
        posts.push(newPost)
        postIdCounter++
        
    }
   
    const  removePost   = function(postID){
        for (let i in posts){
            if(posts[i].id===postID){
                posts.splice(i,1)
            }

        }
        
        
    }

    const addComment =function(text,postID){
        const newCommment = {  id:"c"+commentIdCounter, text:text }
        
        for (let i in posts){
            if(posts[i].id===postID){
                posts[i].comments.push(newCommment)
                
            }
        }
        commentIdCounter++
        
    }
   
    const removeComment  =function(postId,commentid){
        for (let i in posts){
            if(posts[i].id === postId){
                for(let j in posts[i].comments){
                    if(posts[i].comments[j].id === commentid){
                        posts[i].comments.splice(j,1)
                    }
                }
            }
        }
    }

    return {
        getPosts,
        addPost,
        removePost,
        removeComment ,
        addComment
    }
}


// twetterManger.addPost("hello")
// twetterManger.addPost("adsa")
// console.log(twetterManger.getPosts())

// twetterManger.removePost('p1')
// twetterManger.addPost("heasdasllo")
// twetterManger.addComment("p0","iam the first comment")
// twetterManger.addComment("p0","iam the second comment")
// twetterManger.addComment("p1","iam the second comment")
// console.log(twetterManger.getPosts())

// twetterManger.removeComment("p0","c1")

// console.log(twetterManger.getPosts())


// const tweeter = Tweeter()

// tweeter.addPost("This is my own post!")
// console.log(tweeter.getPosts())
// console.log()
// console.log()
// console.log()
// //This should be added to the posts array:
// //{text: "This is my own post!", id: "p3", comments: []}

// tweeter.removePost("p1")
// console.log(tweeter.getPosts())
// //There should only be two posts in the post's array:
// //{text: "Aw man, I wanted to be first", id: "p2", comments: Array(3)}
// //{text: "This is my own post!", id: "p3", comments: []}

// //============================
// //============================
// //Stop here
// //Make sure everything works. Then keep going
// //============================
// //============================
// console.log()
// console.log()
// console.log()
// tweeter.addComment("Damn straight it is!", "p3")
// tweeter.addComment("Second the best!", "p2")
// console.log(tweeter.getPosts())
// //This should be added to the third post's comments array:
// //{id: "c7", text: "Damn straight it is!"}

// //This should be added to the second post's comments array:
// //{id: "c8", text: "Second the best!"}
// console.log()
// console.log()
// tweeter.removeComment("p2", "c6")
// console.log(tweeter.getPosts())
// //This comment should be removed:
// //{id: "c6", text: "Haha second place what a joke."}
