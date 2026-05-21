function Q3(){
    const Students = ["Neda","Nila","Nargis","Nema"];
    return(
        <div>
            {Students.map((st,index)=>(
                <h1 key={index}>{st}</h1>
            ))}
        </div>
    )
}
export default Q3;