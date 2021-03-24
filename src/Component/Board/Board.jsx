import React, { useState } from "react";
import "./Board.css";
import {createBoard} from "../../utility"

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
    var [snake , setSnake ] = useState(new SinglyLinkedList(44))


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
