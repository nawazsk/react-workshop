import {useState} from 'react';
import {
  pancardValidation
} from './helpers/helpers';
import './App.css';

function App() {
  const [pancard, setPanCard] = useState('');

  // console.log(pancardValidation('ABCDE1234F'));
  const validatePancard = (e) => {
    e.preventDefault();
    if(pancardValidation(pancard)) {
      alert(`${pancard} is a valid PAN Number`)
    } else {
      alert('Please enter valid PAN');
    }
    
  }
  return (
    <div className="App">
      <h1>React Workshop</h1>
      <hr/>
      <h2>Pancard Validation Test</h2>
      <form onSubmit={validatePancard}>
          <input className="textInput" placeholder="enter PAN and press enter" type="text" value={pancard} onChange={(e) => setPanCard(e.target.value)}/>
      </form>
    </div>
  );
}

export default App;
