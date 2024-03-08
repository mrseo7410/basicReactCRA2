import logo from './logo.svg';
import './App.css';
import Header from './components/Header';
import Card from './components/Card';
import { useState, useEffect } from 'react';

function App() {

  let [movies, setMovies] = useState([])
  let [keyword, setKeyword] = useState('')

  const onChangeHandler = (event) => {
    setKeyword(event.target.value)
  }

  //최초 1회만 실행
  useEffect(()=>{
    fetch(`http://127.0.0.1:8000/search?query=${keyword}`)
      .then(response=>response.json())
      .then(json=>setMovies(json['results']))
  }, [keyword])

  return (
    <div className="App">
      <Header />
      <div className='bg-gray-300 font-extrabold rounded-md p-3'>
        <label htmlFor="keyword">제목이나 줄거리 검색 : </label>
        <input type="text" onChange={onChangeHandler} id="keyword" name="keyword" />
      </div>
      <div>
        {movies.map(
          (el) => {
            return <Card key={el._source.movieCd} movie={el._source} />
          }
        )}
      </div>
    </div>
  );
}

export default App;
