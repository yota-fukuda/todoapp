import React, { useState } from "react";

const Form = ({ addTodo}) => {
  const [value, setValue] = useState('')

  const handleSubmit = e => {
      e.preventDefault() //デフォルトの挙動をキャンセル
      // 追加する処理を行う
      
      // フォームの値が空のとき、処理を中断してアラートを出す。
      if (!value) { //valueがturuの場合
        return alert('入力してください。');
      } 
      // * ここから追加処理
          addTodo(value)
        setValue('')
    }

  return (
    <form onSubmit={handleSubmit}>
      <input
        type="txet"
        onChange = {e => {
          setValue(e.target.value)
        }}
        value={value} //value要素にstateのvalueを追加
      />

    <button onClick = {handleSubmit}>追加</button>
    </form>
    )
};

export default Form;