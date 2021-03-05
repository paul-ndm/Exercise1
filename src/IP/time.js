import { DateTime } from "luxon"
import { useEffect, useState} from 'react';

const Time = ({timezone}) => {

    const [time, setTime] = useState()

    useEffect(()=> {

        setTime(DateTime.now().toLocaleString(DateTime.DATETIME_SHORT))

        const interval = setInterval(()=>{
            setTime(DateTime.now().toLocaleString(DateTime.DATETIME_SHORT))
        }, 60000)

        
        
        return () => clearInterval(interval)
        

    }, [time])

    return(
        <div>
            {time}
        </div>
    )
}

export default Time