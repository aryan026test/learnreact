import { useState } from "react";

function Top(prop){
    const [color, setColor] = useState("")
    const [finalColor, setFinalColor] = useState(prop.color)
    const handleClick = ()=>{
        setFinalColor((prev)=>{
            return color;
        })
    }
    const handleColorChange = (event)=>{
        // console.log(event.target.value)
        setColor((prev)=>{
            return event.target.value;
        })
    }
    return (
        <div className="top" style={{
            backgroundColor: finalColor
        }}>
            <input value={color} onChange={handleColorChange}/>
            <button onClick={handleClick}>click me</button>
        </div>
    );
}

export default Top;