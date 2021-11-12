import React, { useState } from 'react';

function ToDoListItem(props) {

  const [isEditMode, setIsEditMode] = useState(false);
  const [editText, setEditText] = useState(props.line.text)

  return (
    <li>
      <input type="checkbox"
             onClick={ () => props.todoChange(props.line.id) }
      />

      {isEditMode ?
        <input value={editText}
               onChange={ (event) => setEditText(event.target.value) }/>
        : <span className={props.line.isChecked ? 'active' : 'OOF'}>{props.line.text}</span>
      }

      <button className="speichern" onClick={ () => {
        setIsEditMode(false);
        props.edit(props.line.id, editText)
        }
      }
      >Save</button>

      <button
        className="editButton"
        onClick={ () => setIsEditMode(true) }>
        Edit
        </button>

        <button
        className="deleteButton"
        onClick={ () => props.del(props.line.id) }>
        Delete
        </button>
        </li>
        )
      }


      export default ToDoListItem;