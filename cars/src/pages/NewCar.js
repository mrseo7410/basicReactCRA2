import { useState } from "react"
import { useNavigate } from "react-router-dom"

let BASE_URL = "http://localhost:8000/cars/"

const emptyCar = {
    "brand":"",
    "make":"",
    "price":null,
    "year":null
}

const NewCar = () => {

    const [newCar, setNewCar] = useState(emptyCar)

    const navigate = useNavigate()

    const onChange = (ev) => {
        setNewCar({...newCar, [ev.target.name]: ev.target.value})
                // ... -> 스프레드 표기법
    }

    const handleSubmit = (ev) => {
        ev.preventDefault()
        addCar(newCar)
    }

    const addCar = async (newCar) => {
        const response = await fetch(BASE_URL, {
            method: "POST",
            headers: {
                'Content-Type': "application/json"
            },
            body: JSON.stringify(newCar)
        })
        const data = await response.json()
        
        if(!response.ok){
            alert('차 등록 실패!')
        } else {
            alert('차 등록 성공!')
            navigate('/')
        }
    }
    return(
        <div>
            <div>
                <h1 className="text-center text-lg my-2 font-semibold"> 
                새로운 차 추가
                </h1>
            </div>
            <div className="flex flex-row alidn-middle justify-content">
                <form onSubmit={handleSubmit}>
                    <div>
                        <label>브랜드</label>
                        <input type="text"
                            className="p-1 mx-1 rounded-md border-2 border-gray-300 flex-1"
                            name="brand"
                            onChange={onChange} />
                    </div>
                    <div>
                        <label>차종</label>
                        <input type="text"
                            className="p-1 mx-1 rounded-md border-2 border-gray-300 flex-1"
                            name="make"
                            onChange={onChange} />
                    </div>
                    <div>
                        <label>가격</label>
                        <input type="number"
                            className="p-1 mx-1 rounded-md border-2 border-gray-300 flex-1"
                            name="price"
                            onChange={onChange} />
                    </div>
                    <div>
                        <label>연식</label>
                        <input type="number"
                            className="p-1 mx-1 rounded-md border-2 border-gray-300 flex-1"
                            name="year"
                            onChange={onChange} />
                    </div>
                    <button type="submit"
                        className="bg-yellow-400 m-2 w-full text-white rounded-md ">
                        추가
                    </button>
                    <button type="reset"
                        className="bg-black m-2 w-full text-white rounded-md">
                        취소
                    </button>
                </form>
            </div>
        </div>

    )
}
export default NewCar