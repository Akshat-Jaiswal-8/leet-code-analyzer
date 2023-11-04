import React from "react";
import ReactDOM from "react-dom";
import "./popup.css";
import {analyzeCode} from "../services/codeToGpt";

const App: React.FC<{}> = () => {
  return (
    <>
      <div className="main">
        Leet <span className="main-span">Code-Analyzer</span>
      </div>
      <div className="main-input-box">
        <input className="main-input"></input>
      </div>
    </>
  );
};

const root = document.createElement("div");
document.body.appendChild(root);
ReactDOM.render(<App />, root);
