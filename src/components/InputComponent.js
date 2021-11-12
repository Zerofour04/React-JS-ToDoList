import React, { useState } from 'react';
import ToDoListe from './ToDoList'

const randomObj = {
  text: 'Item 1',
  id: 1,
  isChecked: false,
}
const randomObj1 = {
  text: 'Item 2',
  id: 2,
  isChecked: false,
}
const randomObj2 = {
  text: 'Item 3',
  id: 3,
  isChecked: false,
}

const Input = () => {
  const [userInput, setUserInput] = useState('');
  const [todoList, setTodoList]=useState([randomObj, randomObj1, randomObj2])

  const addElement = (event) => {
    event.preventDefault();
    console.log('Input: ', userInput);
    console.log('List refreshed: ', todoList);
    const userInputTest = {
      text: userInput,
      id: randomNumGenerator(),
    }
    setTodoList([...todoList, userInputTest]);
    setUserInput('',);
    randomNumGenerator();
  }

  function randomNumGenerator(){
    const randomNum = Math.random() * 100000;
    const newNumber = Math.floor(randomNum);
    console.log('ID', randomNum);
    console.log('floored', newNumber);
    return newNumber;
  }

  return (
    <div>
      {/*Textarea, Button und Console*/ }
      {/*{listItems}*/ }
      <h2 className="ToDo">Tasks:</h2>
      <textarea style={ { resize: 'none' }} className="ToDoText" rows="1" cols="60" value={ userInput }
                onChange={ (event) => setUserInput(event.target.value) }
                placeholder="Schreibe hier deine ToDo rein!" />
      <button className="button" onClick={ addElement }>Add</button>
      <ToDoListe items={todoList}/>
      <br></br>
    </div>
  )
}
export default Input;