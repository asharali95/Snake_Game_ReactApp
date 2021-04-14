import React, { useState } from "react";
import "./Board.css";
import {createBoard, getDirectionFromKey,randomNumberFromInterval} from "../../utility"

class LinkedListNode{
    constructor(value) {
        this.value= value;
        this.next = null;
    }
}

class SinglyLinkedList{
    constructor(value){
        const node = new LinkedListNode(value);
        this.head = node;
        this.tail = node;
    }
}

export const BOARD_SIZE=10

const Board = () => {
    var [board, setBoard] = useState(createBoard(BOARD_SIZE))
    var [snakeCells, setSnakeCells] = useState(new Set([44]))
    var [foodCell, setFoodCell] = useState(48)
    var [snake , setSnake ] = useState(new SinglyLinkedList(44))
    var [direction, setDirection] = useState("RIGHT");

    window.addEventListener("keydown", (e) =>{
        var newDirection = getDirectionFromKey(e.key);
        console.log(newDirection);
        // if(newDirection!='') setDirection(newDirection);
    })
    // var moveSnake = () =>{
    //     const currentHeadCoords = {
    //         row: snake.head.value;
    //         col: snake.head.value;
    //     }
    // }
    const handleFoodConsumption = () =>{
        const possibleCellVal = BOARD_SIZE*BOARD_SIZE;
        let nextFoodCell;
        while(true){
          nextFoodCell = randomNumberFromInterval(1,possibleCellVal);
          if (snakeCells.has(nextFoodCell) || nextFoodCell === foodCell) continue; 
          break;
        }
        setFoodCell(nextFoodCell)
      }


  return (
  <div className="board">
   {board.map((row , rowIndex) =>(
       <div key = {rowIndex} className="row">
           {row.map((cellValue , cellIndex) =>(
               <div key={cellIndex} className={`cell ${snakeCells.has(cellValue) ? 'snake-cell':''}`}></div>
           ))}
       </div>
   ))}   
  </div>
  )

};

export default Board;
