const MIN_LEN_NAME = 3
const MIN_SALARY = 10000
const MAX_SALARY = 16000
const PHONE_DIGITS = 10

const btn = document.getElementById("btn")

const valueName = document.getElementById("name")
const valueSalray = document.getElementById("salary")
const valueBirthday = document.getElementById("birthday")
const valuePhone = document.getElementById("phone")
const msg = document.getElementById("msg")
const form = document.getElementById("form")
const welmsg = document.getElementById("welcomemsg")
const validate = function(){
    if(checkLengthName(valueName.value)&&checkSalray(valueSalray.value)&&checkBirthday(valueBirthday.value)&&checkPhone(valuePhone.value)){
        form.style.display = "none";
        welmsg.innerHTML = "welcome " + valueName.value
        
    }
    checkSalray(valueSalray.value)
    checkBirthday(valueBirthday.value)
    checkPhone(valuePhone.value)
}


const checkBirthday = function(date){
    if(date === ""){
        msg.innerHTML = "Birthday is Missing!"
        return false
    }else{
        msg.innerHTML = ""
        return true
    }
}

const checkPhone = function(phone){
    if(phone.length == PHONE_DIGITS){
        msg.innerHTML = ""
        return true
    }else{
        msg.innerHTML = "Phone number 10 digits !"
        return false
    }

}

const checkSalray = function(salary){
    if(salary < MIN_SALARY || salary > MAX_SALARY){
        msg.innerHTML = "Salary must be 10k-16k!"
        return false
    }else{
        msg.innerHTML = ""
        return true
    }
}

const checkLengthName = function(name){
    if(name.length < MIN_LEN_NAME){
        msg.innerHTML = "Name is Missing!"
        return false
    }else{
    msg.innerHTML = ""
    return true
    }
}