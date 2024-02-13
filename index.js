var key;
var audio;

for(let i=0;i<document.querySelectorAll(".drum").length;i++){
    document.querySelectorAll(".drum")[i].addEventListener("click", function(){
        key= this.innerHTML;
        playsound(key);
        animation(key);
    })
}

document.addEventListener("keydown", function(event) {
    key=event.key;
    playsound(key);
    animation(key);
})

function playsound(key){

    switch (key) {

        case "w":
            audio=new Audio("./sounds/crash.mp3");
            audio.play();
            break;

        case "a":
            audio=new Audio("./sounds/kick-bass.mp3");
            audio.play();
            break;

        case "s":
            audio=new Audio("./sounds/snare.mp3");
            audio.play();
            break;

        case "d":
            audio=new Audio("./sounds/tom-1.mp3");
            audio.play();
            break;

        case "j":
            audio=new Audio("./sounds/tom-2.mp3");
            audio.play();
            break;

        case "k":
            audio=new Audio("./sounds/tom-3.mp3");
            audio.play();
            break;

        case "l":
            audio=new Audio("./sounds/tom-4.mp3");
            audio.play();
            break;

    }
}

function animation(key) {
    let but=document.querySelector("."+key);
    but.classList.add("pressed");
    setTimeout(function () {
       but.classList.remove("pressed");
    }, 200);
}