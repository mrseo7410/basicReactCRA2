const Card = ({animal}) => {
    let{name, image} = animal
    return(
        <div className="shadow-md p-5 flex flex-col">
            
            <div className="bg-red-200 text-black font-extrabold text-center">
                <img src={image} alt={name}/>
                {name}
            </div>
        </div>
    )
}
export default Card