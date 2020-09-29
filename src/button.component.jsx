// import React from 'react';

// export const Component = (props) => {
//   return (
//   <button className={`${props.state}`}>文字が変わる</button>
//   )
// }


<div 
  className='delete-button'
    onClick={() => {
       if (window.confirm('Are you sure you wish to delete this item?'))
        this.onCancel(item) 
    } } />