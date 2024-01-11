import { useState } from "react"

function Box(prop){
    const [color, setColor] = useState("")
    const [finalColor, setFinalColor] = useState(prop.info.color)
    const handleColorChange = (event)=>{
        setColor((prev) =>{
            return event.target.value
        })
    }

    const handleClick = ()=>{
        setFinalColor((prev)=>{
            return color;
        })
    }

    console.log(prop.info.margin)

    return (
        <div style={{
            backgroundColor: finalColor,
            height: prop.info.height, 
            width: prop.info.width,
            margin: prop.info.margin
        }}>
            {prop.info.name}
            <input onChange={handleColorChange} />
            <button onClick={handleClick} >click me</button>
        </div>
    )
}

export default Box;