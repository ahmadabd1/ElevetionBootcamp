const compHandler = require("./complaintsHandler")
let handleComplaint = compHandler.handleComplaints
let complaint1 = {
    text: "I'm not getting enough money",
    type: compHandler.Consts.FINANCE//use the FINANCE type from the consts module
}

let complaint2 = {
    text: "My salary hasn't come in yet",
    type: compHandler.Consts.FINANCE//use the FINANCE type from the consts module
}

let complaint3 = {
    text: "I'm always full of energy",
    type:compHandler.Consts.EMOTIONS //use the EMOTIONS type from the consts module
}

handleComplaint(complaint1) //should print "Money doesn't grow on trees, you know."
handleComplaint(complaint2) //should print "Money doesn't grow on trees, you know."
handleComplaint(complaint3) //should print "It'll pass, as all things do, with time."