document.querySelector(".btn").addEventListener("click",function(){
    var randomVariable =  Math.floor(Math.random()*6) + 1;
var randomVariable1 =  Math.floor(Math.random()*6) + 1;
var randomimg = "dice" + randomVariable + ".png";
var randomimg1 = "dice" + randomVariable1 + ".png";
var image1 = document.querySelectorAll("img")[0];
image1.setAttribute("src",randomimg);
var image2 = document.querySelectorAll("img")[1];
image2.setAttribute("src",randomimg1);
if(randomVariable>randomVariable1){
    document.querySelector("h1").innerHTML="&#10024 Player 1 Wins!";
}
else if(randomVariable<randomVariable1){
    document.querySelector("h1").innerHTML="Player 2 Wins! &#10024";
}
else{
    document.querySelector("h1").innerHTML="Draw!";
}
function myFunction(){
    location.reload();
}
})