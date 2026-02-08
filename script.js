//caches variable

const section = document.querySelector("#div-section")
let dotsConnection
//const dots = document.querySelectorAll(".dot")
//(player1 points & player2 points) ---->which will increase by 1 each time player close a box

//loop to create an array of winning cases
for (let i = 0; i < 30; i++) {
  dotsConnection = {
    i: {
      line1: {
        position: [i, i + 1],
        lined: true,
      },
      line2: {
        position: [i, i + 5],
        lined: false,
      },
      line3: {
        position: [i + 1, i + 6],
        lined: false,
      },
      line4: {
        position: [i + 5, i + 6],
        lined: false,
      },
    },
  }
  //console.log(dotsConnection.i.line1.lined)
} //for loop

//functions
//init function to recreate the dots and changed all lines to false
const init = () => {
  /*dotsConnection.forEach((dot, index) => {
    dot.line1.lined = false
    console.log(dot.line1.lined)
    //console.log(index)
  })*/
  for (let i = 0; i < 30; i++) {
    dotsConnection.i.line1.lined = false
    //console.log(dotsConnection.i.line1.lined)
  }
  for (let i = 0; i < 30; i++) {
    //for loop to create the dots
    const newDiv = document.createElement("div")
    newDiv.innerHTML = `<div class='dot' id=${i}></div>`
    //console.log(newDiv)
    //console.log(newDiv.innerHTML)
    section.appendChild(newDiv)
    //document.body.appendChild(newDiv)
  }
}

//a function that will see if the selected 2 dots are able to connect or not, if it can connect it will draw a line between the 2 dots and if the box is closed the player points will increase

const connectingDots = (B, C) => {
  //function#2

  dotsConnection.forEach((dot) => {
    let poss = dot.line1.position[0]
    if (B === poss) {
      if (C === B + 1) {
      } else if (C === B + 5) {
      } else {
      } // print not valid or does not do anything
    } else if (C === poss) {
      if (B === C + 1) {
      } else if (B === C + 5) {
      } else {
      } // print not valid or does not do anything
    } else {
    } // print not valid or does not do anything
  })
}

init()
