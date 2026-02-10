//caches variable
const userInputDiv = document.querySelector("#userInput")
const section = document.querySelector("#div-section")
const player1Name = document.querySelector("#player1Name")
const player2Name = document.querySelector("#player2Name")
const player1 = document.querySelector("#player1")
const player2 = document.querySelector("#player2")
const playerDetails = document.querySelector("#playerDetails")
let dots = document.querySelectorAll(".dot")
let lines
const reselectDots = document.querySelector("#backTo0")

let dotsConnection = {}
let firstDot
let secondDot
//input:
const row = document.querySelector("#row")
const column = document.querySelector("#column")
const button = document.querySelector("#numOfDots")
const usersDots = []

//(player1 points & player2 points) ---->which will increase by 1 each time player close a box

//functions

const init = () => {
  let length = row.value * column.value

  //for (let i = 0; i < 4; i++) {
  for (let i = 0; i < length; i++) {
    dotsConnection = {
      i: {
        line1: {
          position: [i, i + 1],
          lined: false,
        },
        line2: {
          position: [i, i + row.value],
          lined: false,
        },
        line3: {
          position: [i + 1, i + row.value + 1],
          lined: false,
        },
        line4: {
          position: [i + row.value, i + row.value + 1],
          lined: false,
        },
      },
    }
    //console.log(dotsConnection.i.line1.position[0])
  } //end of for loop
  userInputDiv.style.display = "none"
  if (player1Name.value > "") {
    player1.textContent = player1Name.value + ":"
  }
  if (player2Name.value > "") {
    player2.textContent = player2Name.value + ":"
  }
  playerDetails.style.display = "block"
  section.innerHTML = ""

  for (let i = 0; i < length; i++) {
    //for loop to create the dots
    const newDiv = document.createElement("div")
    newDiv.innerHTML = `<div class='dot' id=${i}></div>`
    section.appendChild(newDiv)
  }

  //for creating the lines
  //number of lines -= row.value bec ._._. when having 3 dots I only need 2 lines
  // for the .vertical_line & horizontal_line

  for (let i = 0; i < Number(row.value) - 1; i++) {
    for (let j = 0; j < Number(column.value) - 1; j++) {
      const newDivElement = document.createElement("div")
      newDivElement.innerHTML = `<div class='horizontal_line lines'></div>`
      section.appendChild(newDivElement)
    }
    for (let j = 0; j < column.value; j++) {
      const newDivElement = document.createElement("div")
      newDivElement.innerHTML = `<div class='vertical_line lines'></div>`
      section.appendChild(newDivElement)
    }
  }

  lines = document.querySelectorAll(".lines")
  dots = document.querySelectorAll(".dot")
  // console.log(lines.length - 1) --> correct

  dots.forEach((dot) => {
    dot.addEventListener("click", () => clickDot(dot))
  })

  // create one last horizontal_line
  const newDivElement = document.createElement("div")
  newDivElement.innerHTML = `<div class='horizontal_line lines' id=${lines.length - 1}></div>`
  section.appendChild(newDivElement)
  lines = document.querySelectorAll(".lines")
  console.log(lines.length - 1)
  //update the css file

  let numOfColumn = ""
  for (let i = 0; i < column.value; i++) {
    numOfColumn = numOfColumn + "1fr "
  }
  section.style.gridTemplateColumns = numOfColumn
  //window.location.href = "./main.html"
}
//a function that will see if the selected 2 dots are able to connect or not, if it can connect it will draw a line between the 2 dots and if the box is closed the player points will increase

const connectingDots = (B, C) => {
  //function#2
  console.log("Function Entered")
  console.log(C)
  let poss
  let length = row.value * column.value
  for (let i = 0; i < length; i++) {
    if (B === dots[i]) {
      //B --> array.index
      console.log(`B index: ${i}`)
      console.log(length)
      if (C === dots[i + 1]) {
        console.log(`C at index: ${i + 1}`)
      } else if (C === dots[i + Number(column.value)]) {
        console.log(`C at index: ${i + Number(column.value)}`)
      } else {
        console.log("these 2 dote can NOT be connected to each other")
      } // print not valid or does not do anything
    } else if (C === dots[i]) {
      if (B === dots[i + 1]) {
        console.log(`you clicked on the dot with the index: ${index}`)
      } else if (B === dots[i + Number(column.value)]) {
      } else {
      } // print not valid or does not do anything
    } else {
    } // print not valid or does not do anything
  }
}

function handleClick(event) {
  console.log("Element was clicked!", event)
}

const clickDot = (dot) => {
  //usersDots --> array of 2 for 2 dots
  if (usersDots.length < 2) {
    usersDots.push(dot)
    console.log(usersDots.length)
    if (usersDots.length === 2) {
      connectingDots(usersDots[0], usersDots[1])
    }
  } else {
    console.log("can not select more then 2")
  } //backTo0
}

button.addEventListener("click", init)
