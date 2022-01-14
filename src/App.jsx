import React from 'react';
import './App.scss';
import Tasbih from './Components/Tasbih/Tasbih';
import Zikr from './Components/Zikr/Zikr';

function App() {
  const [count, setCount] = React.useState(0)
  const [disabled, setDisabled] = React.useState(false)
  const [value, setValue] = React.useState(0)
  const [modal, setModal] = React.useState(false)

  function data() {
    let data = new Date();

    let fullYear = data.toLocaleDateString();
    let fullTime = data.toLocaleTimeString();

    return {fullYear, fullTime}
  }
  const {fullYear, fullTime} = data()


  return (
    <>
    <div className='container'>
    <h1 className='main-heading'>
      Counter
    </h1>

    <div className='tasbih-design'>
      <time className='tasbih-design__year'>
        {fullYear}
      </time>

      <time className='tasbih-design__time'>
        {fullTime}
      </time>
    </div>

    <span>

    </span>

    <button className='zikr-btn' onClick={() => {
      setModal(true)
    }}>
      Zikr
    </button>
    <Zikr modal={modal} setModal={setModal}/>
    
    <Tasbih count={count} setCount={setCount} disabled={disabled} setDisabled={setDisabled} value={value} setValue={setValue}/>
    </div>
    </>
    );
  }
  
  export default App;
  