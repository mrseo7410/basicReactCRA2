
import Header from "./components/Header";
import Footer from "./components/Footer";
import Card from "./components/Card";
import { useState, useEffect } from "react";

function App() {

  let [movies, setMovies]  = useState([])
  let [title, setTitle] = useState('')

  const handleChangeBrand = (ev) => {
    setMovies([])  
    setTitle(ev.target.value)
  }

  useEffect(()=> {
    fetch(`https://api.themoviedb.org/3/search/movie?query=${title}&api_key=444fd9afa60286c33f663cb4c2811e4b`)
    .then(response=>response.json())
    .then(json=>{
      setMovies(json['results'])
    })
  },[title])

  return (
    <div className="App">
      <Header />
      <div>
        <label htmlFor="movie">영화 검색 : </label>
        <input name="Movies" id="movies" onChange={handleChangeBrand}></input>
      </div>
            
      <div className="grid grid-cols-3 my-3 gap-3">
        {movies.map((el)=>{
            return <Card key={el.id} movie={el}/>
          }
        )}
      </div>
      <Footer/>
    </div>
  );
}
export default App;