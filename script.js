//caches variable

const section = document.querySelector("#div-section")
let dotsConnection
//input:
const row = document.querySelector("#row")
const column = document.querySelector("#column")
const button = document.querySelector("#numOfDots")

const dots = document.querySelectorAll(".dot")
//(player1 points & player2 points) ---->which will increase by 1 each time player close a box

//functions

const init = (r = row.value, c = column.value) => {
  section.innerHTML = ""
  //recreating the array for the winning cases
  length = r * c
  for (let i = 0; i < length; i++) {
    dotsConnection = {
      i: {
        line1: {
          position: [i, i + 1],
          lined: false,
        },
        line2: {
          position: [i, i + r],
          lined: false,
        },
        line3: {
          position: [i + 1, i + r + 1],
          lined: false,
        },
        line4: {
          position: [i + r, i + r + 1],
          lined: false,
        },
      },
    }
  } //end of for loop

  for (let i = 0; i < length; i++) {
    //for loop to create the dots
    const newDiv = document.createElement("div")
    newDiv.innerHTML = `<div class='dot' id=${i}></div>`
    section.appendChild(newDiv)
  }

  //update the css file
  let numOfRow = ""
  for (let i = 0; i < row.value; i++) {
    numOfRow = numOfRow + "1fr "
  }
  section.style.gridTemplateColumns = numOfRow
}

//a function that will see if the selected 2 dots are able to connect or not, if it can connect it will draw a line between the 2 dots and if the box is closed the player points will increase

const connectingDots = (B, C) => {
  //function#2
  console.log("Function Entered")
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

function handleClick(event) {
  console.log("Element was clicked programmatically!", event.target.id)
  alert("Click event fired for " + event.target.id)
}

//dots.addEventListener("click", section)
