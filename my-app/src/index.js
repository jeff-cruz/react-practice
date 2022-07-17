import React, { useState } from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import reportWebVitals from './reportWebVitals';

function App() {
  const [sound, setSound] = useState("");
  const [color, setColor] = useState("#000000");

  const submit = (event) => {
    event.preventDefault();
    alert(`${sound} sounds like ${color}`);
    setSound("");
    setColor("#000000");
  }

  return (
    <form onSubmit={submit}>
      <input
      value={sound}
      type="text"
      placeholder="Sound..."
      onChange ={(event) => setSound(event.target.value)}/>
      <input
      value={color}
      type="color"
      onChange ={(event) => setColor(event.target.value)}/>
      <button>ADD</button>
    </form>
  )
}

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
