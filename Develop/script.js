

// add current date to top of pageS
var m = document.querySelector("#currentDate");
m.textContent = moment().format('dddd[,] MMMM Do YYYY');





// color code the past,present,and future times
var now= new Date().getHours();
//9AM
if (now > 9) {
    $("#plan9").addClass("past");
	}	
    else if (now >= 9 && now < 10) {
        $("#plan9").addClass("present");
	}
    else if (now < 9) {
        $("#plan9").addClass("future");
}

//10AM
if (now > 10) {
    $("#plan10").addClass("past");
	}	
    else if (now >= 10 && now < 11) {
        $("#plan10").addClass("present");
	}
    else if (now < 10) {
        $("#plan10").addClass("future");
}
    
 //11AM
if (now > 11) {
    $("#plan11").addClass("past");
	}	
    else if (now >= 11 && now < 12) {
        $("#plan11").addClass("present");
	}
    else if (now < 11) {
        $("#plan11").addClass("future");
}

 //12PM
if (now > 12) {
    $("#plan12").addClass("past");
	}	
    else if (now >= 12 && now < 1) {
        $("#plan12").addClass("present");
	}
    else if (now < 12) {
        $("#plan12").addClass("future");
}
    
//1PM
if (now > 1) {
    $("#plan1").addClass("past");
	}	
    else if (now >= 1 && now < 2) {
        $("#plan1").addClass("present");
	}
    else if (now < 1) {
        $("#plan1").addClass("future");
}
    
//2PM
if (now > 1) {
    $("#plan2").addClass("past");
	}	
    else if (now >= 2 && now < 3) {
        $("#plan2").addClass("present");
	}
    else if (now < 2) {
        $("#plan2").addClass("future");
}
    
//3PM
if (now > 3) {
    $("#plan3").addClass("past");
	}	
    else if (now >= 3 && now < 4) {
        $("#plan3").addClass("present");
	}
    else if (now < 3) {
        $("#plan3").addClass("future");
}
    
//4PM
if (now > 4) {
    $("#plan4").addClass("past");
	}	
    else if (now >= 4 && now < 5) {
        $("#plan4").addClass("present");
	}
    else if (now < 4) {
        $("#plan4").addClass("future");
}
    
//5PM
if (now > 5) {
    $("#plan5").addClass("past");
	}	
    else if (now >= 5 && now < 6) {
        $("#plan5").addClass("present");
	}
    else if (now < 5) {
        $("#plan5").addClass("future");
	}


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