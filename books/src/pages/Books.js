import Card from "../Components/Card";
import Loading from "../Components/Loading";
import { useState, useEffect } from "react";

let BASE_URL = "http://localhost:8000/books/"

const Books = () => {

  let [books, setBooks] = useState([])
  let [name, setName] = useState('')
  let [author, setAuthor] = useState('')
  let [isPending, setIsPending] = useState(true)

//   const handleChangeName = (ev) => {
//     setBooks([])  
//     setName(ev.target.value)
//   }

  useEffect(()=>{
    fetch(`${BASE_URL}`)
    .then(response=>response.json())
    .then(json=>{
      setBooks(json)
      setIsPending(false)
    })
  },[name, author])

  return (
    <div>
      {isPending && <Loading />}
      <div className="grid grid-cols-1 my-3 gap-1">
        {books.map((el)=>{
          return <Card key={el._id} book={el}/>
        })}
      </div>
    </div>
  );
}

export default Books

