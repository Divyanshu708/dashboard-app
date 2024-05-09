import edit from "../assets/contentIcons/edit.svg";
import eye from "../assets/contentIcons/eye.svg";
import del from "../assets/contentIcons/delete.svg";
import msg from "../assets/contentIcons/msg.svg";
import print from "../assets/contentIcons/print.svg";
import CheckBox from "../ui/CheckBox";
import edit2 from "../assets/contentIcons/hoverIcon/edit2.svg";
import del2 from "../assets/contentIcons/hoverIcon/del1.svg";
import email2 from "../assets/contentIcons/hoverIcon/email3.svg";
import print2 from "../assets/contentIcons/hoverIcon/print4.svg";
import view2 from "../assets/contentIcons/hoverIcon/view5.svg";
import { useState } from "react";

export default function ContentItem() {
  // const [hover1, setHover1] = useState(false);


  return (
    <div className="contentItem">
      <div style={{ display: "flex" }} className="con1">
        <CheckBox color="#f87060" />

        <p>Ridhi Talbi</p>
      </div>

      <p>04/10/2021 ; 02:10 PM</p>
      <div style={{ display: "flex" }} className="con2">
        <p>ABC000006</p>
        <p>0661425689</p>
        <p style={{ color: "#3BB900" }}>Completed</p>
      </div>

      <div className="icons">
        <div>
          {/* {hover1 ? <img src={edit2} className="imgHover"></img> : ""} */}

          <img
            src={edit}
            className="img1"
            // onMouseEnter={() => setHover1(true)}
            // onMouseLeave={() => setHover1(false)}
          ></img>
        </div>

        <div>
          {/* <img
            src={view2}
            className="imgHover"
            style={{ position: "relative" }}
          ></img> */}
          <img
            src={eye}
            className="img1"
            // onMouseEnter={handleHover}
            // onMouseLeave={handleHover}
          ></img>
        </div>

        <div>
          {/* <img
            src={del2}
            onMouseEnter={setHover(true)}
            className="imgHover"
          //   style={{ position: "relative" }}
          ></img> */}
          <img src={del} className="img1"></img>
        </div>

        <div>
          {/* <img
            src={email2}
            onMouseEnter={setHover(true)}
            className="imgHover"
            style={{ position: "relative" }}
          ></img> */}
          <img src={msg} className="img1"></img>
        </div>

        <div>
          {/* <img
            src={print2}
            onMouseEnter={setHover(true)}
            className="imgHover"
            style={{ position: "relative" }}
          ></img> */}
          <img src={print} className="img1"></img>
        </div>
      </div>
    </div>
  );
}
