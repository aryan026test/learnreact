import logo from './logo.svg';
import './App.css';
import Top from './components/Top.js';
import Bottom from './components/Bottom.js';
import Left from './components/Left.js';
import Right from './components/Right.js';

function App() {
  return (
    <div className='App'>
      <Top color="hotpink"/>
      <div className='container'>
        <Left color="teal"/>
        <Bottom color="orange"/>
        <Right color="red"/>
      </div>
    </div>
  );
}

export default App;
