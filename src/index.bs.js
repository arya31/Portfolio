// Generated by ReScript, PLEASE EDIT WITH CARE

import * as App from "./App.bs.js";
import * as React from "react";
import * as ReactDom from "react-dom";
import * as Caml_option from "rescript/lib/es6/caml_option.js";

import './index.css';
;

var rootQuery = document.querySelector("#root");

if (!(rootQuery == null)) {
  ReactDom.render(React.createElement(App.make, {}), rootQuery);
}

var rootQuery$1 = (rootQuery == null) ? undefined : Caml_option.some(rootQuery);

export {
  rootQuery$1 as rootQuery,
  
}
/*  Not a pure module */
