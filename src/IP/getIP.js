
import { useEffect, useState} from 'react';
import {IpMap} from "../Map-Tap/Maps"
import Info from "./country"

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
        
        {userIp ? userIp.ip : '...loading'}
        {userIp ? <Info country={userIp.location.country}/> : '...loading'}
        {userIp ? <IpMap lat={userIp.location.lat} lng={userIp.location.lng}/> : '...loading'}
        
        </div>
    )
}

export default GetIP