const Card = ({movie}) => {
    let {movieNm} = movie
    return(
        <div className='shadow-md p-5 flex flex-col'>
            <div className="font-extrabold">
                검색된 영화 :  {movieNm}
            </div>
        </div>
    )
}
export default Card