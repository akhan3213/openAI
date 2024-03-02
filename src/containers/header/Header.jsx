import React from 'react';
import './header.css';
import  people from '../../assets/people.png';
import ai from '../../assets/ai.png';


const Header = () => {
  return (
    <div className="gpt3_header section_padding" id="home">
      <div className="gpt3_header-content">
        <h1 className="gradient_text">Lets's Build Something amazing with GPT-3 OpenAI</h1>
        <p>Organizations that want to develop an advanced AI app solution might be surprised to learn that you don't need an army of app developera to build a world-class AI app.Instead,your business can build an AI-based app utilizing the AI capabilities developed by industry leader OpenAI.</p>
        <div className="gpt3_header-content_input">
          <input type="email" placeholder="your email address"/>
            <button type="button">Get Started</button>
        </div>
        <div className="gpt3_header-content_people">
          <img src={people}  alt="people"/>
          <p>1,600 people requested access a visit in last 24 hours</p>
        </div>
        </div>
        <div className="gpt3_header-image">
          <img src={ai} alt="ai"/>
        
      </div>
    </div>
  )
}

export default Header
