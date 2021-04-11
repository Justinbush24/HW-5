

// add current date to top of pageS
var m = document.querySelector("#currentDate");
m.textContent = moment().format('dddd[,] MMMM Do YYYY,  h:mm:ss a');





// color code the past,present,and future times
 


//save function to save to local storage
var plan = document.getElementById('plan')
const getPlan = document.querySelector(".plan")
function saveFunction() {
   localStorage.setItem("plan", getPlan.value)
    
    console.log("saved!")
    console.log(plan.value)
    



}


console.log("you are connected");