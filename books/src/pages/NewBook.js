import Layout from "../Components/Layout"
import { useState } from "react"
import { useNavigate } from "react-router-dom"

let BASE_URL = "http://localhost:8000/books/"

const emptyBook = {
    "name":"",
    "author":"",
}

const NewBook = () => {
    const [newBook, setNewBook] = useState(emptyBook)

    const navigate = useNavigate()

    const onChange = (ev) => {
        setNewBook({...newBook, [ev.target.name]: ev.target.value})
    }

    const handleSubmit = (ev) => {
        ev.preventDefault()
        addBook(newBook)
    }    

    const addBook = async (newBook) => {
        const response = await fetch(BASE_URL, {
            method: "POST",
            headers: {
                'Content-Type': "application/json"
            },
            body: JSON.stringify(newBook)
        })
        const data = await response.json()
        
        if(!response.ok){
            alert('책 등록 실패!')
        } else {
            alert('책이 추가되었습니다')
            navigate('/')
        }
    }

    return(
        <Layout>
            <div>
                <h1 className="text-center text-lg my-2 font-semibold"> 
                새로운 책 추가
                </h1>
            </div>
            <div className="flex flex-row alidn-middle justify-content">
            <form onSubmit={handleSubmit}>
                    <div>
                        <label>책이름 : </label>
                        <input type="text"
                            className="p-1 mx-1 rounded-md border-2 border-gray-300 flex-1"
                            name="name"
                            onChange={onChange} />
                    </div>
                    <div>
                        <label>저자 : </label>
                        <input type="text"
                            className="p-1 mx-1 rounded-md border-2 border-gray-300 flex-1"
                            name="author"
                            onChange={onChange} />
                    </div>
                    <button type="submit"
                        className="bg-teal-400 m-2 w-full text-white rounded-md">
                        추가
                    </button>
                    <button type="reset"
                        className="bg-black m-2 w-full text-white rounded-md">
                        취소
                    </button>
                </form>
            </div>
        </Layout>

    )
    }
export default NewBook