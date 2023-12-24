import React from "react";
import Header from "./Components/Header";
import PasswordGenerator from "./Components/PasswordGenerator";

const App = () => {


  return (
    <div className="w-screen h-screen overflow-hidden flex justify-center items-center">
      <div className="w-[600px] bg-[#182234] rounded-xl overflow-hidden p-4">
        <Header />
        <PasswordGenerator />
      </div>
    </div>
  );
};


export default App;
