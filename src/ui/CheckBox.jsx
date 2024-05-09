import { useState } from "react";
import "../scss/index.scss";

export default function CheckBox({ color }) {
  const [checkboxId] = useState(
    `checkbox-${Math.floor(Math.random() * 10000)}`
  );

  const css = `
    .checkbox-wrapper-${checkboxId} {
      margin-top: -4px;
      scale: 80%;
    }

    .checkbox-wrapper-${checkboxId} .round {
      position: relative;
    }

    .checkbox-wrapper-${checkboxId} .round label {
      background-color: #fff;
      border: 1px solid #ccc;
      border-radius: 50%;
      cursor: pointer;
      height: 28px;
      width: 28px;
      display: block;
    }

    .checkbox-wrapper-${checkboxId} .round label:after {
      border: 2px solid #fff;
      border-top: none;
      border-right: none;
      content: "";
      height: 6px;
      left: 7px;
      opacity: 0;
      position: absolute;
      top: 8px;
      transform: rotate(-45deg);
      width: 12px;
    }

    .checkbox-wrapper-${checkboxId} .round input[type="checkbox"] {
      visibility: hidden;
      display: none;
      opacity: 0;
    }

    .checkbox-wrapper-${checkboxId} .round input[type="checkbox"]:checked + label {
      background-color: ${color};
      border-color: ${color};
    }

    .checkbox-wrapper-${checkboxId} .round input[type="checkbox"]:checked + label:after {
      opacity: 1;
    }`;

  return (
    <>
      <style>{css}</style>
      <div className={`checkbox-wrapper-${checkboxId}`}>
        <div className="round">
          <input type="checkbox" id={checkboxId} />
          <label htmlFor={checkboxId}></label>
        </div>
      </div>
    </>
  );
}
