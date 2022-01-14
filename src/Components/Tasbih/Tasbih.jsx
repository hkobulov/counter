import React from "react";
import './Tasbih.scss'

function Tasbih({count, setCount, disabled, setDisabled, value, setValue}) {
    
    return (
        <>
        <div className="tasbih">
        {/* <ul className="tasbih__max">
        <li className="tasbih__double-three">
        <button className="tasbih__double-three-btn">
        33
        </button>
        </li>
        
        <li className="tasbih__double-nine">
        <button className="tasbih__double-nine-btn">
        99
        </button>
        </li>
        
        <li className="tasbih__infinity">
        <button className="tasbih__infinity-btn">
        Infinity
        </button>
        </li>
    </ul> */}
    
    <span className="tasbih__display">
    {count}
    </span>
    
    <div className="tasbih__all-btns">
    <ul className="tasbih__btns-list">
    <li className="tasbih__btns-item">
    Return
    <button className="tasbih__btns-btn" onClick={() => {
        if(count>0){
            setCount(count - 1)
        }
    }} disabled={disabled}>
    ↩️
    </button>
    </li>
    
    <li className="tasbih__btns-item">
    Lock
    <button className="tasbih__btns-btn" onClick={(evt) => setDisabled(!disabled)}>
    🔒
    </button>
    </li>
    
    <li className="tasbih__btns-item">
        Theme
    <button className="tasbih__btns-btn">
    💎
    </button>
    </li>
    
    <li className="tasbih__btns-item">
        Reset
    <button className="tasbih__btns-btn" onClick={() => setCount(0)} disabled={disabled}>
    ⏹️
    </button>
    </li>
    </ul>
    
    <button  className="tasbih__all-btn" onClick={() => setCount(count + 1)} disabled={disabled}>
    Count
    </button>

    <a className="author-link" href="https://t.me/h_kobulov">
        Hikmatulloh
    </a>
    </div>
    </div>
    </>
    )
}

export default Tasbih;