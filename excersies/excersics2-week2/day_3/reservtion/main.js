const reservations = {
    Bob: { claimed: false },
    Ted: { claimed: true }
  }


const checkReservation = function(){
    const valueInput = document.getElementById("name")
    if(valueInput.value===""){
        alert("Please Enter Name !")
        return
    }
    if(!reservations[valueInput.value]){
        alert("You have no reservation")
        return
    }
    if(reservations[valueInput.value].claimed){
        alert("Hmm, someone already claimed this reservation")
    }
    else{
        alert("Welcome, Bob")
    }
  }