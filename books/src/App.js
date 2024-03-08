import Card from "./Components/Card";
import Loading from "./Components/Loading";
import Layout from "./Components/Layout";
import { useState, useEffect } from "react";

function App() {

  let [books, setBooks] = useState([])
  let [name, setName] = useState('')
  let [author, setAuthor] = useState('')
  let [isPending, setIsPending] = useState(true)

  const handleChangeName = (ev) => {
    setBooks([])  
    setName(ev.target.value)
  }

  useEffect(()=>{
    fetch(`http://localhost:8000/books`)
    .then(response=>response.json())
    .then(json=>{
      setBooks(json)
      setIsPending(false)
    })
  },[name, author])

  return (
    <Layout>
      {isPending && <Loading />}
      <div className="grid grid-cols-1 my-3 gap-1">
        {books.map((el)=>{
          return <Card key={el._id} book={el}/>
        })}
      </div>
    </Layout>
  );
}

export default App;

