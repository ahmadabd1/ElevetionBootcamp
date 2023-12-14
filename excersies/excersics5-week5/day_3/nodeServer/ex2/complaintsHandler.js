const Consts = require("./consts")

const handleComplaints = function(complaint){
    if(complaint.type === Consts.FINANCE){
        console.log("Money doesn't grow on trees, you know.")
    }else if(complaint.type === Consts.WEATHER){
        console.log("It is the way of nature. Not much to be done.")
    }else{
        console.log("It'll pass, as all things do, with time.")
    }
    

}
module.exports = {
    handleComplaints:handleComplaints,
    Consts:Consts
}