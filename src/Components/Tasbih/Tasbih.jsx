import React from "react";
import './Tasbih.scss';
import langData from '../../Localization/data';

function Tasbih({count, setCount, disabled, setDisabled, value, setValue, lang, theme, setTheme}) {
    
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
    
    <span className={`tasbih__display ${theme ? 'tasbih__display--dark' : null}`}>
    {count}
    </span>
    
    <div className="tasbih__all-btns">
    <ul className="tasbih__btns-list">
    <li className={`tasbih__btns-item ${theme ? 'tasbih__btns-item--dark' : null}`}>
    {langData[lang].tasbihBtns.return}
    <button className={`tasbih__btns-btn ${theme ? 'tasbih__btns-btn--dark' : null}`} onClick={() => {
        if(count>0){
            setCount(count - 1)
        }
    }} disabled={disabled}>
    
    </button>
    </li>
    
    <li className={`tasbih__btns-item ${theme ? 'tasbih__btns-item--dark' : null}`}>
    {langData[lang].tasbihBtns.lock}
    <button className={`tasbih__btns-btn ${theme ? 'tasbih__btns-btn--dark' : null}`} onClick={(evt) => setDisabled(!disabled)}>
    
    </button>
    </li>
    
    <li className={`tasbih__btns-item ${theme ? 'tasbih__btns-item--dark' : null}`}>
    {langData[lang].tasbihBtns.theme}
    <button className={`tasbih__btns-btn ${theme ? 'tasbih__btns-btn--dark' : null}`} onClick={() => setTheme(!theme)}>
    
    </button>
    </li>
    
    <li className={`tasbih__btns-item ${theme ? 'tasbih__btns-item--dark' : null}`}>
    {langData[lang].tasbihBtns.reset}
    <button className={`tasbih__btns-btn ${theme ? 'tasbih__btns-btn--dark' : null}`} onClick={() => setCount(0)} disabled={disabled}>
    
    </button>
    </li>
    </ul>
    
    <button  className={`tasbih__all-btn ${theme ? 'tasbih__all-btn--dark' : null}`} onClick={() => setCount(count + 1)} disabled={disabled}>
    {langData[lang].tasbihBtns.count}
    </button>

    <a className="author-link" href="https://t.me/h_kobulov">
        Hikmatulloh ibn Hamidulloh
    </a>
    </div>
    </div>
    </>
    )
}

export default Tasbih;