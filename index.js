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




function changeCordinate(element, value, key) {
    let bgImg = document.getElementById("bgImg")


    let rect = element.getBoundingClientRect()
    console.log(`Change TOP: ${element}\t${value}\t${key}`)

    // if ((key == "ArrowUp" || key == "w") && rect.top > 0) {
    //     element.style.top = rect.top - value + "px";
    // }
    // else if ((key == "ArrowDown" || key == "a")) {
    //     if (rect.top < 920) {
    //         element.style.top = rect.top + value + "px";
    //     }
    // }
    // else if (key == "ArrowLeft" || key == "s") {
    //     element.style.left = rect.left - value + "px";
    // }
    // else if (key == "ArrowRight" || key == "d") {
    //     element.style.left = rect.left + value + "px";
    // }
    // let rect2 = element.getBoundingClientRect()
    // console.log("Top: ", rect2.top)


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
    let rect2 = element.getBoundingClientRect()
    console.log("Top: ", rect2.top)

}
let body = document.getElementById("mainBody")

var ballImg = document.getElementById("ballImg")

var speed_1 = 10;
var speed_2 = 20;
function Move(key){
    // ArrowUp - 38
    // ArrowDown - 40
    // ArrowLeft - 37
    // ArrowRight - 39

    // w - 87
    // a - 65
    // s - 83
    // d - 68
    if (key == 38) {
        changeCordinate(ballImg,speed_2,key)
    }
    else if (key == 40) {
        changeCordinate(ballImg,speed_2,key)
    }
    else if (key == 37) {
        changeCordinate(ballImg,speed_2,key)
    }
    else if (key == 39) {
        changeCordinate(ballImg,speed_2,key)
    }
    if (key == 87) {
        console.log("w")
    }
    else if (key == 65) {
        alert("a")
    }
    else if (key == 83) {
        alert("s")
    }
    else if (key == 68) {
        alert("d")
    }
}
var map = {}; // You could also use an array
onkeydown = onkeyup = function (e) {
    e = e || event; // to deal with IE
    map[e.keyCode] = e.type == 'keydown';
    for (var key in map) {
        if(map[key]){
            Move(key)
        }
    }
    

}





// Test Codes

// document.addEventListener('keypress',(e)=>{
//     let key = e.key;
//     if (key == "w") {
//         console.log("w")
//     }
//     else if (key == "a") {
//         alert("a")
//     }
//     else if (key == "s") {
//         alert("s")
//     }
//     else if (key == "d") {
//         alert("d")
//     }
// });


// body.addEventListener("keydown", (e) => {
//     let key = e.key;
//     // alert(e.key)
//     if (key == "ArrowUp") {
//         changeCordinate(ballImg,10,key)
//     }
//     else if (key == "ArrowDown") {
//         changeCordinate(ballImg,10,key)
//     }
//     else if (key == "ArrowLeft") {
//         changeCordinate(ballImg,10,key)
//     }
//     else if (key == "ArrowRight") {
//         changeCordinate(ballImg,10,key)
//     }

//     if (key == "w") {
//         console.log("w")
//     }
//     else if (key == "a") {
//         alert("a")
//     }
//     else if (key == "s") {
//         alert("s")
//     }
//     else if (key == "d") {
//         alert("d")
//     }
// });
