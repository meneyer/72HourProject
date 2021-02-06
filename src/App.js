import React from 'react';
import 'bootstrap/dist/css/bootstrap.css';
import './App.css';
import Sitebar from "./site/Sitebar";
import {
  BrowserRouter as Router,
} from "react-router-dom";

function App() {
  return (
    <div>
      <Router>
        <Sitebar />
      </Router>
    </div>
  );
}

export default App;
