import React from "react"

const Square = (props) => {
  return (   
      <div id="grid">
        {props.board.map((value, index)=> {
          return (
            <div 
              className="square" key={index}
              onClick={() => {props.handleClick(index)}}
            >{value}
            </div>
          )
        })} 
      </div>             
  )
}
export default Square
