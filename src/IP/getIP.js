
import { useEffect, useState} from 'react';
import IpMap from "./map"
import Info from "./country"
import Time from "./time"

const GetIP = () => {

    const [userIp, setUserIp] = useState()

    useEffect(()=>{
        const fetchIP = async () => {
          const res = await fetch('https://geo.ipify.org/api/v1?apiKey=at_E4kUUlTQ0fCKSQ4f9Noga0rerB7Zu&ipAddress=')
          const data = await res.json()
          
          setUserIp(data)
          
        }
    
      fetchIP()
      },[])

    return (
        <div>
        {userIp ?
        <div>
         {userIp.ip}
        <br/>
        <Time timezone ={userIp.location.timezone}/>
        <Info country={userIp.location.country}/>
        <img src={`https://www.countryflags.io/${userIp.location.country}/flat/64.png`}/>
        <IpMap lat={userIp.location.lat} lng={userIp.location.lng}/>
        </div> : '...loading'}
        </div>
    )
}

export default GetIP