import React, { useState } from 'react';

const Input = () => {
  const [userInput, setUserInput] = useState('');
  const [todoList, setTodoList]=useState(["Item1", "Item2", "Item3"])
  const addElement = (event) => {
    event.preventDefault();
    console.log('Input: ', userInput);
    console.log('List refreshed: ', todoList);
    setTodoList([...todoList, userInput]);
    setUserInput("");
  }

  return (
    <div>
      <h2 className="ToDo">To Do 1:</h2>
      <textarea className="ToDoText" rows="1" cols="60" value={ userInput }
                onChange={ (event) => setUserInput(event.target.value) }
                placeholder="Write ToDo!"></textarea>
      <button className="button" onClick={ addElement }>Hinzufügen</button>
      <ul>
        { todoList.map((entry,index) => {
          return (
            <li key={ index }>
              { entry }
            </li>
          );
        }) }
      </ul>

      <h3>Time: { new Date().toLocaleTimeString() }.</h3>
    </div>
  )
}



export default Input;