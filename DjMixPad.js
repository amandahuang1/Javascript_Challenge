var mySongB1 = new Audio("Dj/Back1.mp3") 
var mySongB2 = new Audio("Dj/Back2.mp3")
var mySongB3 = new Audio("Dj/Back3.mp3") 
var mySongB4 = new Audio("Dj/Back4.mp3") 
var mySongB5 = new Audio("Dj/1.mp3")
var mySongB6 = new Audio("Dj/2.mp3")
var mySongBS1 = new Audio("Dj/Base1.mp3") 
var mySongBS2 = new Audio("Dj/Base2.mp3") 
var mySongBS3 = new Audio("Dj/Base3.mp3") 
var mySongBS4 = new Audio("Dj/Base4.mp3") 
var mySongBS5 = new Audio("Dj/3.mp3")
var mySongBS6 = new Audio("Dj/4.mp3")
var mySongD1 = new Audio("Dj/Drum1.mp3") 
var mySongD2 = new Audio("Dj/Drum2.mp3") 
var mySongD3 = new Audio("Dj/Drum3.mp3") 
var mySongD4 = new Audio("Dj/Drum4.mp3") 
var mySongD5 = new Audio("Dj/5.mp3")
var mySongD6 = new Audio("Dj/6.mp3")
var mySongT1 = new Audio("Dj/Tune1.mp3") 
var mySongT2 = new Audio("Dj/Tune2.mp3") 
var mySongT3 = new Audio("Dj/Tune3.mp3") 
var mySongT4 = new Audio("Dj/Tune4.mp3") 
var mySongT5 = new Audio("Dj/7.mp3")
var mySongT6 = new Audio("Dj/Perc1.mp3")

var Summertime = new Audio("Dj/Summertime.mp3")
var Ground = new Audio("Dj/Ground.mp3")


/*
function modeButton1(){
    var sound1 = false;
    if(sound1 === false){
        mySongB1.loop = true;
        mySongB1.load();
        mySongB1.play();
    }else{
        mySongB1.paused();
    }

}

function modeButton1(){

    if(mySongB1.paused === true ){
        mySongB1.loop = true;
        mySongB1.load();
        mySongB1.play(); 
    }else{
        console.log(mySongB1.paused);//true
    }
}

*/


function modeButton1(){
    mySongB1.loop = true;
    mySongB1.load();
    mySongB1.play();
    document.querySelector(".squareButton1").style.backgroundColor = 'rgb(227, 161, 255)';

}
function modeButton2(){
    mySongB2.loop = true;
    mySongB2.load();
    mySongB2.play();
    document.querySelector(".squareButton2").style.backgroundColor = 'rgb(227, 161, 255)';
}
function modeButton3(){
    mySongB3.loop = true;
    mySongB3.load();
    mySongB3.play();
    document.querySelector(".squareButton3").style.backgroundColor = 'rgb(227, 161, 255)';
}
function modeButton4(){
    mySongB4.loop = true;
    mySongB4.load();
    mySongB4.play();
    document.querySelector(".squareButton4").style.backgroundColor = 'rgb(227, 161, 255)';
}
function modeButton5(){
    mySongB5.loop = true;
    mySongB5.load();
    mySongB5.play();
    document.querySelector(".squareButton5").style.backgroundColor = 'rgb(227, 161, 255)';
}
function modeButton6(){
    mySongB6.loop = true;
    mySongB6.load();
    mySongB6.play();
    document.querySelector(".squareButton6").style.backgroundColor = 'rgb(227, 161, 255)';
}
function modeButton7(){
    mySongBS1.loop = true;
    mySongBS1.load();
    mySongBS1.play();
    document.querySelector(".squareButton7").style.backgroundColor = 'rgb(134, 134, 255)';
}
function modeButton8(){
    mySongBS2.loop = true;
    mySongBS2.load();
    mySongBS2.play();
    document.querySelector(".squareButton8").style.backgroundColor = 'rgb(134, 134, 255)';
}
function modeButton9(){
    mySongBS3.loop = true;
    mySongBS3.load();
    mySongBS3.play();
    document.querySelector(".squareButton9").style.backgroundColor = 'rgb(134, 134, 255)';
}
function modeButton10(){
    mySongBS4.loop = true;
    mySongBS4.load();
    mySongBS4.play();
    document.querySelector(".squareButton10").style.backgroundColor = 'rgb(134, 134, 255)';
}
function modeButton11(){
    mySongBS5.loop = true;
    mySongBS5.load();
    mySongBS5.play();
    document.querySelector(".squareButton11").style.backgroundColor = 'rgb(134, 134, 255)';
}
function modeButton12(){
    mySongBS6.loop = true;
    mySongBS6.load();
    mySongBS6.play();
    document.querySelector(".squareButton12").style.backgroundColor = 'rgb(134, 134, 255)';
}
function modeButton13(){
    mySongD1.loop = true;
    mySongD1.load();
    mySongD1.play();
    document.querySelector(".squareButton13").style.backgroundColor = 'rgb(255, 221, 136)';
}
function modeButton14(){
    mySongD2.loop = true;
    mySongD2.load();
    mySongD2.play();
    document.querySelector(".squareButton14").style.backgroundColor = 'rgb(255, 221, 136)';
}
function modeButton15(){
    mySongD3.loop = true;
    mySongD3.load();
    mySongD3.play();
    document.querySelector(".squareButton15").style.backgroundColor = 'rgb(255, 221, 136)';
}
function modeButton16(){
    mySongD4.loop = true;
    mySongD4.load();
    mySongD4.play();
    document.querySelector(".squareButton16").style.backgroundColor = 'rgb(255, 221, 136)';
}
function modeButton17(){
    mySongD5.loop = true;
    mySongD5.load();
    mySongD5.play();
    document.querySelector(".squareButton17").style.backgroundColor = 'rgb(255, 221, 136)';
}
function modeButton18(){
    mySongD6.loop = true;
    mySongD6.load();
    mySongD6.play();
    document.querySelector(".squareButton18").style.backgroundColor = 'rgb(255, 221, 136)';
}
function modeButton19(){
    mySongT1.loop = true;
    mySongT1.load();
    mySongT1.play();
    document.querySelector(".squareButton19").style.backgroundColor = 'rgb(166, 255, 191)';
}
function modeButton20(){
    mySongT2.loop = true;
    mySongT2.load();
    mySongT2.play();
    document.querySelector(".squareButton20").style.backgroundColor = 'rgb(166, 255, 191)';
}
function modeButton21(){
    mySongT3.loop = true;
    mySongT3.load();
    mySongT3.play();
    document.querySelector(".squareButton21").style.backgroundColor = 'rgb(166, 255, 191)';
}
function modeButton22(){
    mySongT4.loop = true;
    mySongT4.load();
    mySongT4.play();
    document.querySelector(".squareButton22").style.backgroundColor = 'rgb(166, 255, 191)';
}
function modeButton23(){
    mySongT5.loop = true;
    mySongT5.load();
    mySongT5.play();
    document.querySelector(".squareButton23").style.backgroundColor = 'rgb(166, 255, 191)';
}
function modeButton24(){
    mySongT6.loop = true;
    mySongT6.load();
    mySongT6.play();
    document.querySelector(".squareButton24").style.backgroundColor = 'rgb(166, 255, 191)';
}

const slider1 = document.querySelector(".slider1")
slider1.oninput = function() {
    console.log(slider1.value);
    if(slider1.value>50){
        document.querySelector(".slider1").volume = 1.5;
    }else{
        document.querySelector(".slider1").volume = 0.5;
    }
}

const slider2 = document.querySelector(".slider2")
slider2.oninput = function() {
    console.log(slider2.value)
    if(slider2.value>50){
        document.querySelector(".slider2").playbackRate = 1.5;
    }else{
        document.querySelector(".slider2").playbackRate = 0.5;
    }
}
const slider3 = document.querySelector(".slider3")
slider3.oninput = function() {
    console.log(slider3.value)
    if(slider3.value>50){
        document.querySelector(".slider3").volume = 1.5;
    }else{
        document.querySelector(".slider3").volume = 0.5;
    }
}
const slider4 = document.querySelector(".slider4")
slider4.oninput = function() {
    console.log(slider4.value)
    if(slider4.value>50){
        document.querySelector(".slider4").playbackRate = 1.5;
    }else{
        document.querySelector(".slider4").playbackRate = 0.5;
    }
}


function play1(){
    Summertime.play();
}
function paused1(){
    Summertime.pause();
}
function replay1(){
    Summertime.loop = true;
    Summertime.load();
    Summertime.play();
}

function play2(){
    Ground.play();
}
function paused2(){
    Ground.pause();
}
function replay2(){
    Ground.loop = true;
    Ground.load();
    Ground.play();
}
