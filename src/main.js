import './App.css';
import { Rockbutton , Paperbutton ,Scissorsbutton } from './buttons';
import React, { useState } from 'react';




export default function Main({setuserchoice}) {
    
    return (
    <div>

      <div className='game-button-wrapper game--section'>
        <div className='traingle'>
          <img src='../images/bg-triangle.svg'></img>
          <div onClick={()=>{setuserchoice('rock')}}>  <Rockbutton /></div>
          <div onClick={()=>{setuserchoice('paper')}}>  <Paperbutton /></div>
          <div onClick={()=>{setuserchoice('scissors')}}>  <Scissorsbutton /></div>
           
        </div>
      </div>
      
    </div>
  )
}