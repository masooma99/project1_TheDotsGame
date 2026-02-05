//caches variable

const section = document.querySelector(".section")
const dots = document.querySelectorAll(".dot")

//(player1 points & player2 points) ---->which will increase by 1 each time player close a box

//functions

//init function to recreate the dots and changed all lines to false

const init = () => {
  array.forEach((element) => {
    //loop to add more dots into html
  })
}

//a function that will see if the selected 2 dots are able to connect or not, if it can connect it will draw a line between the 2 dots and if the box is closed the player points will increase

const connectingDots = (B, C) => {
  /**
   * dotsConnection = {
   *  box1:[// I will only use the first 2 lines to comparedot the 2 dots that we will line them together
   *    line1:{
   *        position:[A,A+1]
   *        lined : false
   *      }
   *    line2:{
   *        position:[A,A+5]
   *        lined : false
   *      }
   *    line3:{
   *        position:[A,A+6]
   *        lined : false
   *      }
   *    line4:{
   *        position:[A+5,A+6]
   *        lined : false
   *      }
   *    ],
   *  box2:[],....
   * }
   */
  dotsConnection.forEach((dot, index) => {
    let poss = dot.box[index].position[index]
    if (B === poss) {
      if (C === B + 1) {
      } else if (C === B + 5) {
      } else {
      } // print not valied or does not do anything
    } else if (C === poss) {
      if (B === C + 1) {
      } else if (B === C + 5) {
      } else {
      } // print not valied or does not do anything
    } else {
    } // print not valied or does not do anything
  })
}
