const Card = ({movie,budget}) => {
    let {title, poster_path, release_date} = movie
    return(
        <div className="shadow-md p-5 flex flex-col">
            <div><img src={`https://image.tmdb.org/t/p/w500/${poster_path}`}/></div>
            <div className="font-extrabold text-center">
                {title}
            </div>
            <br/>
            <div className="text-center">release_date:{release_date}</div>
        </div>
    )
}
export default Card