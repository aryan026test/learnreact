import './App.css';
import Form from './components/Form.js';
import Box from './components/Box.js';

function App() {
  const topInfo = {
    name: "Top",
    color: "hotpink",
    height: "100px",
    width: "98.5%",
    margin: "auto"
  }
  const leftInfo = {
    name: "Left",
    color: "teal",
    height: "570px",
    width: "13%",
  }

  const rightInfo = {
    name: "Right",
    color: "red",
    height: "570px",
    width: "13%",
  }
  const bottomInfo = {
    name: "Bottom",
    color: "orange",
    height: "570px",
    width: "70%",
  }
  return (
    <div className='App'>
      {/* <Top color="hotpink"/>
      <div className='container'>
        <Left color="teal"/>
        <Bottom color="orange"/>
        <Right color="red"/>
      </div> */}
      <Box info={topInfo} />
      <div className='container'>
        <Box info={leftInfo} />
        <Box info={bottomInfo} />
        <Box info={rightInfo} />
      </div>
      <Form />
    </div>
  );
}

export default App;
