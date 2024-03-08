import { Link } from "react-router-dom"

const Card = ({book}) => {
    let {name, author, _id} = book
    return(
        <Link to={`${_id}`}>
            <div className="shadow-md p-5 flex flex-col">
                <div>
                    {name} - {author}
                </div>
            </div>
        </Link>
    )
}
export default Card