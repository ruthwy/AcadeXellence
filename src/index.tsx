import React from 'react';
import ReactDOM from 'react-dom/client';
import "./css/index.css";
import App from './App';
import reportWebVitals from './reportWebVitals';
import { UserProvider } from "./UserContext";

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);
root.render(
  <UserProvider>
  <React.StrictMode>
    <App />
  </React.StrictMode>
  </UserProvider>
);
reportWebVitals();
