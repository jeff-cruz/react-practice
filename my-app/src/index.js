import React, { useState, useEffect } from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import reportWebVitals from './reportWebVitals';


function App() {
  const [data, setData] = useState([]);

  useEffect(() => {
    fetch(`https://pokeapi.co/api/v2/pokemon`)
      .then(res => res.json())
      .then(res => setData(res.results));
  }, []);

  console.log(data);

  if(data){
    let counter = 1;
    return (
      <div>
        <ul>
          {data.map(pokemon => (
            <li key={counter++}>{pokemon.name}</li>
          ))}
        </ul>
        <button onClick={() => setData([])}>Remove Data</button>
      </div>
    )
  }



  return <p>No Users</p>;
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
