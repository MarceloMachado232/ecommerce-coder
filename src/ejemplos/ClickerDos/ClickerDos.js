import React, {useState, useEffect} from 'react'


export const ClickerDos = () => {

 const [clicks, setClicks] = useState(0)

    const handleClick = () => {
        setClicks( clicks + 1 )
        
    }

        useEffect(() => {
           
            console.log("Me monte")

            return () => {
                console.log("Me desmonte")
            }

        }, [])

        useEffect(() => {
            console.log("Clicks Actualizados")
        }, [clicks])

    return (
        <div onClick={handleClick} className={ clicks % 2 === 0 ? 'green' : 'red' }>

            <p>Clicks: {clicks}</p>
         
            <p>Fecha y Hora del ultimo click: {new Date().toLocaleString()}</p>
             
        </div>
    )
}