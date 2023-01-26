import React, { useState } from "react";

import PasswordOutput from "./components/passwordOutput/index";
import PasswordSettings from "./components/passwordSettings/index";

function App() {
  const [passwordLength, setPasswordLength] = useState(3);
  const [password, setPassword] = useState<string | number>("Generate...");

  return (
    <div className="App">
      <PasswordOutput passwordValue={password} />
      <PasswordSettings
        passwordLength={passwordLength}
        setPasswordLength={setPasswordLength}
        setPassword={setPassword}
      />
    </div>
  );
}

export default App;
