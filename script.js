/* DECLARE VARIABLES - selectors, working values */
const board = document.getElementById("board");

/* DECLARE FUNCTIONS */

/* DECLARE EVENT HANDLERS */

/* DECLARE NAMESPACES */
const INIT = {
  createBoard: function() {
    for (let i = 1; i <= 16; i++) {
      const button = document.createElement("button");
      button.classList.add("sound-button");

      board.appendChild(button);
    }
  },
  declareEventHandlers: function() {
    const soundButtons = document.getElementsByClassName("sound-button");

    for (let i = 0; i < soundButtons.length; i++) {
      soundButtons[i].addEventListener("click", function() {
        this.classList.toggle("selected")
      });
    }
  }
}

/* SCRIPT */
INIT.createBoard();
INIT.declareEventHandlers();