//Game constant and variables
let inputDir = {x:0, y:0};
const foodSound = new Audio('eat.mp3.mp3');
const gameOverSound = new Audio('game-over.mp3.mp3');
const moveSound = new Audio('move.mp3.mp3');
const musicSound = new Audio('background-music.mp3.mp3');
let speed = 5;
let score = 0;
let lastPaintTime = 0;
let snakeArr = [
    {x: 13, y: 15}
]
food =  {x: 6, y: 7};

//Game Functions
function main(ctime){
    window.requestAnimationFrame(main);
    // console.log(ctime)
    if((ctime - lastPaintTime)/1000 < 1/speed){
        return;
       }
       lastPaintTime = ctime;
   gameEngine();

    }

    function isCollide(snake){
        //if you bump into yourself
        for (let i = 1; i < snakeArr.length; i++){
            if(snake[i].x === snake[0].x && snake[i].y === snake[0].y){
                return true;
            }
        }
        //if you bump into the wall
            if(snake[0].x >= 18 || snake[0].x <=0 && snake[0].y >=18 || snake[0].y <=0){        
        return true;
            }
    }

    function gameEngine(){}
        // Part 1: Updating the snake array & Food
        if(isCollide(snakeArr)){
            gameOverSound.play();
            musicSound.pause();
            inputDir = {x: 0, y: 0};
            alert("Game Over. Press any key to play again!");
            snakeArr =  [{x: 13, y: 15}]
            musicSound.play();
            score = 0;
        }

       // If you have eaten the food, increment the score and regenerate the food
       if(snakeArr[0].y === food.y && snakeArr[0].x ===food.x){
        foodSound.play();
        snakeArr.unshift({x: snakeArr[0].x + inputDir.x, y: snakeArr[0].y + inputDir.y});
        let a = 2;
        let b = 16;
        food = {x: Math.round(a + (b-a)* Math.random()), y: Math.round(a + (b - a)*Math.random())}
    } 

    //Moving the snake
    for (let i = snakeArr.length - 2; i >= 0; i--) {
        snakeArr[i + 1] = { ...snakeArr[i] };
        console.log(`Updated snakeArr[${i + 1}] to ${JSON.stringify(snakeArr[i + 1])}`);
      }
      
      snakeArr[0].x += inputDir.x;
      snakeArr[0].y += inputDir.y;
      console.log(`Updated snakeArr[0] to x=${snakeArr[0].x}, y=${snakeArr[0].y}`);
      
      console.log(`Input direction: x=${inputDir.x}, y=${inputDir.y}`);
      



         //Display the Snake
         board.innerHTML = " ";
   snakeArr.forEach((e, index)=>{
      snakeElement = document.createElement('div');
      snakeElement.style.gridRowStart = e.y;
      snakeElement.style.gridColumnStart = e.x;
     
      if(index === 0){
          snakeElement.classList.add('head');
      }else{
      snakeElement.classList.add('snake');
      }
      board.appendChild(snakeElement);
    })

         //Display the food
         foodElement = document.createElement('div');
         foodElement.style.gridRowStart = food.y;
         foodElement.style.gridColumnStart = food.x;
         foodElement.classList.add('food');
         board.appendChild(foodElement);


    


//Main logic starts here
window.requestAnimationFrame(main);
   window.addEventListener('keydown' , e =>{
      //Start the game
       moveSound.play();
       switch (e.key){
           case "ArrowUp":
               console.log("ArrowUp");
               inputDir.x = 0;
               inputDir.y = -1;
               break;
   
           case "ArrowDown":
               console.log("ArrowDown");
               inputDir.x = 0;
               inputDir.y = 1;
               break;
   
           case "ArrowLeft":
               console.log("ArrowLeft");
               inputDir.x = -1;
               inputDir.y = 0;
               break;
   
           case "ArrowRight":
               console.log("ArrowRight");
               inputDir.x = 1;
               inputDir.y = 0;
               break;
           default:
               break;
   
       }
   })
   









window.requestAnimationFrame(main);
