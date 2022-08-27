import React from "react";

export default function Nav(props){
    return(
<div className="container">
    <div className="heading row">
        <div className="col-4">
        <img src="../images/logo.svg"></img>
        </div>
    
    <div className="score-container col-2">
        <label className="lable">SCORE</label>
        <p className="score">{props.score}</p>
    </div>
    </div>
   
</div>
    )
}