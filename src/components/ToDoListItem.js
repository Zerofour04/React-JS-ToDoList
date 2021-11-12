import React from 'react';
import tick from './Tick'

const ToDoListItem = (props) => {
  return (
    <li>
      <input type="checkbox" onClick={ () => removeList(), tick(props.line.id) }/>
      { props.line.text }
    </li>
  )
}

function removeList(id) {
  console.log()
  console.log('Item wird entfernt', id)
  return
}

export default ToDoListItem;