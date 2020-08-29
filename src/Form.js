import React, { useState} from "react";

const Form = () => {
  // 分割代入
  const [count, setCount] = useState(0);
  // const [状態(state)を変更する関数] = useState(初期値)
  console.log('描写されました')
  // 状態(state)とは
  // reactの中で管理する値
  // set関数を用いて状態(sst)が変わるたびに画面が最描写される
  // let count = 0;
  const addCount = () => {
    setCount(count + 1);
  };
  return (
  <>
  <h4>今の数字:{count}</h4>
  <button onClick={addCount}>count up</button>
  </>
  )
};

export default Form;

// todo
// ユーザーの入力を受け付ける。
// 入力値を状態として管理する。
// ユーザーの入力値を検証する。
// 入力の確定を受け付ける。