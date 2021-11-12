import React from 'react';

function ToDoListItem(props){

  return (
    <li>
      <input type="checkbox" id="todo" name="todo" value="todo"
             onClick={ () => props.todoChange(props.line.id)}
      />
      <span className={ props.line.isChecked ? "active" : "" }>
        { props.line.text }
      </span>
    </li>
  )
}

export default ToDoListItem;