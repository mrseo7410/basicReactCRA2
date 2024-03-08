import './App.css';

import { useState, useEffect } from 'react';

let BASE_URL = "http://localhost:8000/"

function App() {

  const [message, setMessage] = useState("")

  useEffect(()=>{
    fetch(`${BASE_URL}`)
    .then(response=>response.json())
    .then(json=>{
      setMessage(json.message)
    })
  },[])

  return (
    <div className="App">
      <div>
        2023년 07월 26일 수요일 {message}
      </div>
    </div>
  );
}

export default App;
