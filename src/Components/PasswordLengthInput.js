import React from "react";

const PasswordLengthInput = ({ passwordLength, setPasswordLength }) => {
  return (
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
  );
};

export default PasswordLengthInput;
