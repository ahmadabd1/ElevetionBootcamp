
const SongsManager = function(){
    const initSong ="https://www.youtube.com/watch?v="
    const songs = {}

    const addSong = function(namesong , tokesong){
        token= tokesong.replace(initSong,"")
        songs[namesong] = token
    }
    const getSong = function(namesong){
        console.log(initSong+songs[namesong])
    }
    const printSongs = function(){
        console.log(songs)
    }

    return{
        addSong,getSong,printSongs
    }


}


const songsManager = SongsManager()
songsManager.addSong("sax", "https://www.youtube.com/watch?v=3JZ4pnNtyxQ")
songsManager.addSong("how long", "https://www.youtube.com/watch?v=CwfoyVa980U")
songsManager.addSong("ain't me", "https://www.youtube.com/watch?v=D5drYkLiLI8")

songsManager.getSong("sax") // should print https://www.youtube.com/watch?v=3JZ4pnNtyxQ
songsManager.getSong("ain't me") // should print https://www.youtube.com/watch?v=3JZ4pnNtyxQ
songsManager.getSong("how long") // should print https://www.youtube.com/watch?v=3JZ4pnNtyxQ
songsManager.printSongs()



// const SongsManager = function () {
//     const _songs = {}
//     const _youtubeBase = "https://www.youtube.com/watch?v="

//     //assumes the given URL is in the form of https://www.youtube.com/watch?v=kJQP7kiw5Fk
//     const _extractIdentifier = url => url.split("").splice(32).join("")
//     const _getUrl = identifier => _youtubeBase + identifier

//     const addSong = (name, url) => _songs[name] = _extractIdentifier(url)
//     const getSong = name => console.log(_getUrl(_songs[name]))

//     return {
//         addSong: addSong,
//         getSong: getSong
//     }
// }