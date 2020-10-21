import React, { useState } from "react"
import Form from "./Form"
import List from "./List"

import shortid from 'shortid'
import { findAllByAltText } from "@testing-library/react"

const App = () => {
    const [todos, setTodos] = useState([])

    const addTodo = value => {
       // * 追加処理
       const newTodos = [
        // 元のデータをここに配置
        ...todos,
        {
          content: value,
          id: shortid.generate(),
          isDone: false
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

    const toggleIsDone = id =>{
      //特定のtodoオブジェクトのisDoneの値を切り替える処理
      // alert(id)
      // const found = todos.map(todo => todo.id === id)
      //   setTodos(found)
      //   console.log(found)
      const toggleIsDones = todos.map((todo) => {
        if (todo.id === id) {
          return {...todo,isDone:!todo.isDone}
        }else {
          return todo
        }
      })
      setTodos(toggleIsDones)
    }



  return (
    <>
      <h1>Todo App</h1>
      <Form addTodo={addTodo} />
      <List toggleIsDone={toggleIsDone} deleteTodo={deleteTodo} todos={todos} />
    </>
  ) 
};

export default App;