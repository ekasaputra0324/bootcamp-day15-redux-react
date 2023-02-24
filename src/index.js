import React from "react";
import ReactDOM from "react-dom";
import reducer from './reducer'
import App from "./App";
import { createStore} from "redux"
// import "./App.css"


let store = createStore(reducer)


const el = document.getElementById('root');
const root = ReactDOM.createRoot(el);

/*
root.render() 
digunakan untuk merender component yang telah di buat
*/ 
root.render(<App store={store} />)

