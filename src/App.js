import React, { useState } from 'react';
import './App.css';

function App() {

  const [name,setName] = useState("")

  const naming = (e) =>{
    setName(`반갑습니다 ${e.target.value}님`);
  }

  return (
    <div className="App">
      <h1>Home</h1>
      <p>당신의 이름은 무엇입니까</p>
      <input type="text" onChange={naming}/>
      <h3>{name}</h3>
    </div>
  );
}

export default App;
