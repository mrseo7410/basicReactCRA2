const Card = ({company}) => {
    let {name} = company
    return(
        <div className='shadow-md p-5 flex flex-col'>
            <div className="font-extrabold">
                검색된 회사 :  {name}
            </div>
        </div>
    )
}
export default Card