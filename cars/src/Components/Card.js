import {Link} from "react-router-dom"

const Card = ({car}) => {
    let {brand, price, make, year, _id} = car
    return(
        <Link to={`/cars/${_id}`}>
            <div className="shadow-md p-5 flex flex-col">
                <div className="font=extrabold text-center border-4">
                    {make}
                </div>
                <div>Price: {price}  Euro</div>
                <div>Brand: {brand}</div>
                <div>{year}년식</div>
            </div>
        </Link>
    )
}
export default Card
