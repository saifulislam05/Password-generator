import React, { useState } from "react";
import PasswordLengthInput from "./PasswordLengthInput";
import Checkbox from "./Checkbox";
import GeneratedPassword from "./GeneratedPassword";
import CopyToClipboardButton from "./CopyToClipboardButton";

const PasswordGenerator = () => {
  const [password, setPassword] = useState("");
  const [passwordLength, setPasswordLength] = useState(8);
  const [includeUppercase, setIncludeUppercase] = useState(true);
  const [includeLowercase, setIncludeLowercase] = useState(true);
  const [includeNumbers, setIncludeNumbers] = useState(true);
  const [includeSpecialChars, setIncludeSpecialChars] = useState(true);

  const generatePassword = () => {
    const lowercaseChars = "abcdefghijklmnopqrstuvwxyz";
    const uppercaseChars = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
    const numberChars = "0123456789";
    const specialChars = "!@#$%^&*()-=_+[]{}|;:',.<>?/";

    if (passwordLength < 8) {
      alert("Length out of the mentioned range");
      return;
    }

    let chars = "";
    if (includeLowercase) chars += lowercaseChars;
    if (includeUppercase) chars += uppercaseChars;
    if (includeNumbers) chars += numberChars;
    if (includeSpecialChars) chars += specialChars;

    let newPassword = "";
    for (let i = 0; i < passwordLength; i++) {
      const randomIndex = Math.floor(Math.random() * chars.length);
      newPassword += chars.charAt(randomIndex);
    }

    setPassword(newPassword);
  };

  const copyToClipboard = () => {
    if (password === "") {
      alert("Password field is empty, nothing to copy!");
    } else {
      navigator.clipboard.writeText(password);
      alert("Password copied");
    }
  };

  return (
    <div className="password-generator flex flex-col gap-5">
      <PasswordLengthInput
        passwordLength={passwordLength}
        setPasswordLength={setPasswordLength}
      />
      <Checkbox
        label="Include Uppercase"
        checked={includeUppercase}
        onChange={() => setIncludeUppercase(!includeUppercase)}
      />
      <Checkbox
        label="Include Lowercase"
        checked={includeLowercase}
        onChange={() => setIncludeLowercase(!includeLowercase)}
      />
      <Checkbox
        label="Include Numbers"
        checked={includeNumbers}
        onChange={() => setIncludeNumbers(!includeNumbers)}
      />
      <Checkbox
        label="Include Special Characters"
        checked={includeSpecialChars}
        onChange={() => setIncludeSpecialChars(!includeSpecialChars)}
      />
      <div className="flex">
        <GeneratedPassword password={password} />
      <CopyToClipboardButton copyToClipboard={copyToClipboard} />
      </div>
      
      <div className="flex gap-3 w-fit mx-auto mt-3">
        <button
          onClick={generatePassword}
          className="btn btn-sm btn-success text-white"
        >
          Generate Password
        </button>
      </div>
    </div>
  );
};

export default PasswordGenerator;
