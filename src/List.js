import React from "react"
import Item from "./Item"

const List = ({ todos, deleteTodo }) => {
  return (
    <ul>
      {/* <Item content={todo[0].content} />
      <Item content={todo[1].content} />
      <Item content={todo[2].content} />
      <Item content={todo[3].content} /> */}
      {
        todos.map((todo) => {
          return(
            <Item
                content={todo.content}
                id={todo.id}
                key={todo.id}
                deleteTodo={deleteTodo}
            />
          )
        })
      }
    </ul>
  )
}

export default List;