let imgGet = document.getElementById("imgDice")
let randomDigit = Math.floor(Math.random()*6)

let imgArray = ["img/one.png" , "img/two.png"  ,"img/three.png" ,
"img/four.png" , "img/five.png" ,"img/six.png" ]

imgGet.src=imgArray[randomDigit];
document.getElementById("score").innerHTML= randomDigit + 1 ; 

