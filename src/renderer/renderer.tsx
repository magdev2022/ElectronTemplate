/**
 * React renderer.
 */
import * as React from "react";
import * as ReactDOM from "react-dom";
import App from "./Views/App";
// Import the styles here to process them with webpack
import "@public/style.css";

ReactDOM.render(<App />, document.getElementById("app"));
