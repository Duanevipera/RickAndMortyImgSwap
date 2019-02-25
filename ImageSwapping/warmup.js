var uhhh = document.getElementById("thingy");

uhhh.addEventListener("click",() =>{
    uhhh.style.color= "green";

    uhhh.innerHTML = "my World is read";

});

var felonies = ["assault", "GTA", "possession"];

//document.getElementById('but1').addEventListener("click", addItems);
//window.addEventListener("load", addItems)

function addItems(){
    taskList = document.getElementById('list');
    for (var i = 0; i < felonies.length; i++){
        taskList.innerHTML += "<li>" + felonies[i] + "</li>";
    }
}

var myTimer;


//create timer
document.getElementById('start').addEventListener("click", () => {
    myTimer = setInterval(genRanNum, 3000);
});

function genRanNum(){
    randomNumber = Math.ceil(Math.random()* 100);
    document.getElementById('numberStuff').innerHTML += randomNumber + "</br>"

    if(randomNumber <= 25){
        uhhh.style.color= "red";
        uhhh.innerHTML = "I'm Mr. Meeseeks, Look at me!"
       
    }
    else{
        uhhh.style.color= "purple";
        uhhh.innerHTML = "Existence is Pain Wubba Dubba Dubb Dubb";
    }
}

document.getElementById('stop').addEventListener("click", () => {
    clearInterval(myTimer);
    document.getElementById('numberStuff').innerHTML = "Stopped";
});

// *******************************************************************
// Image Swapping starts













// Image Swapping ends