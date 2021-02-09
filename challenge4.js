let solution=0;
let inputFirst=0;
let inputSecond=0;
let intFirst=0;
let intSecond=0;

function Add(){
    document.querySelector("#solution").innerHTML = " ";
    inputFirst=document.getElementById("firstNumber").value
    inputSecond=document.getElementById("secondNumber").value
    intFirst= parseInt(inputFirst);
    intSecond= parseInt(inputSecond);
    solution= intFirst + intSecond;   
    var div= document.querySelector("#solution");
    div.innerHTML=solution;
}
function Sub(){
    document.querySelector("#solution").innerHTML = " ";
    inputFirst=document.getElementById("firstNumber").value
    inputSecond=document.getElementById("secondNumber").value
    intFirst= parseInt(inputFirst);
    intSecond= parseInt(inputSecond);
    solution= intFirst - intSecond;   
    var div= document.querySelector("#solution");
    div.innerHTML=solution;
}

function Times(){
    document.querySelector("#solution").innerHTML = " ";
    inputFirst=document.getElementById("firstNumber").value
    inputSecond=document.getElementById("secondNumber").value
    intFirst= parseInt(inputFirst);
    intSecond= parseInt(inputSecond);
    solution= intFirst * intSecond;   
    var div= document.querySelector("#solution");
    div.innerHTML=solution;
}

function Divid(){
    document.querySelector("#solution").innerHTML = " ";
    inputFirst=document.getElementById("firstNumber").value
    inputSecond=document.getElementById("secondNumber").value
    intFirst= parseInt(inputFirst);
    intSecond= parseInt(inputSecond);
    solution= intFirst / intSecond;
    var div= document.querySelector("#solution");
    div.innerHTML="Q:"+parseInt(solution)+ "R:"+intFirst%intSecond ; 

}
