export default function XCountries(){
    return(
        <div>
            <CountryCard />
        </div>
    )
}

function CountryCard(){
    return(
        <div style={{display:"flex", flexDirection:"column"}}>
            <img src="flag.png" alt="flag" />
            <h3>Country Name</h3>
        </div>
    )
}