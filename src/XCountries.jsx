import { useEffect, useState } from "react";
import axios from "axios";
import CircularProgress from "@mui/material/CircularProgress";

const API_ENDPOINT = "https://xcountries-backend.labs.crio.do/all"

export default function XCountries(){
    const [country, setCountry] = useState([]);
    const [loading, setLoading] = useState(true);
    useEffect(()=>{
        const timer = setTimeout(()=>{
            const fetchData = async () => {
            try {
                const apiData = await axios.get(API_ENDPOINT);
                console.log({apiData});
                setCountry(apiData.data);
            } catch (error) {
                console.error("Error fetching data: ", error);
                setLoading(false);
            }
             finally{
                setLoading(false);
            }
        }
        fetchData();
        return ()=>clearTimeout(timer);
        }, 2000)
    }, [])

    console.log({country});

    if (loading) {
        return (
            <div style={{ textAlign: "center", marginTop: "40px" }}>
            <CircularProgress size={60} thickness={4} />
            <h3>Loading countries...</h3>
            </div>
        );
}

    return(
        <div style={{display:"flex", flexWrap:"wrap", justifyContent:"center", alignItems:"center", gap:"10px"}}>
            {country.map(({name, flag, abbr}, i)=>(
                <CountryCard key={i} name={name} flag={flag} abbr={abbr} />
            ))}
        </div>
    )
}

function CountryCard({name, flag, abbr}){
    return(
        <div style={{display:"flex", flexDirection:"column", height:"200px", width:"200px", justifyContent:"center", alignItems:"center", border:"5px solid black", borderRadius:"10px"}}>
            <img style={{height:"100px", width:"100px"}} src={flag} alt={`Flag of: ${abbr}`} />
            <h3>{name}</h3>
        </div>
    )
}