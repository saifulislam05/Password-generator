import React, { useState } from "react";

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
      alert("Length out of mentioned range");
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
      alert("Password field is empty,nothing to copy!");
    } else {
      navigator.clipboard.writeText(password);
      alert("Password copied");
    }
  };

  return (
    <div className="password-generator flex flex-col gap-5">
      <div className="flex flex-col gap-2">
        <div className="w-fit mx-auto">
          <label className="font-semibold mr-2">Password Length:</label>
          <input
            type="number"
            min="8"
            max="50"
            value={passwordLength}
            onChange={(e) => setPasswordLength(e.target.value)}
            className="input input-success input-sm w-16"
          />
        </div>
        <div>
          <label>
            <input
              type="checkbox"
              checked={includeUppercase}
              onChange={() => setIncludeUppercase(!includeUppercase)}
            />
            Include Uppercase
          </label>
        </div>
        <div>
          <label>
            <input
              type="checkbox"
              checked={includeLowercase}
              onChange={() => setIncludeLowercase(!includeLowercase)}
            />
            Include Lowercase
          </label>
        </div>
        <div>
          <label>
            <input
              type="checkbox"
              checked={includeNumbers}
              onChange={() => setIncludeNumbers(!includeNumbers)}
            />
            Include Numbers
          </label>
        </div>
        <div>
          <label>
            <input
              type="checkbox"
              checked={includeSpecialChars}
              onChange={() => setIncludeSpecialChars(!includeSpecialChars)}
            />
            Include Special Characters
          </label>
        </div>
      </div>
      <div className="flex items-center">
        <label className="w-2/6">Generated Password:</label>
        <div className="w-4/6 input inline-block input-sm input-success">
          {password}
        </div>
        <button
          onClick={copyToClipboard}
          className="w-1/12 btn btn-sm btn-success text-white ml-1"
        >

          <svg xmlns="http://www.w3.org/2000/svg" fill="#fff" height="16" width="14" viewBox="0 0 448 512"><path d="M384 336H192c-8.8 0-16-7.2-16-16V64c0-8.8 7.2-16 16-16l140.1 0L400 115.9V320c0 8.8-7.2 16-16 16zM192 384H384c35.3 0 64-28.7 64-64V115.9c0-12.7-5.1-24.9-14.1-33.9L366.1 14.1c-9-9-21.2-14.1-33.9-14.1H192c-35.3 0-64 28.7-64 64V320c0 35.3 28.7 64 64 64zM64 128c-35.3 0-64 28.7-64 64V448c0 35.3 28.7 64 64 64H256c35.3 0 64-28.7 64-64V416H272v32c0 8.8-7.2 16-16 16H64c-8.8 0-16-7.2-16-16V192c0-8.8 7.2-16 16-16H96V128H64z"/></svg>
        </button>
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
