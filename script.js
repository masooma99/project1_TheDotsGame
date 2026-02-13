//caches variable
let P1Points = 0
let P2Points = 0
const POnePoints = document.querySelector("#player1Points")
const PTwoPoints = document.querySelector("#player2Points")
const playersTurn = document.querySelector("#turn")
let turn = 1
let player2Turn = true
//let winner
//let tie

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

let dotsConnection = []
let firstDot
let secondDot
//input:
const row = document.querySelector("#row")
const column = document.querySelector("#column")
const button = document.querySelector("#numOfDots")
const verticalLine = document.querySelectorAll(".vertical_line")
const horizontalLine = document.querySelectorAll(".horizontal_line")
let usersDots = []

//(player1 points & player2 points) ---->which will increase by 1 each time player close a box

//functions

const init = () => {
  if (
    row.value >= 3 &&
    row.value <= 10 &&
    column.value >= 3 &&
    column.value <= 8
  ) {
    let length = Number(row.value) * Number(column.value)
    // console.log(length)
    //for (let i = 0; i < 4; i++) {
    //the first loop I write was overwriting the array
    for (let i = 0; i < length - 1; i++) {
      dotsConnection[i] = {
        line1: {
          position: [i, i + 1],
          lined: false,
        },
        line2: {
          position: [i, i + Number(column.value)],
          lined: false,
        },
        line3: {
          position: [i + 1, i + Number(column.value) + 1],
          lined: false,
        },
        line4: {
          position: [i + Number(column.value), i + Number(column.value) + 1],
          lined: false,
        },
      }
      // console.log(dotsConnection[i].line1.lined)
      // console.log(dotsConnection[i].line2.lined)
    } //end of for loop
    userInputDiv.style.display = "none"
    if (player1Name.value > "") {
      player1.textContent = player1Name.value + ":"
    }
    if (player2Name.value > "") {
      player2.textContent = player2Name.value + ":"
    }
    playerDetails.style.display = "grid"
    playerDetails.style.gridTemplateColumns = "1fr 6fr"
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
    // verticalLine.style.height = "50px"
    aEListener()
    // dots.forEach((dot) => {
    //   dot.addEventListener("click", () => clickDot(dot))
    // })
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
  // console.log("function entered")
  let count = Number(column.value)
  let currentRow = 1
  let length = row.value * column.value
  let vLineIndex = 0
  for (let i = 0; i < length; i++) {
    count--
    if (count === 0) {
      currentRow++
      count = Number(column.value)
    }
    if (B === dots[i]) {
      // console.log("if B dot entered")
      if (C === dots[i + 1]) {
        // console.log(`lined before changing: ${dotsConnection[i].line1.lined}`)
        if (dotsConnection[i].line1.lined === false) {
          //div line --> display:block
          displayLine = document.getElementById(i - (currentRow - 1))
          displayLine.style.display = "block"
          dotsConnection[i].line1.lined = true
          if (i >= column.value) {
            dotsConnection[i - Number(column.value)].line4.lined = true
            if (
              dotsConnection[i - Number(column.value)].line1.lined === true &&
              dotsConnection[i - Number(column.value)].line2.lined === true &&
              dotsConnection[i - Number(column.value)].line3.lined === true
            ) {
              points()
            } else {
              turns()
            } //end of else
          }
          if (
            dotsConnection[i].line2.lined === true &&
            dotsConnection[i].line3.lined === true &&
            dotsConnection[i].line4.lined === true
          ) {
            //console.log("box is close now") --> does work
            points()
          } else {
            turns()
          } //end of else
          usersDots.pop()
          usersDots.pop()
          return
        }
      } else if (C === dots[i + Number(column.value)]) {
        // console.log(`lined before changing: ${dotsConnection[i].line2.lined}`)
        if (dotsConnection[i].line2.lined === false) {
          //div line --> display:block
          displayLine = document.getElementById("v" + i)
          console.log(displayLine)
          displayLine.style.display = "block"
          dotsConnection[i].line2.lined = true
          console.log(dotsConnection[i].line1.lined)
          console.log(dotsConnection[i].line2.lined)
          console.log(dotsConnection[i].line3.lined)
          console.log(dotsConnection[i].line4.lined)
          //I'll need to update the previous box too
          if (i > 0) {
            dotsConnection[i - 1].line3.lined = true
            if (
              dotsConnection[i - 1].line1.lined === true &&
              dotsConnection[i - 1].line2.lined === true &&
              dotsConnection[i - 1].line4.lined === true
            ) {
              points()
            } else {
              turns()
            }
          }
          // console.log(`lined after changing: ${dotsConnection[i].line2.lined}`)
          if (
            dotsConnection[i].line1.lined === true &&
            dotsConnection[i].line3.lined === true &&
            dotsConnection[i].line4.lined === true
          ) {
            points()
          } else {
            turns()
          } //end of else
          usersDots.pop()
          usersDots.pop()
          return
        }
      }
      // usersDots.pop()
      // usersDots.pop()
      // return
    } else if (C === dots[i]) {
      if (B === dots[i + 1]) {
        if (dotsConnection[i].line1.lined === false) {
          //div line --> display:block
          displayLine = document.getElementById(i - (currentRow - 1))
          displayLine.style.display = "block"
          dotsConnection[i].line1.lined = true
          if (i >= column.value) {
            dotsConnection[i - Number(column.value)].line4.lined = true
            if (
              dotsConnection[i - Number(column.value)].line1.lined === true &&
              dotsConnection[i - Number(column.value)].line2.lined === true &&
              dotsConnection[i - Number(column.value)].line3.lined === true
            ) {
              points()
            } else {
              turns()
            } //end of else
          }
          if (
            dotsConnection[i].line2.lined === true &&
            dotsConnection[i].line1.lined === true &&
            dotsConnection[i].line1.lined === true
          ) {
            points()
          } else {
            turns()
          } //end of else
          usersDots.pop()
          usersDots.pop()
          return
        }
      } else if (B === dots[i + Number(column.value)]) {
        if (dotsConnection[i].line2.lined === false) {
          //div line --> display:block
          displayLine = document.getElementById("v" + i)
          displayLine.style.display = "block"
          dotsConnection[i].line2.lined = true
          if (i > 0) {
            dotsConnection[i - 1].line3.lined = true
            if (
              dotsConnection[i - 1].line1.lined === true &&
              dotsConnection[i - 1].line2.lined === true &&
              dotsConnection[i - 1].line4.lined === true
            ) {
              points()
            } else {
              turns()
            }
          }
          if (
            dotsConnection[i].line1.lined === true &&
            dotsConnection[i].line3.lined === true &&
            dotsConnection[i].line4.lined === true
          ) {
            points()
          } else {
            turns()
          } //end of else
          usersDots.pop()
          usersDots.pop()
          return
        }
      }
    }
    //  else {
    //   usersDots.pop()
    //   usersDots.pop()
    //   return
    // }
  }
}

const turns = () => {
  if (turn === 1) {
    //if the box is not closing then we just change turn
    turn = 2
    playersTurn.innerHTML = `player ${turn}`
  } else if (turn === 2) {
    turn = 1
    playersTurn.innerHTML = `player ${turn}`
  }
}

const points = () => {
  if (turn === 1) {
    //will only add point but will note change the turn
    P1Points++
    POnePoints.innerHTML = P1Points
    playersTurn.innerHTML = `player ${turn}`
  } else if (turn === 2) {
    P2Points++
    PTwoPoints.innerHTML = P2Points
    playersTurn.innerHTML = `player ${turn}`
  }
}

const clickDot = (dot) => {
  //usersDots --> array of 2 for 2 dots
  //console.log("usersDots array: ", usersDots)
  if (usersDots.length < 2) {
    usersDots.push(dot)
    // console.log(dot) // print it 2 times...
  }
  if (usersDots.length === 2) {
    // console.log(dot)
    connectingDots(usersDots[0], usersDots[1])
  }
  if (usersDots.length > 2) {
    console.log("can not select more then 2")
  } //backTo0
}

// button.addEventListener("click", init)

const aEListener = () => {
  dots.forEach((dot) => {
    dot.addEventListener("click", () => clickDot(dot))
  })
}
button.addEventListener("click", init)
