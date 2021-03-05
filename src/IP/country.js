import { useEffect, useState} from 'react';

const Info = ({country}) => {

    const [info, setInfo] = useState()

    const fetchInfo = async (country) => {
        const res = await fetch(`https://restcountries.eu/rest/v2/alpha/${country}`)
        const json = await res.json()
        setInfo(json)
        
    }

    useEffect(()=>{
        fetchInfo(country)
        
    },[])

    return (
        <div>
        {info ? 
            <div>
            <p>{info.name}</p>  
            <br/>
            
            </div>
            
            : '...loading'}
        </div>
    )
}

export default Info

// <img scr={"https://restcountries.eu/data/aut.svg"} alt="Flag" />