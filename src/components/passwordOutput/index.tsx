import React, { FC } from "react";

import  copyIcon  from "../../icons/copy.svg";
import "./styles.css";

interface IProps {
  passwordValue: number | string;
}

const PasswordOutput: FC<IProps> = ({ passwordValue }) => {
  return (
    <div
      className="container"
    >
      <h1>Password Generator</h1>
      <div className="parent">
        <input
          className="output"
          value={passwordValue}
          readOnly
        />
        <img src={copyIcon} alt="copy" />
      </div>
    </div>
  );
}

export default PasswordOutput;
