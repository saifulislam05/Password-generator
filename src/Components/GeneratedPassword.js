import React from "react";

const GeneratedPassword = ({ password }) => {
  return (
    <div className="flex items-center w-11/12">
      <label className="w-2/6">Generated Password:</label>
      <div className="w-4/6 input inline-block input-sm input-success">
        {password}
      </div>
    </div>
  );
};

export default GeneratedPassword;
