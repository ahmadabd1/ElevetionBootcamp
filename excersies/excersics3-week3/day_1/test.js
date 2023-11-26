let posts = [{name: 'Shoobert'}, {name: 'Kayne'}]

for(let post of posts){
    $("#posts").append(`
        <div>${post.name}</div><input type="text" placeholder="say something nice" />
    `)
}

posts.splice(0, 1)