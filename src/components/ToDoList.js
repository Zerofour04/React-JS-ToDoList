import React from 'react';
import ToDoListItem from './ToDoListItem';

function ToDoListe(props) {
  return (
    <ul>
      { props.items.map((entry, index) => {
        return (
          <ToDoListItem line={entry}/>
        );
      })}
    </ul>
  )
}

export default ToDoListe;