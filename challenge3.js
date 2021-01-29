var scoreH = 0;
var scoreG = 0;
var period = 1;
function Add(){  
    if (scoreH >= 0) {
        scoreH ++;
    }
    document.querySelector("#d1").innerHTML = scoreH
}
function AddG(){
    if (scoreG >= 0) {
        scoreG ++;
    }
    document.querySelector("#d2").innerHTML = scoreG
}
function Sub(){
    if (scoreH > 0) {
        scoreH --;
    } 
    document.querySelector("#d1").innerHTML = scoreH
}
function SubG(){
    if (scoreG > 0) {
        scoreG --;
    }
    document.querySelector("#d2").innerHTML = scoreG
}
function PeriodAdd(){
    if (period >= 1 && period < 3) {
        period ++;
    }
    document.querySelector("#d4").innerHTML = period
}
function PeriodSub(){
    if (period > 1 && period < 4) {
        period --;
    }
    document.querySelector("#d4").innerHTML = period
}
function clearH(){
    document.querySelector("#PenaltyList1").innerHTML = "";
}
function clearG(){
    document.querySelector("#PenaltyList").innerHTML = "";
}
function Reset(){
    Period=1;
    document.getElementById("d4").innerHTML = Period;
}
function ResetSH(){
    scoreH=0;
    document.getElementById("d1").innerHTML = scoreH;
}
function ResetSG(){
    scoreG=0;
    document.getElementById("d2").innerHTML = scoreG;
}
function AddAnsH(){
    var AddH = document.getElementById("PenaltyList1")
    var InputIdH = document.getElementById("d5").value
    AddH.innerHTML+=InputIdH+"<br>"
}
function AddAnsG(){
    var AddG = document.getElementById("PenaltyList")
    var InputIdG = document.getElementById("d6").value
    AddG.innerHTML+=InputIdG+"<br>"
}