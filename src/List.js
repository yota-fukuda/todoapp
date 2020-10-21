import React from "react"
import Item from "./Item"

const List = ({ todos, deleteTodo, toggleIsDone }) => {
  return (
    <ul>
      {
        todos.map((todo) => {
          return(
            <Item
                content={todo.content}
                id={todo.id}
                key={todo.id}
                deleteTodo={deleteTodo}
                isDone={todo.isDone}
                toggleIsDone={toggleIsDone}
            />
          )
        })
      }
    </ul>
  )
}

export default List;