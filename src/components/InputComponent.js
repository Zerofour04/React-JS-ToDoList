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
  const [userInput, setUserInput] = useState('');
  const [todoList, setTodoList] = useState([randomObj, randomObj1, randomObj2])
  const addElement = (event) => {
    console.log('Input: ', userInput);
    console.log('List refreshed: ', todoList);
    alert('1 new task was added');
    if (userInput === '') {
      console.log('ERROR NO INPUT')
      alert('No text = No input :/')
      return;
    }
    const userInputTest = {
      text: userInput,
      id: randomNumGenerator(),
      isChecked: false,
    }
    setTodoList([...todoList, userInputTest]);
    setUserInput('',);
  }

  function checkedChange(getID) {
    console.log('state changed | clicked');
    const todo = { ...todoList.find(todoItem => todoItem.id === getID) };

    let todoListCopy = [...todoList];

    const clickedIndex = todoList.findIndex(todoItem => todoItem.id === getID)
    console.log('ID change:', clickedIndex)

    todo.isChecked = !todo.isChecked;

    todoListCopy[clickedIndex] =todo;
    console.log("complete", todo)
    console.log("isChecked complete", todo.isChecked)


    console.log(todoListCopy)
    setTodoList(todoListCopy)
  }

  function handleEditing(IDSnipping, editText) {
    const todo = { ...todoList.find(todoItem => todoItem.id === IDSnipping) };
    let toDoListCopy = [...todoList]
    const snipping = todoList.findIndex(todoItem => todoItem.id === IDSnipping)
    console.log('Index', snipping)

    todo.text = editText
    toDoListCopy[snipping] = todo;
    console.log('todo', todo)
    console.log("New text", editText)
    setTodoList(toDoListCopy)
  }

  function deleteConsole(delItem){
    const trash = todoList.findIndex(todoItem => todoItem.id === delItem)
    console.log(todoList);
    todoList.splice(trash,1)
    console.log(todoList);
    setTodoList([...todoList])
    console.log('Item deleted', delItem, '0');
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
      <h2 className="ToDo">Tasks:</h2>
      <textarea style={ { resize: 'none' }} className="ToDoText" rows="1" cols="60" value={ userInput }
                onChange={ (event) => setUserInput(event.target.value) }
                placeholder="Write ToDo" />
      <button className="button" onClick={ addElement }>Add</button>
      <ToDoList items={todoList} todoChange={checkedChange}  del={deleteConsole} edit={handleEditing} />
      <br></br>
    </div>

  )
}
export default Input;