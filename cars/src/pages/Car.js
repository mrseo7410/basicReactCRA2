import { useState, useEffect } from "react"
import { useParams, useNavigate } from "react-router-dom"

let BASE_URL = "http://localhost:8000/cars/"

const Car = () => {

    // 업데이트용 emptyCar
    const emptyCar = {
        "price":null,
        "year":null
    }
    let {id} = useParams()

    const navigate = useNavigate()

    const [car, setCar] = useState(null)

    const [updateCar, setUpdateCar] = useState(emptyCar)

    const onChangeCar = (e) => {
        setUpdateCar({...updateCar, [e.target.name]: e.target.value})
    }
    
const updateCarInfo = async() => {
    const res = await fetch(`${BASE_URL}${id}`, {
        method:"PUT",
        headers:{
            "Content-Type" : "application/json"
        },
        body: JSON.stringify(updateCar)
    })

    const data = await res.json()
    if(!res.ok){
        alert('수정 에러!')
    }else{
        alert('차 수정이 완료되었습니다')
        getCar()
    }
}

const deleteCarInfo = async() => {
    const res = await fetch(`${BASE_URL}${id}`, {
        method:"DELETE",
        headers:{
            "Content-Type" : "application/json"
        }
    })

    if(!res.ok){
        alert('삭제 에러!')
        console.log(res)
    }else{
        alert('차 삭제가 완료되었습니다')
        navigate("/cars")
    }
}

    const getCar = async() => {
        const res = await fetch(`${BASE_URL}${id}`)
        if(!res.ok){
            //에러 처리
        }else{
            const data = await res.json()
            setCar(data)
            setUpdateCar(data)
        }
    }

    useEffect(() => {
        getCar()
    }, [id])
    
    return(
        <div>
            {car && <div>
                <div className="flex flex-col justify-between min-h-full items-center">
                    <div className="font-bold text-xl text-gray-600 my-3">
                        {car.brand} - {car.make}
                    </div>
                    <div className="flex flex-col items-center font-normal text-lg">
                        <div>
                            Price:<input type="number" name="price" className="p-1 mx-1 rounded-md border-2 border-gray-300 flex-1" value={updateCar.price} 
                                    onChange={onChangeCar}/>
                        </div>
                        <div>
                            Year: <input type="number" name="year" className="p-1 mx-1 rounded-md border-2 border-gray-300 flex-1" value={updateCar.year} 
                                    onChange={onChangeCar}/>
                        </div>
                        <button onClick={updateCarInfo} className="bg-yellow-400 m-2 w-full text-white p-2 rounded-md transition-opacity hover:opacity-80" >
                        수정
                        </button>
                        <button onClick={deleteCarInfo} className="bg-red-600 m-2 w-full text-white p-2 rounded-md transition-opacity hover:opacity-80" >
                        삭제
                        </button>
                    </div>
                </div>
            </div>}
        </div>
    )
}
export default Car
