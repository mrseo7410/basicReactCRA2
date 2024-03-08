const Card = ({book}) => {
    let {title, price} = book
    return(
        <div className="shadow-md p-5 flex flex-col">
            <div className="font-extrabold text-center">
                {title}
            </div>
            <div>
                {price}원    
            </div>    
        </div>
    )
}
export default Card