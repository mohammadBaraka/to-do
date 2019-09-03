import React from 'react';
import './TodoItem.css';
const TodoItems = (props) => {
  const { items, deleteItem } = props;
  let length = items.length;
  
  const listItems = length ? (
     items.map(item => {
       return (
         <div key={item.id}>
           <span className="name"> {item.name} </span>
           <span className="age"> {item.age} </span>
           <button className="action icon" onClick={() => deleteItem(item.id)}> Delete </button>
          
         </div>
       );
  }) 
  ) : (
      <p>There Is Not Item To Show</p>
  )
  return (
    <div className="ListItems">
      <div>
        <span className="name title">Name</span>
        <span className="age title">Age</span>
        {/* <span className="action title">Action</span> */}
      </div>
      {listItems}
    </div>
  );
 
}


export default TodoItems;;