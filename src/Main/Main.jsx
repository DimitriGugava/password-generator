import "./Main.css";
import copied from "../icon/copied.svg";
import arrow from "../icon/arrow.svg";

const Main = () => {
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
              <p className="password_Generator_Number_Controle_Number">8</p>
            </div>
            <div className="password_Generator_Number_Controle">
              <div className="password_Generator_Number_Controle_Fill"></div>
              <div className="password_Generator_Number_Controle_Button"></div>
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
            <p className="password_Generator_Strength_Text">Strength</p>
            <div className="password_Generator_Strength_Indicator">
              MEDIUM
              <div className="password_Generator_Strength_Indicator_Fill"></div>
              <div className="password_Generator_Strength_Indicator_Fill"></div>
              <div className="password_Generator_Strength_Indicator_Fill"></div>
              <div className="password_Generator_Strength_Indicator_Fill"></div>
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
