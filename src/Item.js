import React from "react";

const Item = ({ toggleIsDone, isDone, content, id , deleteTodo}) => {
  // const [isDone, setIsDone] = useState(false);

  const handleDelete = () => {
    // todosからtodoを削除する処理
    deleteTodo(id)
  }

  const handleToggle = () => {
    toggleIsDone(id)
  }

  return(
      <li style={{
      listStyle: 'none'
    }}>
        <input 
          type="checkbox"
          onChange= {handleToggle}
        />
        <span style={{
          textDecoration: isDone ? 'line-through' :'none'
        }}>{content}</span>

        <button onClick = {handleDelete}>削除</button>
      </li>
  )
};

export default Item;


