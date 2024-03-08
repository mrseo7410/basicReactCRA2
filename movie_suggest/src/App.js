import { useState } from "react";
import './App.css';
import Card from "./components/Card";

function App() {

  let [movies, setMovies] = useState([])
  let [title, setTitle] = useState('')
  let [suggest, setSuggest] = useState([])

  const handleClick = () => {
    alert('제목 검색 : ' + title)
    fetch(`http://localhost:8000/search?query=${title}`)
      .then(response=>response.json())
      .then(json=>{
        setMovies(json['results'])
          if(movies.length === 0){
          //영화가 1편도 없을 때는 추천 영화를 표시
          fetch(`http://localhost:8000/suggest?query=${title}`)
            .then(response=>response.json())
            .then(json=>{setSuggest(json['results'])
          })
        }
      })
  }

  const handleChangeTitle = (event) => {
    setTitle(event.target.value)
  }

  return (
    <div className="App font-extrabold">
      <br/>영화 검색 <br/><br/>
      <div className='mb-3 flex w-full flex-wrap items-stretch'>
        <input type='search' className='text-center relative m-0 block min-w-0
        flex-auto rounded border border-solid border-neutral-300' 
        id='movieSearch' placeholder='제목 입력' onChange={handleChangeTitle}
        onKeyDown={e =>{             // 'Enter 눌러도 검색 버튼 누른것과 같은 기능
          if(e.key === 'Enter'){
            e.preventDefault()
            handleClick()
            }
          }
        }/>

        {/* Search Button */}
        <button className='rounded-r border-2 border-primary px-6 py-2'
        type='button' id='search_button' onClick={handleClick}> 검색 </button>
      </div>
      <div>
        {movies && movies.map(
          (el) => {
            return <Card key={el._id} movie={el._source} />
          }
        )}
        {(!movies || movies.length === 0) && 
        <div>
          <div>검색하신 영화는 없지만 혹시 이런 영화를 검색하시려고 했나요?</div>
          {suggest.map(el => {
            return <ul>
              {el.options.map(el2 => {
                return <li>
                  {el2.text}
                </li>
              })}
            </ul>
          })}
        </div>
          }
      </div>
    </div>
  );
}

export default App;
