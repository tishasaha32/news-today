import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import reportWebVitals from "./reportWebVitals";
import { BrowserRouter } from "react-router-dom";
import { DarkModeContextProvider } from "./context/darkmodeContext";
import { SaveContextProvider } from "./context/saveContext";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <BrowserRouter>
      <DarkModeContextProvider>
        <SaveContextProvider>
          <App />
          <ToastContainer autoClose={2000} />
        </SaveContextProvider>
      </DarkModeContextProvider>
    </BrowserRouter>
  </React.StrictMode>
);

reportWebVitals();
