import React from "react";
import { createRoot } from "react-dom/client";
import { BrowserRouter } from "react-router-dom";
import { CssBaseline } from '@mui/material';

import "./index.css";
import { App } from "./App";

const container = document.getElementById("root");
const root = createRoot(container!);
root.render(
  <React.StrictMode>
    <CssBaseline />
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </React.StrictMode>
);
