export default function XCountries(){
    return(
        <div>
            <CountryCard />
        </div>
    )
}

function CountryCard(){
    return(
        <div style={{display:"flex", flexDirection:"column", height:"200px", width:"200px", justifyContent:"center", alignItems:"center", border:"5px solid black", borderRadius:"10px"}}>
            <img src="flag.png" alt="flag" />
            <h3>Country Name</h3>
        </div>
    )
}