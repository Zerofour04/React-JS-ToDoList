import React, {useState} from 'react';

const Input = (props) => {

  const [userInput, setUserInput] = useState('');

  const addElement = () => {
    console.log('Input: ', userInput);
    alert('Du hast 1 Objekt hinzugefügt');
    if (userInput === '') {
      console.log('ERROR NO INPUT')
      alert('Du muss einen Text hineinschreiben')
      return;
    }
    const userInputTest = {
      text: userInput,
      id: randomNumGenerator(),
      isChecked: false,
    }
    setUserInput('',);
  }

  function randomNumGenerator(){
    const randomNum = Math.random() * 100000;
    const newNumber = Math.floor(randomNum);
    console.log('ID', randomNum);
    console.log('floored', newNumber);
    return newNumber;
  }

  return(
    <div>
      <h2 className="ToDo">Tasks:</h2>
      <textarea style={ { resize: 'none' }} className="ToDoText" rows="1" cols="60" value={ props.userInput }
                onChange={ (event) => setUserInput(event.target.value) }
                placeholder="Write ToDo!" />
      <button className="button" onClick={ () => props.addToDo(userInput) }>Add</button>
        <br></br>
    </div>
  )

}
export default Input;