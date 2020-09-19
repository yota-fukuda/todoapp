import React,{ useState } from "react";

const Item = ({ content }) => {
  const [isDone, setIsDone] = useState(false);

  return(
  <li>
    <input 
      type="checkbox"
      onChange= {
        () => {
          setIsDone(!isDone)
        }
      }
    />
    <span style={{
      textDecoration: isDone ? 'line-through' :'none'
    }}>{content}</span>
  </li>
  )
};

export default Item;


// const array = ['apple', 'banana']
// const [fruit1, fruit2] = array

// const user = {name: 'Fukuda', from: 'Japan'}
// const {name, from} = user

// console.log(name, from)

// const intro = ({ name, from}) => {
//   return `I'm ${name} from ${from}`
// }

// intro(user)