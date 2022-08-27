import "./App.css";
import "./secondpage.css";
import { useNavigate } from "react-router-dom";

import React, { useState, useEffect } from "react";

export default function Secondpage({ score, setscore, userChoice }) {
  const [computerChoice, setcomputerchoice] = useState(null);
  const [result, setresult] = useState(null);

  const choices = ["rock", "paper", "scissors"];
  const navigate = useNavigate();

  useEffect(() => {
    Resultfun();
    handleClick();
  }, [userChoice, computerChoice]);

  const handleClick = () => {
    handleComputerchoice();
    Resultfun();
  };

  const handleComputerchoice = () => {
    const randomNumber = Math.floor(Math.random() * choices.length);

    setcomputerchoice(choices[randomNumber]);
  };

  const Placeholder = () => {
    return <div className="placeholder"></div>;
  };

  const Resultfun = () => {
    switch (userChoice + computerChoice) {
      case "scissorspaper":
      case "rockscissors":
      case "paperrock":
        setresult("You Win");
        setscore(score + 1);
    }
    switch (userChoice + computerChoice) {
      case "paperscissors":
      case "scissorsrock":
      case "rockpaper":
        setresult("You Lose");
        setscore(score - 1);
    }
    switch (userChoice + computerChoice) {
      case "paperpaper":
      case "rockrock":
      case "scissorsscissors":
        setresult(" Draw!");
        setscore(score);
    }
  };
  const RockButton = () => {
    return (
      <div className="game-button rock-section">
        <div className="icon-bg rock">
          <img src="../images/icon-rock.svg"></img>
        </div>
      </div>
    );
  };
  const PaperButton = () => {
    return (
      <div className="game-button paper-section">
        <div className="icon-bg paper">
          <img src="../images/icon-paper.svg"></img>
        </div>
      </div>
    );
  };
  const ScissorsButton = () => {
    return (
      <div className="game-button scissors-section">
        <div className=" icon-bg scissors">
          <img
            src="../images/icon-scissors.svg"
            className="rgba-white-strong"
          ></img>
        </div>
      </div>
    );
  };
  return (
    <div className="Game--play">
      <div className="game-play-main">
        <div className="">
          <h2 className="text-white">YOU PICKED</h2>
          <div className="">
            {userChoice === "rock" ? <RockButton /> : null}
            {userChoice === "paper" ? <PaperButton /> : null}
            {userChoice === "scissors" ? <ScissorsButton /> : null}
            {userChoice === "" ? <Placeholder /> : null}
          </div>
        </div>
        <div className="result ">
          <h1 className="text-white text-center"> {result}</h1>
          <button
            onClick={() => {
              navigate("/");
            }}
            className="playagain"
          >
            Play again
          </button>
        </div>
        <div className="computer--choice ">
          <h2 className="text-white"> HOUSE PICKED</h2>
          <div className="house">
            {computerChoice === "rock" ? <RockButton /> : null}
            {computerChoice === "paper" ? <PaperButton /> : null}
            {computerChoice === "scissors" ? <ScissorsButton /> : null}
            {userChoice === "" ? <Placeholder /> : null}
          </div>
        </div>
      </div>
    </div>
  );
}
