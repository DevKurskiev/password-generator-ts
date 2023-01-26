import { useState, FC } from "react";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

import { rangeColor } from "./helpers";
import "./styles.css";

interface IProps {
  passwordLength: number;
  setPasswordLength(length: number): void;
  setPassword(text: string): void
}

const PasswordSettings: FC<IProps> = ({
  passwordLength,
  setPasswordLength,
  setPassword,
}) => {
  const [symbols, setSymbols] = useState<string[]>([]);

  const handleChangePassword = () => {
    toast.dismiss();

    if (!!symbols?.length) {
      let text = "";

      for (var i = 0; i < passwordLength; i++)
        text += symbols
          .join("")
          .charAt(Math.floor(Math.random() * symbols.join("").length));

      setPassword(text);
    } else toast.error("Choose at least 1 condition!");

    console.log(symbols);
  };

  return (
    <div className="settings-container">
      <div className="content">
        <div className="character-length">
          <p>
            Character Length <span>{passwordLength}</span>
          </p>
        </div>
        <input
          type="range"
          min="1"
          max="12"
          step="1"
          className="slider"
          value={passwordLength}
          onChange={(e) => {
            e.target.style.background = rangeColor(
              (+e.target.value / 12) * 100 - 1
            );
            setPasswordLength(+e.target.value);
          }}
        />

        <ul>
          <li>
            <input
              name="highload0"
              type="checkbox"
              onClick={(e) =>
                e.currentTarget?.checked
                  ? setSymbols([...symbols, "ABCDEFGHIJKLMNOPRSUVWXYZ"])
                  : setSymbols(
                      symbols.filter(
                        (value) => value !== "ABCDEFGHIJKLMNOPRSUVWXYZ"
                      )
                    )
              }
            />
            <label htmlFor="highload0" className="checkbox-custom-label">
              Include Uppercase Latters
            </label>
          </li>
          <li>
            <input
              name="highload1"
              type="checkbox"
              onClick={(e) =>
                e.currentTarget.checked
                  ? setSymbols([...symbols, "abcdefghijklmnoprsuvwxyz"])
                  : setSymbols(
                      symbols.filter(
                        (value) => value !== "abcdefghijklmnoprsuvwxyz"
                      )
                    )
              }
            />
            <label htmlFor="highload1" className="checkbox-custom-label">
              Include Lowercase Latters
            </label>
          </li>
          <li>
            <input
              name="highload2"
              type="checkbox"
              onClick={(e) =>
                e.currentTarget.checked
                  ? setSymbols([...symbols, "1234567890"])
                  : setSymbols(
                      symbols.filter((value) => value !== "1234567890")
                    )
              }
            />
            <label htmlFor="highload2" className="checkbox-custom-label">
              Include Numbers
            </label>
          </li>
          <li>
            <input
              name="highload3"
              type="checkbox"
              onClick={(e) => {
                e.currentTarget.checked
                  ? setSymbols([...symbols, "#$%&()*<>=-_"])
                  :
                      setSymbols(
                        symbols.filter((value) => value !== "#$%&()*<>=-_")
                      )
              }}
            />
            <label htmlFor="highload3" className="checkbox-custom-label">
              Include Symbols
            </label>
          </li>
        </ul>

        <button className="generate-btn" onClick={handleChangePassword}>
          GENERATE
        </button>
      </div>

      <ToastContainer />
    </div>
  );
}

export default PasswordSettings;
