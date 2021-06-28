import React from 'react';
import { render } from "react-dom";
import { App } from "./App";
import './style.css';

const rootElement = document.getElementById("root");
window.React = React;
render(<App />, rootElement);