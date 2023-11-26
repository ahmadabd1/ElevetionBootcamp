const returnTime = function (time) {
    console.log('The current time is: ' + time)
  }
  
const time = new Date()
const getTime = function(callback){ 
    callback(time)
}
  getTime(returnTime)