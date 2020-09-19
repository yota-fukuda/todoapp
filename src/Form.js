import React, { useState } from "react";

const Form = ({ setTodos, todos }) => {
  const [value, setValue] = useState('')

  const handleSubmit = e => {
      // alert('空です')
      e.preventDefault() //デフォルトの挙動をキャンセル
      // 追加する処理を行う
      if(value === '') {
        alert('入力してください！')
      } else {
        const newTodos = [
            // 元のデータをここに配置
            ...todos,
            {
              content: value
            }
        ]
    
        setTodos(newTodos)           
      }

    }

    
  // 分割代入
  // const [count, setCount] = 
  // };
  return (
    <form onSubmit={handleSubmit}>
      <input
        id="input" 
        type="txet"
        onChange = {e => {
          setValue(e.target.value)
        }}
      ></input>
    </form>
    )
};

export default Form;

// todo
// ユーザーの入力を受け付ける。
// 入力値を状態として管理する。
// ユーザーの入力値を検証する。
// 入力の確定を受け付ける。