import React from 'react';
import './App.scss';
import Tasbih from './Components/Tasbih/Tasbih';
import Zikr from './Components/Zikr/Zikr';
import langData from './Localization/data';

function App() {
  const [lang, setLang] = React.useState('uz')
  const [count, setCount] = React.useState(0)
  const [disabled, setDisabled] = React.useState(false)
  const [value, setValue] = React.useState(0)
  const [modal, setModal] = React.useState(false)
  const [theme, setTheme] = React.useState(false)
  const [block, setBlock] = React.useState(false)

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
    <div className='main-area'>
    <h1 className='main-heading'>
    {langData[lang].mainArea.heading}
    </h1>

    <select className='select-lang' onChange={(evt) => setLang(evt.target.value)} value={lang}>
      <option value="uz">
        UZ
      </option>

      <option value="ru">
        РУ
      </option>

      <option value="en">
        EN
      </option>
    </select>
    </div>
    
    <div className='tasbih-design'>
    <time className='tasbih-design__year'>
    {fullYear}
    </time>
    
    <time className='tasbih-design__time'>
    {fullTime}
    </time>
    </div>
    
    
    <button className='zikr-btn' onClick={() => {
      setModal(true)
    }}>
    Zikr
    </button>
    <Zikr modal={modal} setModal={setModal} lang={lang} setLang={setLang} theme={theme} setTheme={setTheme}/>
    
    <Tasbih count={count} setCount={setCount} disabled={disabled} setDisabled={setDisabled} value={value} setValue={setValue} lang={lang} theme={theme} setTheme={setTheme} block={block} setBlock={setBlock}/>
    </div>
    </>
    );
  }
  
  export default App;
  