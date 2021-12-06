import React, {useState, useEffect} from 'react';
import './App.css';
import Input from './components/InputComponent'
import Header from './components/Header'
import Clock from './components/TimeComponent'
import {BrowserRouter as Router, Route, Link} from 'react-router-dom';
import ToDoList from "./components/ToDoList";
import api from '../src/api/toDoListJSON';

const Liste = () => {
    return (
        <Liste/>
    )
}

function App() {
    const [todoList, setTodoList] = useState([])

    const retrieveToDo = async () => {
        const response = await api.get("/toDoJSON");
        return response.data;
    }

    const axios = require('axios');


    function checkedChange(getID) {
        console.log('Status geändert | clicked');
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
        console.log("Neuer Text", editText)
        setTodoList(toDoListCopy)

        axios.put(`http://localhost:3006/toDoJSON/${IDSnipping}`, {
            text: editText})
            .then(resp => {
                this.setState({toDoJSON: resp.data});
                this.props.history.push('/toDoJSON');
            })
            .catch(err => console.log(err));
    }

    function deleteConsole(delItem, trashJSON){
        const trash = todoList.findIndex(todoItem => todoItem.id === delItem)

        axios.delete(`http://localhost:3006/toDoJSON/${delItem}`)
            .then(resp => {
                console.log(resp.data)
            }).catch(error => {
            console.log(error);
        });

        console.log(todoList);
        todoList.splice(trash,1)
        console.log(todoList);
        setTodoList([...todoList])
        console.log('Item gelöscht', delItem, '0');
    }

    function randomNumGenerator(){
        const randomNum = Math.random() * 100000;
        const newNumber = Math.floor(randomNum);
        console.log('ID', randomNum);
        console.log('floored', newNumber);
        return newNumber;
    }

    function addToDo(userInput){
        if (userInput === '') {
            console.log('ERROR NO INPUT')
            alert('Du muss einen Text hineinschreiben')}
        else {
            const userInputTest = {
                text: userInput,
                id: randomNumGenerator(),
                isChecked: false,
            }
            setTodoList([...todoList, userInputTest]);
            console.log('Hier:', userInput)

            //JSON

            axios.post('http://localhost:3006/toDoJSON', {
                text: userInput,
                id: randomNumGenerator(),
                isChecked: false
            }).then(resp => {
                console.log(resp.data);
            }).catch(error => {
                console.log(error);
            });

            alert('Du hast 1 weitere ToDo hinzugefügt');
        }
    }

    //JSON
    useEffect(() => {
        const getAllToDosJSON = async () => {
            const allToDos = await retrieveToDo();
            if (allToDos) setTodoList(allToDos)
        };
        getAllToDosJSON()
    }, []);

    return (
        <div className="App">
            <Router>
                <Link to="/" className="top-button"role="button"><span className="text">Main Page</span><span>LOL rickroled</span></Link>
                <Link to="/input" className="top-button"role="button"><span className="text">Add ToDo</span><span>new Task</span></Link>
                <Link to="/todolist" className="top-button"role="button"><span className="text">ToDos</span><span>all ToDos</span></Link>
                <Link to="/clock" className="top-button"role="button"><span className="text">Clock</span><span>Your Time</span></Link>
                <Route path="/" exact>
                    <Header/>
                </Route>
                <Route path="/clock">
                    <Clock/>
                </Route>
                <Route path="/input">
                    <Input addToDo={addToDo}/>
                </Route>
                <Route path="/todolist">
                    <ToDoList list={ todoList } todoChange={checkedChange} edit={handleEditing} del={deleteConsole}/>
                </Route>
            </Router>
        </div>
    );
}

export default App;
