import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { BrowserRouter } from "react-router";
import "./reset.css";
import App from "./App.jsx";

createRoot(document.getElementById("root")).render(
    <StrictMode>
        <BrowserRouter basename="/f8-zoom-day-37">
            <App />
        </BrowserRouter>
    </StrictMode>,
);
