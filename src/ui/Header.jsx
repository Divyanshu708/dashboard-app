import logo from "../assets/logo.svg";
import Button from "./Button";
import DropDown from "./DropDown";
import LoginIcon from "./LoginIcon";
import documentationIcon from "../assets/documentationIcon.svg";
import worldIcon from "../assets/worldIcon.svg";
import loginIcon from "../assets/loginIcon.png";

export default function Header() {
  return (
    <div className="headerBar">
      <div className="div1">
        <img src={logo} alt="Logo" />
      </div>
      <div className="div2">
        <Button icon={documentationIcon}>DOCUMENTATION</Button>
        <DropDown icon={worldIcon} />
        <LoginIcon icon={loginIcon} />
      </div>
    </div>
  );
}
