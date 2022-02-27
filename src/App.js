
import './App.css';
import { useState } from 'react';
import Question1 from './question1';
import Question2 from './question2';

function App() {
  const [choice, setChoice] = useState(0)

  return (
    <>
      {choice === 0 &&
        <div className='App'>
          <h2>Please select the question to see the answer.</h2>
          <h3>For get back to this page, Please refresh the screen.</h3>
          <div>
            <button style={{ margin: '0 5px' }} type='button' onClick={() => setChoice(1)}>Question 1</button>
            <button style={{ margin: '0 5px' }} type='button' onClick={() => setChoice(2)}>Question 2</button>
          </div>
        </div>
      }
      {choice !== 0 &&
        <div style={{ width: 'inherit', height: '100%', display: 'flex' }}>
          {choice === 1 && <Question1 />}
          {choice === 2 && <Question2 />}
        </div>
      }
    </>
  );
}

export default App;
