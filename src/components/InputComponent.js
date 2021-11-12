import React, {useState} from 'react';

const Input = (props) => {

    const [userInput, setUserInput] = useState('');

    function removeUserInput() {
      setUserInput('')
    }

    return(
        <div>
            <h2 className="ToDo">Taks:</h2>
            <textarea style={ { resize: 'none' }} className="ToDoText" rows="1" cols="60" value={ props.userInput }
                      onChange={ (event) => setUserInput(event.target.value) }
                      placeholder="Write ToDo!" />
            <button className="button" onClick={ () =>  {props.addToDo(userInput); removeUserInput() }}>Add</button>
            <br></br>
        </div>
    )
}

export default Input;