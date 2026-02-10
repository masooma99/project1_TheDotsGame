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
let displayLine
const reselectDots = document.querySelector("#backTo0")

let dotsConnection = {}
let firstDot
let secondDot
//input:
const row = document.querySelector("#row")
const column = document.querySelector("#column")
const button = document.querySelector("#numOfDots")
const verticalLine = document.querySelectorAll(".vertical_line")
const horizontalLine = document.querySelectorAll(".horizontal_line")
const usersDots = []

//(player1 points & player2 points) ---->which will increase by 1 each time player close a box

//functions

const init = () => {
  if (
    row.value >= 0 &&
    row.value <= 10 &&
    column.value >= 0 &&
    column.value <= 8
  ) {
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

    let divIndex = 0
    let vdivIndex = 0
    for (let i = 0; i < Number(row.value); i++) {
      // if (i % 2 === 1 || i === 0) {
      // starting with dot
      const newDiv = document.createElement("div")
      newDiv.innerHTML = `<div class='dot'></div>`
      section.appendChild(newDiv)
      for (let j = 0; j < Number(column.value) - 1; j++) {
        const newDivElement = document.createElement("div")
        newDivElement.innerHTML = `<div class='horizontal_line lines' id="${divIndex}"></div>`
        divIndex++
        section.appendChild(newDivElement)
        // horizontal_line then dot
        const newDiv = document.createElement("div")
        newDiv.innerHTML = `<div class='dot'></div>`
        section.appendChild(newDiv)
      }
      if (i < Number(row.value) - 1) {
        for (let j = 0; j < Number(column.value); j++) {
          // if (j % 2 === 1 || j === 0) {
          const newDivElement = document.createElement("div")
          newDivElement.innerHTML = `<div class='vertical_line lines' id="v${vdivIndex}"></div>`
          vdivIndex++
          section.appendChild(newDivElement)
          if (j < Number(column.value - 1)) {
            const newEmptyDivElement = document.createElement("div")
            newEmptyDivElement.innerHTML = `<div></div>`
            section.appendChild(newEmptyDivElement)
          }
        }
      }
      if (i === Number(row.value) - 1) {
        const newEmptyDivElement = document.createElement("div")
        newEmptyDivElement.innerHTML = `<div></div>`
        section.appendChild(newEmptyDivElement)
      }
    }
    lines = document.querySelectorAll(".lines")
    dots = document.querySelectorAll(".dot")
    // verticalLine = document.querySelectorAll(".vertical_line")
    // horizontalLine = document.querySelectorAll(".horizontal_line")
    // console.log(lines.length - 1) --> correct
    // verticalLine.style.height = "50px"

    dots.forEach((dot) => {
      dot.addEventListener("click", () => clickDot(dot))
    })
    let numOfColumn = ""
    for (let i = 0; i < Number(column.value) + Number(column.value) - 1; i++) {
      numOfColumn = numOfColumn + "1fr "
    }
    section.style.gridTemplateColumns = numOfColumn
    //window.location.href = "./main.html"
  }
}
//a function that will see if the selected 2 dots are able to connect or not, if it can connect it will draw a line between the 2 dots and if the box is closed the player points will increase

const connectingDots = (B, C) => {
  //function#2
  console.log("Function Entered")
  console.log(C)
  let count = Number(column.value)
  let currentRow = 1
  let length = row.value * column.value
  let vLineIndex = 0
  for (let i = 0; i < length; i++) {
    count--
    if (count === 0) {
      currentRow++
      count = Number(column.value)
      // console.log(`lines index: ${i - 2 - (currentRow - 2)}`)
      // console.log(`i : ${i} & the current horizontal line ${currentRow}`)
    }
    if (B === dots[i]) {
      if (C === dots[i + 1]) {
        if (dotsConnection.i.line1.lined === false) {
          //div line --> display:block
          displayLine = document.getElementById(i - (currentRow - 1))
          displayLine.style.display = "block"
          dotsConnection.i.line1.lined = true
          return
        }
      } else if (C === dots[i + Number(column.value)]) {
        if (dotsConnection.i.line2.lined === false) {
          //div line --> display:block
          displayLine = document.getElementById("v" + i)
          displayLine.style.display = "block"
          dotsConnection.i.line2.lined = true
          return
        }
      } else {
        console.log("these 2 dote can NOT be connected to each other")
      } // print not valid or does not do anything
    } else if (C === dots[i]) {
      if (B === dots[i + 1]) {
        if (dotsConnection.i.line1.lined === false) {
          //div line --> display:block
          displayLine = document.getElementById(i - (currentRow - 1))
          displayLine.style.display = "block"
          dotsConnection.i.line1.lined = true
          return
        }
      } else if (B === dots[i + Number(column.value)]) {
        if (dotsConnection.i.line2.lined === false) {
          //div line --> display:block
          displayLine = document.getElementById("v" + i)
          displayLine.style.display = "block"
          dotsConnection.i.line2.lined = true
          return
        }
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
