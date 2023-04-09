// const canvas = document.querySelector('canvas');
// const c= canvas.getContext('2d');//specifying context(2d or 3d)
// //specifying the width and height of canvas
// canvas.width=1024   
// canvas.height=576   

// c.fillRect(0,0,canvas.width,canvas.height);//background 
// const gravity=0.7;
 
// class Sprite{//moving images in games are known as sprites
//   constructor({position, velocity,color='red',offset }){ //creating a object from class sprite is defined in it
//      this.position = position; // position can be any datatype
//      this.velocity = velocity;
//      this.width =50;
//      this.height = 150;
//      this.lastkey;
//      this.attackBox = {  //attacks
//       position: {
//         x: this.position.x,
//         y: this.position.y
//       },
//       offset,  
//       width: 100 ,
//       height: 50,
//      }
//      this.color = color;
//      this.isAttacking;
//      this.health= 100;
//     }  
//   draw(){//for drawing a sprite(player)
//     //c.fillStyle='red';
//     c.fillStyle = this.color;
//     c.fillRect(this.position.x, this.position.y, 50, this.height,this.width);//50 pixels wide and 150 pixels tall(height)
 
//     //attackbox
//     if(this.isAttacking){
//      c.fillStyle='green';
//     c.fillRect(
//       this.attackBox.position.x,
//        this.attackBox.position.y,
//        this.attackBox.width,
//        this.attackBox.height
//        );
//      }
//   }
// update(){
//  this.draw();//refering draw function

//  this.attackBox.position.x = this.position.x + this.attackBox.offset.x;
//  this.attackBox.position.y = this.position.y;

//  this.position.x += this.velocity.x;// for moving character to the right 
// //  this.position.y=this.position.y=10///////////for making our sprites fall that is player/enemy
// //  this.position.y+=10;//above syntax can also be used here
//  //this.velocity.y += gravity;//commented because we don't want to call this for every frame
//  this.position.y += this.velocity.y;//for position on y axis we are adding velocity on y axis. 
//  //above statement is more cleaner approach
//  if(this.position.y + this.height +  this.velocity.y >= canvas.height){//prevents our sprite from falling off the campus
//     this.velocity.y = 0; 
//   }else this.velocity.y += gravity;
//  }
//  attack(){
//   this.isAttacking = true;
//   setTimeout (() => {
//   this.isAttacking = false;
//   },100)
//  }
// }
// //creating a player --creating a new object from class
// const player = new Sprite({
//   position:  { //position of sprite player
//     x: 0,
//     y: 0
// },
// velocity: { //velocity of sprite player
//     x:0,
//     y:0
// },
//  offset:{
//     x:0,
//     y:0
//  }
// })
// // player.draw();//calling draw function for player.. 

// const enemy = new Sprite({
//     position:  { //position of sprite enemy
//       x: 400,
//       y: 100
//   },
//   velocity: { //velocity of sprite enemy
//       x:0,
//       y:0
//    },
//    color: 'blue',
//    offset:{
//     x: -50,
//     y: 0
//  }
//   })

// // enemy.draw();//calling draw function for enemy..
// //player.draw and enemy.draw function are removed cuz these functions are only called when the file first loads
// console.log(player);//outputs a message to web console
// const keys={//for accurate movement
//     a:{
//         pressed:false
//     },
//    d: {
//         pressed:false
//     },
//     w: {
//          pressed:false
//     },
//     ArrowRight:{
//         pressed:false
//     },
//     ArrowLeft:{
//        pressed:false
//     }
// }
// function rectangularCollision({ rectangle1, rectangle2})
// {
//   return(
//     rectangle1.attackBox.position.x + rectangle1.attackBox.width >= rectangle2.position.x
//     && rectangle1.attackBox.position.x <= rectangle2.position.x + rectangle2.width &&
//     rectangle1.attackBox.position.y + rectangle1.attackBox.height >= rectangle2.position.y
//     && rectangle1.attackBox.position.y <= rectangle2.position.y + rectangle2.height
//   )
// }
// function determineWinner({player ,enemy, timerId}){//for determining the winner acc to health,timer
//   clearTimeout(timerId);
//   document.querySelector('#displayText').style.display='flex';
//   if(player.health === enemy.health){
//     document.querySelector('#displayText').innerHTML = 'Tie';
//   }else if (player.health > enemy.health){
//     document.querySelector('#displayText').innerHTML ='Player 1 wins';
//   }else if(player.health < enemy.health){
//     document.querySelector('#displayText').innerHTML ='Player 2 wins';
//   }
// }
// let timer = 60; //timer functionality here 
// let timerId
// function decreaseTimer(){
//    if (timer > 0){
//     timerId = setTimeout(decreaseTimer,1000)
//    timer--
//    document.querySelector('#timer').innerHTML = timer;
//   }
//   if(timer ===0){
//   determineWinner({player,enemy,timerId});
// }
// }
// decreaseTimer()

// function animate(){
//     window.requestAnimationFrame(animate); //creating infinite animation loop
//     c.fillStyle = 'black';//for background--red to black
//     c.fillRect(0,0,canvas.width,canvas.height);
//     player.update();//called for any frame in an animation loop
//     enemy.update();
   
//     player.velocity.x = 0;
//     enemy.velocity.x = 0;
//      //player movement
//     if(keys.a.pressed && player.lastkey === 'a'){
//         player.velocity.x = -5;
//     }else if(keys.d.pressed && player.lastkey === 'd'){
//         player.velocity.x = 5;
//     } 
//     //enemy movement
//     if(keys.ArrowLeft.pressed && enemy.lastkey === 'ArrowLeft'){
//         enemy.velocity.x = -5;
//     }else if(keys.ArrowRight.pressed && enemy.lastkey === 'ArrowRight'){
//         enemy.velocity.x = 5;
//     }  
//     //attacks
//     //detect for collision
//     if(
//       rectangularCollision({
//       rectangle1: player,
//       rectangle2: enemy
//     }) &&
//       // player.attackBox.position.x + enemy.attackBox.width >= enemy.position.x
//       // && player.attackBox.position.x <= enemy.position.x + enemy.width &&
//       // player.attackBox.position.y + player.attackBox.height >= enemy.position.y
//       // && player.attackBox.position.y <= enemy.position.y + enemy.height &&
//       player.isAttacking
//       ){
//          player.isAttacking = false;
//          enemy.health -=20
//     document.querySelector('#enemyHealth').style.width = enemy.health + '%';
//   }

//   if(
//     rectangularCollision({
//     rectangle1: enemy,
//     rectangle2: player
//   }) &&
//   enemy.isAttacking
//       ){
//          enemy.isAttacking = false;
//          player.health -=20;
//          document.querySelector('#playerHealth').style.width = player.health + '%';
//   }
//   //end game based on health
//   if(enemy.health <=0 || player.health <= 0){
//     determineWinner({player,enemy,timerId})
//   }
// }
// animate()//calling animate function
// //now we are using event listeners to move characters
// window.addEventListener ('keydown',(event)=>{//eg.press key d
//   console.log(event.key);
//   switch(event.key){
//     //player 1
//     case 'd':  //right movement key
//       // player.velocity.x = 1; //defined above
//        keys.d.pressed = true;
//        player.lastkey = 'd';
//     break
//     case 'a': //left movement key
//        //  player.velocity.x=-1; another way below one is more accurate
//        keys.a.pressed = true;//for more accurate movement
//        player.lastkey = 'a';
//     break
//     case 'w':   //jump key
//     player.velocity.y = -20;
//       // keys.a.pressed = true;//for more accurate movement
//        player.lastkey = 'w';
//     break
//     case' ':
//     player.attack();
//     break

//     //player 2(enemy)
//     case 'ArrowRight':  //right movement key
//      keys.ArrowRight.pressed = true;
//      enemy.lastkey='ArrowRight';  
//   break
//   case 'ArrowLeft': //left movement key
//      keys.ArrowLeft.pressed = true;//for more accurate movement
//      enemy.lastkey = 'ArrowLeft';
//   break
//   case 'ArrowUp':   //jump key
//   enemy.velocity.y = -20;
//   break
//   case 'ArrowDown':
//     enemy.attack();
//    // enemy.isAttacking = true;
//    break
//  }    
// })
// window.addEventListener ('keyup',(event)=>{//eg.when you unpress a certain defined key 
//     switch(event.key){
//        case 'd':
//           //player.velocity.x = 0; //defined above
//           keys.d.pressed = false;
//        break
//        case 'a':
//          // player.velocity.x = 0;
//          keys.a.pressed = false ;//for more accurate movement
//         break
//         case 'w':
//           keys.w.pressed =false;
//           break
//     }
//           //Player 2(enemy) keys
//           switch(event.key){
//           case 'ArrowRight':
//             //player.velocity.x = 0; //defined above
//             keys.ArrowRight.pressed = false;
//          break
//          case 'ArrowLeft':
//            // player.velocity.x = 0;
//            keys.ArrowLeft.pressed = false ;//for more accurate movement
//           break  
//           case 'Arrowdown':
//             keys.Arrowdown.pressed = false ;

//     } 
//        console.log(event.key);   
//    })
const canvas = document.querySelector('canvas')
const c = canvas.getContext('2d')

canvas.width = 1024
canvas.height = 576

c.fillRect(0, 0, canvas.width, canvas.height)

const gravity = 0.7

const background = new Sprite({
  position: {
    x: 0,
    y: 0
  },
  imageSrc: './img/background.png'
})

const shop = new Sprite({
  position: {
    x: 600,
    y: 128
  },
  imageSrc: './img/shop.png',
  scale: 2.75,
  framesMax: 6
})

const player = new Fighter({
  position: {
    x: 0,
    y: 0
  },
  velocity: {
    x: 0,
    y: 0
  },
  offset: {
    x: 0,
    y: 0
  },
  imageSrc: './img/samuraiMack/Idle.png',
  framesMax: 8,
  scale: 2.5,
  offset: {
    x: 215,
    y: 157
  },
  sprites: {
    idle: {
      imageSrc: './img/samuraiMack/Idle.png',
      framesMax: 8
    },
    run: {
      imageSrc: './img/samuraiMack/Run.png',
      framesMax: 8
    },
    jump: {
      imageSrc: './img/samuraiMack/Jump.png',
      framesMax: 2
    },
    fall: {
      imageSrc: './img/samuraiMack/Fall.png',
      framesMax: 2
    },
    attack1: {
      imageSrc: './img/samuraiMack/Attack1.png',
      framesMax: 6
    },
    takeHit: {
      imageSrc: './img/samuraiMack/Take Hit - white silhouette.png',
      framesMax: 4
    },
    death: {
      imageSrc: './img/samuraiMack/Death.png',
      framesMax: 6
    }
  },
  attackBox: {
    offset: {
      x: 100,
      y: 50
    },
    width: 160,
    height: 50
  }
})

const enemy = new Fighter({
  position: {
    x: 400,
    y: 100
  },
  velocity: {
    x: 0,
    y: 0
  },
  color: 'blue',
  offset: {
    x: -50,
    y: 0
  },
  imageSrc: './img/kenji/Idle.png',
  framesMax: 4,
  scale: 2.5,
  offset: {
    x: 215,
    y: 167
  },
  sprites: {
    idle: {
      imageSrc: './img/kenji/Idle.png',
      framesMax: 4
    },
    run: {
      imageSrc: './img/kenji/Run.png',
      framesMax: 8
    },
    jump: {
      imageSrc: './img/kenji/Jump.png',
      framesMax: 2
    },
    fall: {
      imageSrc: './img/kenji/Fall.png',
      framesMax: 2
    },
    attack1: {
      imageSrc: './img/kenji/Attack1.png',
      framesMax: 4
    },
    takeHit: {
      imageSrc: './img/kenji/Take hit.png',
      framesMax: 3
    },
    death: {
      imageSrc: './img/kenji/Death.png',
      framesMax: 7
    }
  },
  attackBox: {
    offset: {
      x: -170,
      y: 50
    },
    width: 170,
    height: 50
  }
})

console.log(player)

const keys = {
  a: {
    pressed: false
  },
  d: {
    pressed: false
  },
  ArrowRight: {
    pressed: false
  },
  ArrowLeft: {
    pressed: false
  }
}

decreaseTimer()

function animate() {
  window.requestAnimationFrame(animate)
  c.fillStyle = 'black'
  c.fillRect(0, 0, canvas.width, canvas.height)
  background.update()
  shop.update()
  c.fillStyle = 'rgba(255, 255, 255, 0.15)'
  c.fillRect(0, 0, canvas.width, canvas.height)
  player.update()
  enemy.update()

  player.velocity.x = 0
  enemy.velocity.x = 0

  // player movement

  if (keys.a.pressed && player.lastKey === 'a') {
    player.velocity.x = -5
    player.switchSprite('run')
  } else if (keys.d.pressed && player.lastKey === 'd') {
    player.velocity.x = 5
    player.switchSprite('run')
  } else {
    player.switchSprite('idle')
  }

  // jumping
  if (player.velocity.y < 0) {
    player.switchSprite('jump')
  } else if (player.velocity.y > 0) {
    player.switchSprite('fall')
  }

  // Enemy movement
  if (keys.ArrowLeft.pressed && enemy.lastKey === 'ArrowLeft') {
    enemy.velocity.x = -5
    enemy.switchSprite('run')
  } else if (keys.ArrowRight.pressed && enemy.lastKey === 'ArrowRight') {
    enemy.velocity.x = 5
    enemy.switchSprite('run')
  } else {
    enemy.switchSprite('idle')
  }

  // jumping
  if (enemy.velocity.y < 0) {
    enemy.switchSprite('jump')
  } else if (enemy.velocity.y > 0) {
    enemy.switchSprite('fall')
  }

  // detect for collision & enemy gets hit
  if (
    rectangularCollision({
      rectangle1: player,
      rectangle2: enemy
    }) &&
    player.isAttacking &&
    player.framesCurrent === 4
  ) {
    enemy.takeHit()
    player.isAttacking = false

    gsap.to('#enemyHealth', {
      width: enemy.health + '%'
    })
  }

  // if player misses
  if (player.isAttacking && player.framesCurrent === 4) {
    player.isAttacking = false
  }

  // this is where our player gets hit
  if (
    rectangularCollision({
      rectangle1: enemy,
      rectangle2: player
    }) &&
    enemy.isAttacking &&
    enemy.framesCurrent === 2
  ) {
    player.takeHit()
    enemy.isAttacking = false

    gsap.to('#playerHealth', {
      width: player.health + '%'
    })
  }

  // if player misses
  if (enemy.isAttacking && enemy.framesCurrent === 2) {
    enemy.isAttacking = false
  }

  // end game based on health
  if (enemy.health <= 0 || player.health <= 0) {
    determineWinner({ player, enemy, timerId })
  }
}

animate()

window.addEventListener('keydown', (event) => {
  if (!player.dead) {
    switch (event.key) {
      case 'd':
        keys.d.pressed = true
        player.lastKey = 'd'
        break
      case 'a':
        keys.a.pressed = true
        player.lastKey = 'a'
        break
      case 'w':
        player.velocity.y = -20
        break
      case ' ':
        player.attack()
        break
    }
  }

  if (!enemy.dead) {
    switch (event.key) {
      case 'ArrowRight':
        keys.ArrowRight.pressed = true
        enemy.lastKey = 'ArrowRight'
        break
      case 'ArrowLeft':
        keys.ArrowLeft.pressed = true
        enemy.lastKey = 'ArrowLeft'
        break
      case 'ArrowUp':
        enemy.velocity.y = -20
        break
      case 'ArrowDown':
        enemy.attack()

        break
    }
  }
})

window.addEventListener('keyup', (event) => {
  switch (event.key) {
    case 'd':
      keys.d.pressed = false
      break
    case 'a':
      keys.a.pressed = false
      break
  }

  // enemy keys
  switch (event.key) {
    case 'ArrowRight':
      keys.ArrowRight.pressed = false
      break
    case 'ArrowLeft':
      keys.ArrowLeft.pressed = false
      break
  }
})