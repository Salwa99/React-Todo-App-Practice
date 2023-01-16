import React from "react";
import ReactDOM from "react-dom";
import TodoContainer from "./components/TodoContainer";
import "./App.css";
import { BrowserRouter as Router} from "react-router-dom";
// eslint-disable-next-line
ReactDOM.render(
    <React.StrictMode>
    <Router>
     <TodoContainer />
    </Router>
    </React.StrictMode>,
    document.getElementById("root")
  )
