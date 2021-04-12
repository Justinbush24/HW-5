

// add current date to top of pageS
var m = document.querySelector("#currentDate");
m.textContent = moment().format('dddd[,] MMMM Do YYYY,  h:mm:ss a');





// color code the past,present,and future times
 


//save function to save to local storage 
//also persists data from local storage
//9 AM
function saveFunction9() {
    var plan = document.getElementById('plan9');
    var getPlan = document.querySelector("#plan9");
    localStorage.setItem("plan9", getPlan.value);
    console.log("saved!");
    console.log(plan.value);
}
plan9.value = localStorage.getItem('plan9');
//10 AM
function saveFunction10() {
    var plan = document.getElementById('plan10');
    var getPlan = document.querySelector("#plan10");
    localStorage.setItem("plan10", getPlan.value);
    console.log("saved!");
    console.log(plan.value);
}
plan10.value = localStorage.getItem('plan10');
//11 AM
function saveFunction11() {
    var plan = document.getElementById('plan11');
    var getPlan = document.querySelector("#plan11");
    localStorage.setItem("plan11", getPlan.value);
    console.log("saved!");
    console.log(plan.value);
}
plan11.value = localStorage.getItem('plan11');
//12 PM
function saveFunction12() {
    var plan = document.getElementById('plan12');
    var getPlan = document.querySelector("#plan12");
    localStorage.setItem("plan12", getPlan.value);
    console.log("saved!");
    console.log(plan.value);
}
plan12.value = localStorage.getItem('plan12');
//1 PM
function saveFunction1() {
    var plan = document.getElementById('plan1');
    var getPlan = document.querySelector("#plan1");
    localStorage.setItem("plan1", getPlan.value);
    console.log("saved!");
    console.log(plan.value);
}
plan1.value = localStorage.getItem('plan1');
//2 PM
function saveFunction2() {
    var plan = document.getElementById('plan2');
    var getPlan = document.querySelector("#plan2");
    localStorage.setItem("plan2", getPlan.value);
    console.log("saved!");
    console.log(plan.value);
}
plan2.value = localStorage.getItem('plan2');
//3 PM
function saveFunction3() {
    var plan = document.getElementById('plan3');
    var getPlan = document.querySelector("#plan3");
    localStorage.setItem("plan3", getPlan.value);
    console.log("saved!");
    console.log(plan.value);
}
plan3.value = localStorage.getItem('plan3');
//4 PM
function saveFunction4() {
    var plan = document.getElementById('plan4');
    var getPlan = document.querySelector("#plan4");
    localStorage.setItem("plan4", getPlan.value);
    console.log("saved!");
    console.log(plan.value);
}
plan4.value = localStorage.getItem('plan4');
//5 PM
function saveFunction5() {
    var plan = document.getElementById('plan5');
    var getPlan = document.querySelector("#plan5");
    localStorage.setItem("plan5", getPlan.value);
    console.log("saved!");
    console.log(plan.value);
}
plan5.value = localStorage.getItem('plan5');






console.log("you are connected");