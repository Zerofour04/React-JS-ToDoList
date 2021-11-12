import React from 'react';
import ToDoListItem from './ToDoListItem';

function ToDoList(props) {
  return (
    <>
    <ul>
      { props.list.map(entry => {
        return (
            <ToDoListItem key={ entry.id } line={entry} todoChange={props.todoChange} edit={props.edit} del={props.del}/>
        );
      })}
    </ul>
    </>

  )
}

export default ToDoList;