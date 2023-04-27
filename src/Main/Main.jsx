import "./Main.css";
import copied from "../icon/copied.svg";
import arrow from "../icon/arrow.svg";
import React, { useState, useEffect } from "react";

const Main = () => {
  const [volume, setVolume] = useState(1);
  const [strengthText, setStrengthText] = useState("Very Weak");
  const [fillCount, setFillCount] = useState(1);

  useEffect(() => {
    handleStrengthChange();
  }, [volume]);

  const handleVolumeChange = (e) => {
    setVolume(e.target.value);
  };

  const handleStrengthChange = () => {
    if (volume >= 1 && volume < 6) {
      setStrengthText("Very Weak");
      setFillCount(1);
    } else if (volume >= 6 && volume < 11) {
      setStrengthText("Weak");
      setFillCount(2);
    } else if (volume >= 11 && volume < 16) {
      setStrengthText("Medium");
      setFillCount(3);
    } else if (volume >= 16 && volume <= 21) {
      setStrengthText("Strong");
      setFillCount(4);
    }
  };

  return (
    <div className="Main">
      <h1 className="header_Text">Password Generator</h1>
      <div className="password_Generator_Container">
        <div className="passowrd_Generator_output">
          <p className="password_Generator_Text">Password</p>
          <img className="password_Generator_Copping" src={copied} />
        </div>

        <div className="password_Generator_Sub_Container">
          <div className="password_Generator_Number_Controle_Box">
            <div className="password_Generator_Number_Indicator__Text_box">
              <p className="password_Generator_Number_Controle_Text">
                Number of Characters
              </p>
              <p className="password_Generator_Number_Controle_Number">
                {volume}
              </p>
            </div>
            <div className="password_Generator_Number_Controle">
              <input
                type="range"
                className="password_Generator_Number_Controle_Slider"
                min="1"
                max="21"
                step="1"
                value={volume}
                onChange={handleVolumeChange}
              />
              <div
                className="password_Generator_Number_Controle_Fill"
                style={{ width: `${(volume * 311) / 21}px` }}
              ></div>
            </div>
          </div>
          <div className="password_Generator_Charasteristics_Box">
            <div className="password_Generator_Charasteristics">
              <input type="checkbox" className="password_Generator_Checkbox" />
              <a className="password_Generator_Charasteristics_Text">
                Include Uppercase Letters
              </a>
            </div>
            <div className="password_Generator_Charasteristics">
              <input type="checkbox" className="password_Generator_Checkbox" />
              <a className="password_Generator_Charasteristics_Text">
                Include Lowercase Letters
              </a>
            </div>
            <div className="password_Generator_Charasteristics">
              <input type="checkbox" className="password_Generator_Checkbox" />
              <a className="password_Generator_Charasteristics_Text">
                Include Numbers
              </a>
            </div>
            <div className="password_Generator_Charasteristics">
              <input type="checkbox" className="password_Generator_Checkbox" />
              <a className="password_Generator_Charasteristics_Text">
                Include Symbols
              </a>
            </div>
          </div>
          <div className="password_Generator_Strength_Box">
            <p className="password_Generator_Strength_Text">
              Strength: {strengthText}
            </p>
            <div className="password_Generator_Strength_Indicator">
              <div
                className={`password_Generator_Strength_Indicator_Fill ${
                  fillCount > 0 ? "fill-yellow" : ""
                }`}
              ></div>
              <div
                className={`password_Generator_Strength_Indicator_Fill ${
                  fillCount > 1 ? "fill-yellow" : ""
                }`}
              ></div>
              <div
                className={`password_Generator_Strength_Indicator_Fill ${
                  fillCount > 2 ? "fill-yellow" : ""
                }`}
              ></div>
              <div
                className={`password_Generator_Strength_Indicator_Fill ${
                  fillCount > 3 ? "fill-yellow" : ""
                }`}
              ></div>
            </div>
          </div>
          <button className="password_Generator_Generate_Box">
            <p className="password_Generator_Generate_Box_Text">
              Generate
              <img src={arrow} className="arrow" />
            </p>
          </button>
        </div>
      </div>
    </div>
  );
};

export default Main;
