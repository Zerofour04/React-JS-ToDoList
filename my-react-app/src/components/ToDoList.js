import React from 'react';
import ToDoListItem from './ToDoListItem';

function ToDoList(props) {
  return (
    <>
      <div style={{display: 'flex', 'align-items': 'center', 'justify-content': 'center'}}>
        <ul className='card'>
          { props.list.map(entry => {
            return (
                <ToDoListItem key={ entry.id } line={entry} todoChange={props.todoChange} edit={props.edit} del={props.del}/>
            );
          })}
        </ul>
      </div>
    </>
  )
}

export default ToDoList;