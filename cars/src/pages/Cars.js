// import Card from "../../Components/Card"; << 한 단계 더 올라가야할 때
import Card from "../Components/Card";
import Loading from "../Components/Loading";
import { useState, useEffect } from "react";

let BASE_URL = "http://localhost:8000/cars/"

const Cars = () => {
    let [cars, setCars] = useState([])
    let [brand, setBrand] = useState('')
    let [minPrice, setMinPrice] = useState(0)
    let [maxPrice, setMaxPrice] = useState(100000)
    let [page, setPage] = useState(1)
    let [isPending, setIsPending] = useState(true)
  
    const handleChangeBrand = (ev) => {
      setCars([]) 
      setBrand(ev.target.value)
      setIsPending(true)
    }
  
    const handleChangeMinPrice = (ev) => {
      setCars([])  
      setMinPrice(ev.target.value)
      setIsPending(true)
    }
  
    const handleChangeMaxPrice = (ev) => {
      setCars([])  
      setMaxPrice(ev.target.value)
      setIsPending(true)
    }
  
    const handleChangePage = (ev) => {
      setCars([])
      setPage(ev.target.value)
      setIsPending(true)
    }
  
    useEffect(()=>{
      fetch(`${BASE_URL}?min_price=${minPrice}&max_price=${maxPrice}&brand=${brand}&page=${page}`)
      .then(response=>response.json())
      .then(json=>{
        setCars(json)
        setIsPending(false)
      })
    },[brand, minPrice, maxPrice, page])
  
    return (
    <div>
        <label htmlFor="car">제조사 선택 : </label>
        <select name="Cars" id="cars" onChange={handleChangeBrand}>
          <option value="">모든 제조사</option>
          <option value="Hyundai">현대</option>
          <option value="Kia">기아</option>
          <option value="Toyota">도요타</option>
          <option value="Mercedes">벤츠</option>
          <option value="Ford">포드</option>
        </select><br/>
  
        <label htmlFor="min_price">가격대 : </label>
        <input className="text-right" type="number" name="min_price" id="min_price" value={minPrice} onChange={handleChangeMinPrice}/> ~
        <input className="text-right" type="number" name="max_price" id="max_price" value={maxPrice} onChange={handleChangeMaxPrice}/>
        <br/>
        <label htmlFor="page">페이지 선택 : </label>
        <select name="page" id="page" onChange={handleChangePage}>
          <option value="1">1</option>
          <option value="2">2</option>
          <option value="3">3</option>
          <option value="4">4</option>
          <option value="5">5</option>
        </select>
        {isPending && <Loading />}
        <div className="grid grid-cols-3 my-3 gap-3">
          {cars.map((el)=>{
            return <Card key={el._id} car={el}/>
          })}
        </div>
    </div>
   );
}
export default Cars


