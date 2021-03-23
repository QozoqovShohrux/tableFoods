import ReactDOM from "react-dom";
import App from "./App";
import "bootstrap/dist/css/bootstrap.css";
import "./component/foods.css";
import { ToastContainer } from "react-toastify";
import 'react-toastify/dist/ReactToastify.css';
import { BrowserRouter as Router } from "react-router-dom";
ReactDOM.render( < Router >

    <
    ToastContainer / >
    <
    App / >
    <
    /
    Router >

    , document.getElementById("root"));