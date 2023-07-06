import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import { FrontChallenge } from "./FrontChallenge";

import "./styles/styles.css";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <App />
    {/* <FrontChallenge /> */}
  </React.StrictMode>
);
