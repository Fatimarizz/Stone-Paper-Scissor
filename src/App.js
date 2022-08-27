import './App.css';

import React, { useState } from 'react';
import Main from './main';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import {useNavigate} from "react-router-dom"
import Nav from './navbar';
import Secondpage from './secondpage';


export default function App() {
  const [userChoice, setuserchoice] = useState(null);
  const [score, setscore] = useState(0);
  const [rules, setrules] = useState(false);
  const navigate = useNavigate();
  const Rules = () => {
    return (
      <div className="rules-overlay">
        <div className="overlay"></div>
        <div className="rules">
          <div className="rules-header">
            <h2>RULES</h2>
            <img className="close-icon" src="../images/icon-close.svg" alt="close" onClick={() => { setrules(false) }} />
          </div>
          <img className="rules-img" src="../images/image-rules.svg" alt="rules" />

        </div>
      </div>

    );
  }
  const reset = () => {
    
    setuserchoice('');
    
    setscore(0);
   
 };
  return (
    <div>
      {rules ? <Rules /> : null}
      <div className='main '>

        <Nav score={score} />
      </div>
      <Routes>
        <Route path='/'  element={<Main setuserchoice={setuserchoice}/>} />
        <Route path='/Second'  element={<Secondpage userChoice={userChoice} score={score} setscore={setscore} />} />
      </Routes>
      <div className='rulediv'>
        <button className="rules--button" onClick={() => { setrules(true) }}>
          RULES
        </button>
        <button onClick={() => { navigate('/');  reset()}} className='restart--button'>Restart</button>
      </div>
      
    </div>

  )
} 