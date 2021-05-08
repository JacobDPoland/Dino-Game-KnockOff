var character = document.getElementById("character");
var block = document.getElementById("block");

function jump() {
    if (character.classList == "animate"){
        return;  // do nothing if animation is already running
    }

    character.classList.add("animate");
    setTimeout(function(){  // remove animation class after 500 ms
        character.classList.remove("animate");
    }, 500);  
}

// check for death every 10 ms
var checkDead = setInterval(function() {
    // get location of character of block
    var characterTop = parseInt(window.getComputedStyle(character).getPropertyValue("top"))
    var blockLeft = parseInt(window.getComputedStyle(block).getPropertyValue("left"))

    // check for collision
    if ((blockLeft < 20) && (blockLeft > 0) && (characterTop >= 130)){
        alert("You Lose");
        block.style.animation = "none";
        setTimeout(()=>{
            block.style.animation = "block 1s infinite";
        }, 500);
    }
}, 10);