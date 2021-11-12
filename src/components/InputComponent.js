import React, { useState } from 'react';
import ToDoList from './ToDoList';

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
  const [userInput, setUserInput] = useState(''); //
  const [todoList, setTodoList]=useState([randomObj, randomObj1, randomObj2])

  const addElement = (event) => {
    event.preventDefault();
    console.log('Input: ', userInput);
    console.log('List refreshed: ', todoList);
    if (userInput === '') {
      console.log('ERROR NO INPUT')
      alert('No text = No new task :/')
      return;
    }
    const userInputTest = {
      text: userInput,
      id: randomNumGenerator(),
    }
    setTodoList([...todoList, userInputTest]);
    setUserInput('',);
  }

 function checkedChange(getID){
    console.log('state changed');
    console.log('clicked')
    const todo = todoList.find(todoItem => todoItem.id === getID);
    console.log('this is the found todo: ', todo);

    const toggledTodo = {...todo, isChecked: !todo.isChecked}
    console.log('toggled Todo: ', toggledTodo)

    const filteredArray = todoList.filter(todoItem => todoItem.id !== getID);
    console.log('filtered Array: ', filteredArray)

    const updatedTodoList = [...filteredArray, toggledTodo];
    console.log('updated: ', updatedTodoList);

    setTodoList(updatedTodoList);
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
      <h2 className="ToDo">Aufgaben:</h2>
      <textarea style={ { resize: 'none' }} className="ToDoText" rows="1" cols="60" value={ userInput }
                onChange={ (event) => setUserInput(event.target.value) }
                placeholder="Write ToDo!" />
      <button className="button" onClick={ addElement }>Add</button>
      <ToDoList items={todoList} bananana={todoList[0].id} todoChange={checkedChange}/>
      <button onClick={checkedChange}>Everything done</button>
      <br></br>
    </div>
  )
}
export default Input;