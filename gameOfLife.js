/* eslint-disable no-trailing-spaces */
/* eslint-disable no-warning-comments */

class GameOfLife {
    constructor(width, height) {
      this.width = width;
      this.height = height;
      this.board = this.makeBoard();
    }

    makeBoard() {
      let boardWidth = new Array(this.width).fill(0)
      let finalBoard = new Array(this.height).fill(boardWidth)
      console.log(finalBoard)
      return finalBoard
    }

    iterator(func) {
      for (let rowIdx = 0; rowIdx < this.height; rowIdx++){
        for (let colIdx = 0; colIdx < this.width; colIdx++){
          func(rowIdx, colIdx)
        }
      }
    }

    randomizeBoard() {
      this.iterator((rowIdx, colIdx) => {
        this.board[rowIdx][colIdx] = Math.round(Math.random())
        // console.log('rowIdx', rowIdx, 'colIdx', colIdx)
        // console.log('value', this.board[rowIdx][colIdx])
      })
      // console.log('randomized', this.board)
    }

    clearBoard() {
      this.iterator((rowIdx, colIdx) => {
        this.board[rowIdx][colIdx] = 0  
      })
      // console.log('cleared', this.board)
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
