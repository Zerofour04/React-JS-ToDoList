import React, {useState} from 'react';

const Input = (props) => {
    const [userInput, setUserInput] = useState('');

    function removeUserInput() {
      setUserInput('')
    }

    return(

    <div className="input">
        <p></p>
        <label className="card">
            <input className="input__field" type="text" placeholder="Write ToDo" value={ props.userInput }
                   onChange={ (event) => setUserInput(event.target.value) }/>
            <span className="input__label" onClick={ () =>  {props.addToDo(userInput); removeUserInput() }}>Add Item</span>
        </label>
    </div>
    )
}

export default Input;