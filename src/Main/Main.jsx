import "./Main.css";
import copied from "../icon/copied.svg";
import arrow from "../icon/arrow.svg";
import React, { useState, useEffect } from "react";

const Main = () => {
  const [volume, setVolume] = useState(1);
  const [strengthText, setStrengthText] = useState("Very Weak");
  const [fillCount, setFillCount] = useState(1);
  const [password, setPassword] = useState("");
  const [uppercase, setUppercase] = useState(false);
  const [lowercase, setLowercase] = useState(false);
  const [numbers, setNumbers] = useState(false);
  const [symbols, setSymbols] = useState(false);

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

  const generatePassword = () => {
    let passwordCharacters = "";
    const upperLetters = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
    const lowerLetters = "abcdefghijklmnopqrstuvwxyz";
    const numbersList = "0123456789";
    const symbolsList = "!@#$%^&*()-_=+[]{}|;:,.<>?/";

    if (uppercase) {
      passwordCharacters += upperLetters;
    }
    if (lowercase) {
      passwordCharacters += lowerLetters;
    }
    if (numbers) {
      passwordCharacters += numbersList;
    }
    if (symbols) {
      passwordCharacters += symbolsList;
    }

    let generatedPassword = "";
    for (let i = 0; i < volume; i++) {
      generatedPassword += passwordCharacters.charAt(
        Math.floor(Math.random() * passwordCharacters.length)
      );
    }

    setPassword(generatedPassword);
  };

  const copyToClipboard = () => {
    if (!password) return;

    const textarea = document.createElement("textarea");
    textarea.value = password;
    document.body.appendChild(textarea);
    textarea.select();
    document.execCommand("copy");
    document.body.removeChild(textarea);
  };

  return (
    <div className="Main">
      <h1 className="header_Text">Password Generator</h1>
      <div className="password_Generator_Container">
        <div className="passowrd_Generator_output">
          <a className="password_Generator_Text">{password || "Password"}</a>
          <img
            className="password_Generator_Copping"
            src={copied}
            onClick={copyToClipboard}
          />
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
              <input
                type="checkbox"
                className="password_Generator_Checkbox"
                onChange={(e) => setUppercase(e.target.checked)}
              />
              <a className="password_Generator_Charasteristics_Text">
                Include Uppercase Letters
              </a>
            </div>
            <div className="password_Generator_Charasteristics">
              <input
                type="checkbox"
                className="password_Generator_Checkbox"
                onChange={(e) => setLowercase(e.target.checked)}
              />
              <a className="password_Generator_Charasteristics_Text">
                Include Lowercase Letters
              </a>
            </div>
            <div className="password_Generator_Charasteristics">
              <input
                type="checkbox"
                className="password_Generator_Checkbox"
                onChange={(e) => setNumbers(e.target.checked)}
              />
              <a className="password_Generator_Charasteristics_Text">
                Include Numbers
              </a>
            </div>
            <div className="password_Generator_Charasteristics">
              <input
                type="checkbox"
                className="password_Generator_Checkbox"
                onChange={(e) => setSymbols(e.target.checked)}
              />
              <a className="password_Generator_Charasteristics_Text">
                Include Symbols
              </a>
            </div>
          </div>
          <div className="password_Generator_Strength_Box">
            <p className="password_Generator_Strength_Text">{strengthText}</p>
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
          <button
            className="password_Generator_Generate_Box"
            onClick={generatePassword}
          >
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
