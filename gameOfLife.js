class GameOfLife {
    constructor(width, height) {
      this.width = width;
      this.height = height;
      this.board = this.makeBoard();
    }
  
    /**
     * Returns a 2D Array
     */
  
    makeBoard() {
      let boardWidth = new Array(this.width).fill(0)
      let board = new Array(this.height).fill(boardWidth)
      return board
    }

    neighbors() {
      
    }
  
  
    /**
     * Return the amount of living neighbors around a given coordinate.
     */
  
    livingNeighbors(row, col) {
      // TODO: Return the count of living neighbors.
    }
  
  
    /**
     * Given the present board, apply the rules to generate a new board
     */
    
    tick() {
      const newBoard = this.makeBoard();
      // TODO: Here is where you want to loop through all the cells
      // on the existing board and determine, based on it's neighbors,
      // whether the cell should be dead or alive in the new board 
      // (the next iteration of the game) 
      //
      // You need to:
      // 1. Count alive neighbors for all cells
      // 2. Set the next state of all cells in newBoard,
      // based on their current alive neighbors
      this.board = newBoard;
    }
  }
  
  const game = new GameOfLife(4,5)