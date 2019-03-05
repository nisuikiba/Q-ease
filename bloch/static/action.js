var countValue = 1;
var result="";

function countUp(){
    if(countValue<4){
        countValue++;
        var counter =document.getElementById("counter");
        counter.value=countValue;
    }
}

function countDown(){
    if(countValue>1){
        countValue--;
        var counter =document.getElementById("counter");
        counter.value=countValue;
    }
}

function restart(){
    location.reload();
}

function getValue(idname){
    result = document.getElementById(idname).value;
    var dam = document.getElementById("dam");
    dam.innerHTML = result;
}

function skyblue(){
    var dam = document.getElementById("dam");
    dam.style.background="#29b0da";
    color="#29b0da";
}
function limegreen(){
    var dam = document.getElementById("dam");
    dam.style.background="#9ceb43";
    color="#9ceb43";
}
function red(){
    var dam = document.getElementById("dam");
    dam.style.background="#da2932";
    color="#da2932";
}
function pink(){
    var dam = document.getElementById("dam");
    dam.style.background="rgb(226, 21, 89)";
    color="rgb(226, 21, 89)";
}
function orange(){
    var dam = document.getElementById("dam");
    dam.style.background="rgb(248, 160, 27)";
    color="rgb(248, 160, 27)";
}
function blue(){
    var dam = document.getElementById("dam");
    dam.style.background="rgb(31, 102, 255)";
    color="rgb(31, 102, 255)";
}
function green(){
    var dam = document.getElementById("dam");
    dam.style.background="rgb(0, 156, 52)";
    color="rgb(0, 156, 52)";
}
function yellow(){
    var dam = document.getElementById("dam");
    dam.style.background="rgb(255, 229, 84)";
    color="rgb(255, 229, 84)";
}
function purple(){
    var dam = document.getElementById("dam");
    dam.style.background="rgb(181, 89, 209)";
    color="rgb(181, 89, 209)";
}
function brown(){
    var dam = document.getElementById("dam");
    dam.style.background="rgb(145, 101, 75)";
    color="rgb(145, 101, 75)";
}
