import React, {useState, useEffect} from 'react'
import './Clicker.scss'

export const Clicker = () => {

 const [clicks, setClicks] = useState({

    x:0,
    y:0

})

        useEffect(() => {
           
            console.log("Me monte")

            const handleClick = ({x, y}) => {

                console.log(x, y)

                setClicks({
              x, y
                })
            }
                window.addEventListener('click',handleClick)

            return () => {
                console.log("Me desmonte")
                window.removeEventListener('click',handleClick)
            }

        }, [])


    return (
        <div>

            <p>x: {clicks.x}</p>
         
            <p>y: {clicks.y}</p>
             
        </div>
    )
}
