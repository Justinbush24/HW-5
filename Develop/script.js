

// add current date to top of pageS
var m = document.querySelector("#currentDate");
m.textContent = moment().format('dddd[,] MMMM Do YYYY,  h:mm:ss a');





// color code the past,present,and future times
 


//save function to save to local storage
//9 AM
function saveFunction9() {
    var plan = document.getElementById('9plan');
    var getPlan = document.querySelector(".plan");
    localStorage.setItem("9plan", getPlan.value);
    console.log("saved!");
    console.log(plan.value);
}
//10 AM
function saveFunction10() {
    var plan = document.getElementById('10plan');
    var getPlan = document.querySelector(".plan");
    localStorage.setItem("10plan", getPlan.value);
    console.log("saved!");
    console.log(plan.value);
}


console.log("you are connected");