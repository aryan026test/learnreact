import logo from './logo.svg';
import './App.css';
import Top from './components/Top.js';
import Bottom from './components/Bottom.js';
import Left from './components/Left.js';
import Right from './components/Right.js';
import Form from './components/Form.js';
import { useState } from 'react';

function App() {
  // const [x, setX] = useState(0);
  // const handleValueChange = ()=>{
  //   setX((prev)=>{
  //     return prev+1;
  //   });
  // }

  // const [y, setY] = useState(10);
  // const decreaseValue = ()=>{
  //   setY((prev)=>{
  //     if(prev>0){
  //       return prev-1;
  //     }
  //     return prev;
  //   })
  // }

  // let y = `My name is ${x}`;
  const [color, setColor] = useState(<Top />);
  const handleColorChange = ()=>{
    setColor("blue");
  }
  
  return (
    <div className='App'>
      {/* <h1>{y}</h1>
      <button onClick={decreaseValue}>click to decrease</button>
      <h1>{x}</h1>
      <button onClick={handleValueChange}>Click Me!</button> */}
      
      <Top color="hotpink"/>
      <div className='container'>
        <Left color="teal"/>
        <Bottom color="orange"/>
        <Right color="red"/>
      </div>
      <Form />
    </div>
  );
}

export default App;
