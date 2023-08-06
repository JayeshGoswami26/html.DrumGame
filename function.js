document.querySelectorAll(".box-mini")[0].addEventListener("click", music1 );
document.querySelectorAll(".box-mini")[1].addEventListener("click", music2 );
document.querySelectorAll(".box-mini")[2].addEventListener("click", music3 );
document.querySelectorAll(".box-mini")[3].addEventListener("click", music4 );
document.querySelectorAll(".box-mini")[4].addEventListener("click", music5 );
document.querySelectorAll(".box-mini")[5].addEventListener("click", music6 );
document.querySelectorAll(".box-mini")[6].addEventListener("click", music7 );

document.addEventListener("keydown", function(event){

    var presskey = event.key;
    if (presskey === "a"){
        music1();
    }
    if (presskey === "s"){
        music2();
    }
    if (presskey === "d"){
        music3();
    }
    if (presskey === "f"){
        music4();
    }
    if (presskey === "g"){
        music5();
    }
    if (presskey === "h"){
        music6();
    }
    if (presskey === "j"){
        music7();
    }

});





function music1()
{
    var audio1 = new Audio('sounds/tom-1.mp3');
    audio1.play();
}
function music2()
{
    var audio1 = new Audio('sounds/tom-2.mp3');
    audio1.play();
}
function music3()
{
    var audio1 = new Audio('sounds/tom-3.mp3');
    audio1.play();
}
function music4()
{
    var audio1 = new Audio('sounds/tom-4.mp3');
    audio1.play();
}
function music5()
{
    var audio1 = new Audio('sounds/crash.mp3');
    audio1.play();
}
function music6()
{
    var audio1 = new Audio('sounds/snare.mp3');
    audio1.play();
}
function music7()
{
    var audio1 = new Audio('sounds/kick-bass.mp3');
    audio1.play();
}