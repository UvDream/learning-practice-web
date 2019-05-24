import React from "react";
import {render,unmountComponentAtNode} from "react-dom";
import ThisDirection from "./this";
console.log("首次挂载");
let intance=render(<ThisDirection />,document.getElementById('app'))