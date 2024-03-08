import './App.css';
import { useState } from "react";
import Card from './components/Card';

function App() {

  let [companys, setCompanys] = useState([])
  let [name, setName] = useState('')
  let [suggest, setSuggest] = useState([])


  const handleClick = () => {
    alert('회사 검색 : ' + name)
    fetch(`http://localhost:8000/search?query=${name}`)
      .then(response=>response.json())
      .then(json=>{
        setCompanys(json['results'])
          if(companys.length === 0){
          //영화가 1편도 없을 때는 추천 영화를 표시
          fetch(`http://localhost:8000/suggest?query=${name}`)
            .then(response=>response.json())
            .then(json=>{setSuggest(json['results'])
          })
        }
      })
  }

  const handleChangeTitle = (event) => {
    setName(event.target.value)
  }


  return (
    <div className="App font-extrabold">
      <br/>회사 검색<br/>
      <div className='mb-3 flex w-full flex-wrap items-stretch'>
        <input type='search' className='text-center relative m-0 block min-w-0
        flex-auto rounded border border-solid border-neutral-300' 
        id='companySearch' placeholder='회사 입력' onChange={handleChangeTitle}
        onKeyDown={e =>{            
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
        {companys && companys.map(
          (el) => {
            return <Card key={el._id} company={el._source} />
          }
        )}
        {(!companys || companys.length === 0) && 
        <div>
          <div>검색하신 회사는 없지만 혹시 이런 회사를 검색하시려고 했나요?</div>
          {suggest.map(el => {
            return <ul>
              {el.map(el2 => {
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
