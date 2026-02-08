//caches variable

const section = document.querySelector("#div-section")
let dotsConnection
//input:
const row = document.querySelector("#row")
const column = document.querySelector("#column")
const button = document.querySelector("#numOfDots")

const dots = document.querySelectorAll(".dot")
//(player1 points & player2 points) ---->which will increase by 1 each time player close a box

//const updateArray = (row, column) => {
console.log(row.value * column.value)

//functions

//loop to create an array of winning cases
const init = (r = row.value, c = column.value) => {
  //recreating the array
  //length = row.value * column.value
  length = r * c
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
    console.log(4)
  } //for loop
  console.log(row.value * column.value) //-->0??? NaN???

  console.log("button clicked")
  //since it'll create the array every time it call init then no need to set it to false
  /*for (let i = 0; i < length; i++) {
    dotsConnection.i.line1.lined = false
    //console.log(dotsConnection.i.line1.lined)
  }*/
  for (let i = 0; i < length; i++) {
    //for loop to create the dots
    const newDiv = document.createElement("div")
    newDiv.innerHTML = `<div class='dot' id=${i}></div>`
    //console.log(newDiv)
    //console.log(newDiv.innerHTML)
    section.appendChild(newDiv)
    //document.body.appendChild(newDiv)
  }

  //update the css file
  let numOfRow = ""
  for (let i = 0; i < row.value; i++) {
    numOfRow = numOfRow + "1fr "
    console.log(numOfRow)
  }
  section.style.gridTemplateColumns = numOfRow
  console.log(`number of rows ${numOfRow}`)

  console.log(row.value * column.value)
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
//updateArray(row, column)
console.log(row.value)

//button.addEventListener("click", init(row.value, column.value))
