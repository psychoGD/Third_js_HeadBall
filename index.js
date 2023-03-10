// let doors = document.getElementsByClassName("layer2")
// for (let i = 0; i < doors.length; i++) {
//     let rect = doors[i].getBoundingClientRect()
//     console.log(rect)
//     console.log(rect.top, rect.right, rect.bottom, rect.left);
//     // console.log(rect.top, rect.right, rect.bottom, rect.left);
// }

// document.onkeypress = function(evt) {
//     evt = evt || window.event;
//     var charCode = evt.keyCode || evt.which;
//     var charStr = String.fromCharCode(charCode);
//     alert(charStr);
// };
let body = document.getElementById("mainBody")

var ballImg = document.getElementById("ballImg")
var ballCordinates = ballImg.getBoundingClientRect();
var ballTop = ballCordinates.top;
var ballLeft =ballCordinates.left;


var p1 = document.getElementById("player1")
let p1Cordinates = p1.getBoundingClientRect();
var p1Top = p1Cordinates.top;
var p1Left = p1Cordinates.left;



var p2 = document.getElementById("player2")
let p2Cordinates = p2.getBoundingClientRect();
var p2Top = p2Cordinates.top;
var p2Left = p2Cordinates.left;


var speed_1 = 20;
var speed_2 = 20;

function StartPositions(){
    // element.style.top = rect.top - value + "px";
    p1.style.top = 400+"px"
    p2.style.top = 400+"px"

    p1.style.left = 640+"px"
    p2.style.left = 1280+"px"

    ballImg.style.top= 460+"px";
    ballImg.style.left= 950+"px";
}
StartPositions()
function CheckCollision(player, ball) {
    let rectPlayer = player.getBoundingClientRect();
    let rectBall = ball.getBoundingClientRect();

    let lenOfRL = rectPlayer.right-rectBall.left;
    lenOfRL -= 30;
    console.log(lenOfRL)
    // console.log(ball.clientWidth)
    // console.log(player.clientWidth)

    
    // Check if the two rectangles overlap
    if (rectPlayer.right >= rectBall.left &&
        rectPlayer.left <= rectBall.right &&
        rectPlayer.bottom >= rectBall.top &&
        rectPlayer.top <= rectBall.bottom) {
            if(lenOfRL<0){
                console.log("Left")
                ballImg.style.left = rectBall.left + 20 +"px";
            }
            else{
                console.log("Right")
                ballImg.style.left = rectBall.left - 20 +"px";
            }
            
      return true;
    }
  
    return false;
  }

function changeCordinate(element, value, key) {
    // let bgImg = document.getElementById("bgImg")


    let rect = element.getBoundingClientRect()
    
    // console.log(`Change TOP: ${element}\t${value}\t${key}`)
    // ArrowUp - 38
    // ArrowDown - 40
    // ArrowLeft - 37
    // ArrowRight - 39

    // w - 87
    // a - 65
    // s - 83
    // d - 68
    // Check if move up
    if ((key == 38 || key == 87) && rect.top > 0) {
        element.style.top = rect.top - value + "px";
    }
    //Check if move bottom
    else if ((key == 40 || key == 83)) {
        if (rect.top < 920) {
            element.style.top = rect.top + value + "px";
        }
    }
    // Check if move left
    else if (key == 37 || key == 65) {
        element.style.left = rect.left - value + "px";
    }
    else if (key == 39 || key == 68) {
        element.style.left = rect.left + value + "px";
    }
    // let rect2 = element.getBoundingClientRect()
    // console.log("Top: ", rect2.top)
    if (CheckCollision(element, ballImg)) {
        console.log("Player hit ball!");
      }
}

function Move(key) {
    // ArrowUp - 38
    // ArrowDown - 40
    // ArrowLeft - 37
    // ArrowRight - 39


    if (key == 38) {
        changeCordinate(p2, speed_2, key)
    }
    else if (key == 40) {
        changeCordinate(p2, speed_2, key)
    }
    else if (key == 37) {
        changeCordinate(p2, speed_2, key)
    }
    else if (key == 39) {
        changeCordinate(p2, speed_2, key)
    }
    // w - 87
    // a - 65
    // s - 83
    // d - 68
    if (key == 87) {
        changeCordinate(p1, speed_1, key)
    }
    else if (key == 65) {
        changeCordinate(p1, speed_1, key)
    }
    else if (key == 83) {
        changeCordinate(p1, speed_1, key)
    }
    else if (key == 68) {
        changeCordinate(p1, speed_1, key)
    }
}
var map = {}; // You could also use an array
onkeydown = onkeyup = function (e) {
    e = e || event; // to deal with IE
    map[e.keyCode] = e.type == 'keydown';
    for (var key in map) {
        if (map[key]) {
            Move(key)
        }
    }


}

// onmousemove = function(e){console.log("mouse location:", e.clientX, e.clientY)}



