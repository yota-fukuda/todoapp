import React from "react"
import Item from "./Item"

const List = ({ todos }) => {
  return (
    <ul>
      {/* <Item content={todo[0].content} />
      <Item content={todo[1].content} />
      <Item content={todo[2].content} />
      <Item content={todo[3].content} /> */}
      {
        todos.map(( todo, index) => {
          return(
            <Item content={todo.content} key={index} />
          )

        })
      }
    </ul>
  )
}

export default List;