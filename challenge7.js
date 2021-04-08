var mySongBackground = new Audio("Audio/superStar.mp3")
var mySongGameOver = new Audio("Audio/GameOver.mp3")
var mySongEnd = new Audio("Audio/End.mp3")

function start(){
    document.querySelector(".ButtonContent1").classList.add("invisible")
    document.querySelector(".ButtonContent1").classList.remove("visible")
    document.querySelector(".Content1").classList.add("invisible")
    document.querySelector(".Content1").classList.remove("visible")
    document.querySelector(".Content2").classList.add("visible")
    document.querySelector(".ButtonContent2-1").classList.add("visible")
    document.querySelector(".ButtonContent2-2").classList.add("visible")
    mySongBackground.play()
} 
function BorrowH(){
    document.querySelector(".Content2").classList.remove("visible")
    document.querySelector(".ButtonContent2-1").classList.remove("visible")
    document.querySelector(".ButtonContent2-2").classList.remove("visible")
    document.querySelector(".Content2-1").classList.add("visible")
    document.querySelector(".ButtonContent3-1").classList.add("visible")
    mySongBackground.play()
}
function Next1(){
    document.querySelector(".Content2-1").classList.remove("visible")
    document.querySelector(".ButtonContent3-1").classList.remove("visible")
    document.querySelector(".Content3-1").classList.add("visible")
    document.querySelector(".ButtonContent4-1").classList.add("visible")
    document.querySelector(".ButtonContent4-2").classList.add("visible")
    document.querySelector(".ButtonContent4-3").classList.add("visible")
    mySongBackground.play()
}
function Truth(){
    document.querySelector(".Content3-1").classList.remove("visible")
    document.querySelector(".ButtonContent4-1").classList.remove("visible")
    document.querySelector(".ButtonContent4-2").classList.remove("visible")
    document.querySelector(".ButtonContent4-3").classList.remove("visible")
    document.querySelector(".Content4-1").classList.add("visible")
    document.querySelector(".ButtonContent5-1").classList.add("visible")
    mySongBackground.play()
}
function Buy(){
    document.querySelector(".Content3-1").classList.remove("visible")
    document.querySelector(".ButtonContent4-1").classList.remove("visible")
    document.querySelector(".ButtonContent4-2").classList.remove("visible")
    document.querySelector(".ButtonContent4-3").classList.remove("visible")
    document.querySelector(".Content4-2").classList.add("visible")
    document.querySelector(".ButtonContent5-2").classList.add("visible")
    mySongBackground.play()
}
function Run(){
    document.querySelector(".Content3-1").classList.remove("visible")
    document.querySelector(".ButtonContent4-1").classList.remove("visible")
    document.querySelector(".ButtonContent4-2").classList.remove("visible")
    document.querySelector(".ButtonContent4-3").classList.remove("visible")
    document.querySelector(".Content4-3").classList.add("visible")
    document.querySelector(".ButtonContent5-3").classList.add("visible")
    mySongBackground.play()
}
function Next2(){
    document.querySelector(".Content4-1").classList.remove("visible")
    document.querySelector(".ButtonContent5-1").classList.remove("visible")
    document.querySelector(".Content5-1").classList.add("visible")
    document.querySelector(".ButtonContent6-3").classList.add("visible")
    document.querySelector(".ButtonContent6-4").classList.add("visible")
    mySongBackground.play()
}
function Next3(){
    document.querySelector(".Content4-2").classList.remove("visible")
    document.querySelector(".ButtonContent5-2").classList.remove("visible")
    document.querySelector(".Content5-2").classList.add("visible")
    document.querySelector(".Content5-7").classList.add("visible")
    mySongBackground.pause()
    mySongEnd.play()
}
function Next4(){
    document.querySelector(".Content4-3").classList.remove("visible")
    document.querySelector(".ButtonContent5-3").classList.remove("visible")
    document.querySelector(".Content5-3").classList.add("visible")
    document.querySelector(".Content6-1").classList.add("visible")
    document.querySelector(".ButtonContent1-3").classList.add("visible")
    mySongBackground.pause()
    mySongGameOver.play()
}
function Help(){
    document.querySelector(".Content5-1").classList.remove("visible")
    document.querySelector(".ButtonContent6-3").classList.remove("visible")
    document.querySelector(".ButtonContent6-4").classList.remove("visible")
    document.querySelector(".Content6-3").classList.add("visible")
    document.querySelector(".Content6-5").classList.add("visible")
    mySongBackground.pause()
    mySongEnd.play()
}
function Give(){
    document.querySelector(".Content5-1").classList.remove("visible")
    document.querySelector(".ButtonContent6-3").classList.remove("visible")
    document.querySelector(".ButtonContent6-4").classList.remove("visible")
    document.querySelector(".Content6-4").classList.add("visible")
    document.querySelector(".Content6-6").classList.add("visible")
    mySongBackground.pause()
    mySongEnd.play()
}
function BorrowG(){
    document.querySelector(".Content2").classList.remove("visible")
    document.querySelector(".ButtonContent2-1").classList.remove("visible")
    document.querySelector(".ButtonContent2-2").classList.remove("visible")
    document.querySelector(".Content2-2").classList.add("visible")
    document.querySelector(".ButtonContent3-2").classList.add("visible")
    mySongBackground.play()
}
function Next5(){
    document.querySelector(".Content2-2").classList.remove("visible")
    document.querySelector(".ButtonContent3-2").classList.remove("visible")
    document.querySelector(".Content3-2").classList.add("visible")
    document.querySelector(".gif").classList.add("visible")
    document.querySelector(".ButtonContent4-4").classList.add("visible")
    document.querySelector(".ButtonContent4-5").classList.add("visible")
    mySongBackground.play()
}
function Ask(){
    document.querySelector(".gif").classList.remove("visible")
    document.querySelector(".Content3-2").classList.remove("visible")
    document.querySelector(".ButtonContent4-4").classList.remove("visible")
    document.querySelector(".ButtonContent4-5").classList.remove("visible")
    document.querySelector(".Content4-4").classList.add("visible")
    document.querySelector(".ButtonContent6-1").classList.add("visible")
    document.querySelector(".ButtonContent6-2").classList.add("visible")
    mySongBackground.play()
}
function Guilty(){
    document.querySelector(".gif").classList.remove("visible")
    document.querySelector(".Content3-2").classList.remove("visible")
    document.querySelector(".ButtonContent4-4").classList.remove("visible")
    document.querySelector(".ButtonContent4-5").classList.remove("visible")
    document.querySelector(".Content4-5").classList.add("visible")
    document.querySelector(".Content5-6").classList.add("visible")
    document.querySelector(".ButtonContent1-2").classList.add("visible")
    mySongBackground.pause()
    mySongGameOver.play()
}
function Find(){
    document.querySelector(".Content4-4").classList.remove("visible")
    document.querySelector(".ButtonContent6-1").classList.remove("visible")
    document.querySelector(".ButtonContent6-2").classList.remove("visible")
    document.querySelector(".Content5-4").classList.add("visible")
    document.querySelector(".Content5-6").classList.add("visible")
    document.querySelector(".ButtonContent1-4").classList.add("visible")
    mySongBackground.pause()
    mySongGameOver.play()
}
function Come(){
    document.querySelector(".Content4-4").classList.remove("visible")
    document.querySelector(".ButtonContent6-1").classList.remove("visible")
    document.querySelector(".ButtonContent6-2").classList.remove("visible")
    document.querySelector(".Content7-1").classList.add("visible")
    document.querySelector(".Content6-2").classList.add("visible")
    mySongBackground.pause()
    mySongEnd.play()
}
function Home(){
    start()
    document.querySelector(".Content4-5").classList.remove("visible")
    document.querySelector(".Content5-6").classList.remove("visible")
    document.querySelector(".ButtonContent1-2").classList.remove("visible")
    document.querySelector(".ButtonContent1").classList.add("invisible")
    mySongGameOver.pause()
    mySongBackground.play()
}
function Home1(){
    start()
    document.querySelector(".Content2-2").classList.remove("visible")
    document.querySelector(".ButtonContent3-2").classList.remove("visible")
    document.querySelector(".Content6-1").classList.remove("visible")
    document.querySelector(".ButtonContent1-3").classList.remove("visible")
    document.querySelector(".Content5-3").classList.remove("visible")
    mySongGameOver.pause()
    mySongBackground.play()
}
function Home2(){
    start()
    document.querySelector(".Content4-4").classList.remove("visible")
    document.querySelector(".ButtonContent6-1").classList.remove("visible")
    document.querySelector(".ButtonContent6-2").classList.remove("visible")
    document.querySelector(".Content5-4").classList.remove("visible")
    document.querySelector(".Content5-6").classList.remove("visible")
    document.querySelector(".ButtonContent1-4").classList.remove("visible")
    mySongGameOver.pause()
    mySongBackground.play()
}

