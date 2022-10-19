import "./styles/main.scss";

import ReactDOM from "react-dom";
import App from "./App";
import { Navbar } from "@minteeble/ui-components";

document.addEventListener("DOMContentLoaded", async () => {
  ReactDOM.render(<App />, document.getElementById("app-wrapper"));
});

