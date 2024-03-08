const Card = ({movie}) => {
    let {movieCd, title, synopsis} = movie
    return(
        <div className='shadow-md p-5 flex flex-col'>
            <div className="font-extrabold text-center">
                {title}
            </div>
            <div>
                {synopsis}
            </div>
        </div>
        )
}
export default Card
