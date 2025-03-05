import React from "react";
import "./Main.css";
import { assets } from "../assets/assets.js";
const Main = () => {
  return (
    <div className="main">
      <div className="nav">
        <p>GPT-clone</p>
        <img src={assets.user_icon} alt="" />
      </div>
      <div className="main-container">
        <div className="greet">
          <p>
            <span>Hello abcd</span>
          </p>
          <p>How can I Help You? </p>
        </div>
        <div className="cards">
          <div className="card">
            <p>Suggest beautiful places for up coming road trip</p>
            <img src={assets.compass_icon} alt="" />
          </div>
          <div className="card">
            <p>Breafly Summasize this concept : urban planning</p>
            <img src={assets.bulb_icon} alt="" />
          </div>
          <div className="card">
            <p>Brainstorm team bonding activites for our work</p>
            <img src={assets.message_icon} alt="" />
          </div>
          <div className="card">
            <p>Improve the readablity for the following code</p>
            <img src={assets.code_icon} alt="" />
          </div>
        </div>
        <div className="main-bottom">
          <div className="search-box">
            <input type="text" placeholder="Enter your query here..." />
            <div>
              <img src={assets.gallery_icon} alt="" />
              <img src={assets.mic_icon} alt="" />
              <img src={assets.send_icon} alt="" />
            </div>
          </div>
          <p className="bottom-info">
            This gpt may dispaly inacurate info including about people so double
            check before useing
          </p>
        </div>
      </div>
    </div>
  );
};

export default Main;
