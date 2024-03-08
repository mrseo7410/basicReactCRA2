import './App.css';
import Header from './components/Header';
import Card from './components/Card';
import { useEffect, useState } from 'react';

function App() {

  let [books, setBooks] = useState([])
  let [title, setTitle] = useState('')

  const onChangeHandler = (event) => {
    setTitle(event.target.value)
  }

  useEffect(()=> {
    fetch(`http://localhost:8000/search?query=${title}`)
      .then(response=>response.json())
      .then(json=>setBooks(json['results']))
  },[title])

  return (
    <div className="App">
      <Header />
      <div className='bg-indigo-200 font-extrabold rounded-md p-3'>
        <label html="title">책 제목 검색 : </label>
        <input type='text' onChange={onChangeHandler} id="title" name="title" /> 
      </div>
      <div>
        {books.map(
            (el)=>{
              return <Card key={el._source.title} book={el._source} />
            }
          )}
      </div>
        
      </div>
  );
}

export default App;
