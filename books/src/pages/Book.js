import Layout from "../Components/Layout"
import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";

let BASE_URL = "http://localhost:8000/books/"

const Book = () => {

    //업데이트용 emptyBook
    const emptyBook= {
        "name":null,
        "author":null
    }

    let {id} = useParams()

    const [book, setBook] = useState(null)

    const [updateBook, setUpdateBook] = useState(emptyBook)

    const onChangeBook = (e) => {
        setUpdateBook({...updateBook, [e.target.name]: e.target.value})
    }

    const updateBookInfo = async() => {
        const res = await fetch(`${BASE_URL}${id}`,{
            method:"PUT",
            headers:{
                "Content-Type":"application/json"
            },
            body: JSON.stringify(updateBook)
        })

        const data = await res.json()
        if(!res.ok){
            alert('수정 에러!')
            console.log(res)
        }else{
            alert('책 수정이 완료되었습니다')
            getBook()
            console.log(res)
        }
    }
    const getBook = async() => {
        const res = await fetch(`${BASE_URL}${id}`)
        if(!res.ok){

        }else{
            const data = await res.json()
            setBook(data)
            setUpdateBook(data)
        }
    }

    useEffect(() => {
        getBook()
    },[id])

    return(
        <Layout>
            {book && <div>
                <div className="flex flex-col justify-between min-h-full items-center">
                    <div className="font-bold text-xl text-gray-600 my-3">
                            {book.name} - {book.author}
                    </div>
                    <div className="flex flex-col items-center font-normal text-lg">
                        <div>
                            Name: <input type="text" name="name" className="p-1 mx-1 rounded-md border-2 border-gray-300 flex-1" 
                                    value={updateBook.name} onChange={onChangeBook}/>
                        </div>
                        <div>
                            Author: <input type="text" name="author" className="p-1 mx-1 rounded-md border-2 border-gray-300 flex-1" 
                                    value={updateBook.author} onChange={onChangeBook}/>
                        </div>
                        <button onClick={updateBookInfo} className="bg-teal-400 m-2 w-full text-black p-2 rounded-md transition-opacity hover:opacity-80">
                            수정
                        </button>
                    </div>
                </div>
            </div>}
        </Layout>
    )
}
export default Book
