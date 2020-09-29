import React, { useState } from "react"
import Form from "./Form"
import List from "./List"

import shortid from 'shortid'

const App = () => {
    const [todos, setTodos] = useState([])

    const addTodo = value => {
       // * 追加処理
       const newTodos = [
        // 元のデータをここに配置
        ...todos,
        {
          content: value,
          id: shortid.generate()
        }
    ]
    setTodos(newTodos)
    }

    const deleteTodo = id => {
      //TODO: 渡されたidの要素を削除する処理を書く
      const deleteTodos = todos.filter(todo => todo.id !== id) //filterは配列に対して有効
      if (window.confirm('削除しますか？')){
        setTodos(deleteTodos)
      }
    }

  return (
    <>
      <h1>Todo App</h1>
      <Form addTodo={addTodo}/>
      <List deleteTodo={deleteTodo} todos={todos} />
    </>
  ) 
};

export default App;