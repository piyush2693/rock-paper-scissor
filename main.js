function getRandom(){
    return Math.floor(Math.random() * 3);
}
const rock = document.querySelector(".item #rock");

rock.addEventListener('click',function(e){
    const you = document.querySelector(".you img");
    you.src = "assests/rock.png";
    const num = getRandom();
    if( num === 0 ){
        document.querySelector(".computer img").src="assests/rock.png";

        document.querySelector(".res").innerHTML = "DRAW";
    }
    if( num === 1 ){
        document.querySelector(".computer img").src="assests/paper.png";

        document.querySelector(".res").innerHTML = "YOU LOSS";
    }
    if( num === 2 ){
        document.querySelector(".computer img").src="assests/scissor.png";

        document.querySelector(".res").innerHTML = "YOU WON";
    }
    
})
const paper = document.querySelector(".item #paper");

paper.addEventListener('click',function(e){
    const you = document.querySelector(".you img");
    you.src = "assests/paper.png";
    const num = getRandom();
    if( num === 0 ){
        document.querySelector(".computer img").src="assests/rock.png";

        document.querySelector(".res").innerHTML = "YOU WON";
    }
    if( num === 1 ){
        document.querySelector(".computer img").src="assests/paper.png";

        document.querySelector(".res").innerHTML = "DRAW";
    }
    if( num === 2 ){
        document.querySelector(".computer img").src="assests/scissor.png";

        document.querySelector(".res").innerHTML = "YOU LOSS";
    }
     
})
const scissor = document.querySelector(".item #scissor");


scissor.addEventListener('click',function(e){
    const you = document.querySelector(".you img");
    you.src = "assests/scissor.png";
    const num = getRandom();
    if( num === 0 ){
        document.querySelector(".computer img").src="assests/rock.png";

        document.querySelector(".res").innerHTML = "YOU LOSS";
    }
    if( num === 1 ){
        document.querySelector(".computer img").src="assests/paper.png";

        document.querySelector(".res").innerHTML = "YOU WON";
    }
    if( num === 2 ){
        document.querySelector(".computer img").src="assests/scissor.png";

        document.querySelector(".res").innerHTML = "DRAW";
    }
    
})
const playAgain = document.querySelector("#play");

playAgain.addEventListener('click',function(){
    document.querySelector(".computer img").src="assests/computer.png";

    document.querySelector(".you img").src="assests/you.png";

    document.querySelector(".res").innerHTML = "Choose Your Move";
})
