import React from 'react';
import ReactDOM from 'react-dom';
import './Main.css'

function Main() {
    return (
        <div>
        <h2>Agriculture Sensor Data</h2>
        <label>
        <input type="checkbox" />
        Temparature
      </label>
      <label>
        <input type="checkbox" />
        Humidity
      </label>
      <label>
        <input type="checkbox" />
        Rainfall
      </label>
        </div>
    );
}

export default Main;