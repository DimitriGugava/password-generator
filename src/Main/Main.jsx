import "./Main.css";
import copied from "../icon/copied.svg";
const Main = () => {
  return (
    <div className="Main">
      <h1 className="header_Text">Password Generator</h1>
      <div className="password_Generator_Container">
        <div className="passowrd_Generator_output">
          <p className="password_Generator_Text">Password</p>
          <img className="password_Generator_Copping" src={copied} />
        </div>

        <div className="password_Generator_Sub_Container"></div>
      </div>
    </div>
  );
};

export default Main;
