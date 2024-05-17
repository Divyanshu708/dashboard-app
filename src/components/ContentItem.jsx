import edit from "../assets/contentIcons/edit.svg";
import eye from "../assets/contentIcons/eye.svg";
import del from "../assets/contentIcons/delete.svg";
import msg from "../assets/contentIcons/msg.svg";
import print from "../assets/contentIcons/print.svg";
import CheckBox from "../ui/CheckBox";

export default function ContentItem() {
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
          <img src={edit} className="img1" alt=""></img>
        </div>

        <div>
          <img src={eye} className="img1" alt=""></img>
        </div>

        <div>
          <img src={del} className="img1" alt=""></img>
        </div>

        <div>
          <img src={msg} className="img1" alt=""></img>
        </div>

        <div>
          <img src={print} className="img1" alt=""></img>
        </div>
      </div>
    </div>
  );
}
