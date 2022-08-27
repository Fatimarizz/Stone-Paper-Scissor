import './App.css';
import React, { useEffect } from 'react';
import { useNavigate } from "react-router-dom"

export const Rockbutton = () => {
    
    const navigate = useNavigate();
    return (
        <div onClick={() => { navigate('/Second');   }}   className='game-button rock-section'>
            <div className='icon-bg rock'>
                <img src='../images/icon-rock.svg' ></img>
            </div>
        </div>
    )
}
export const Paperbutton = () => {
    const navigate = useNavigate();
    return (
        <div onClick={() => { navigate('/Second')}}
       className='game-button paper-section'>
            <div className='icon-bg paper'>
                <img src='../images/icon-paper.svg'></img>
            </div>
        </div>
    )
}
export const Scissorsbutton = () => {
    const navigate = useNavigate();
    return (
        <div  onClick={() => { navigate('/Second') }}  className='game-button scissors-section'>
            <div className=' icon-bg scissors'>
                <img src='../images/icon-scissors.svg' ></img>
            </div>
        </div>
    )
}
