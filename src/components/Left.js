import { useState } from "react";

function Left(prop){
    const [color, setColor] = useState("");
    const [finalColor, setFinalColor] = useState(prop.color)
    const handleClick = ()=>{
        setFinalColor((prev)=>{
            return color;
        })
    }
    const handleColorChange = (event)=>{
        setColor((prev)=>{
            return event.target.value
        })
    }
    return (
        <div className="left" style={{
            backgroundColor: finalColor
        }}>
            <input type="text" onChange={handleColorChange}/>
            <button onClick={handleClick}>click me</button>
        </div>
    );
}

export default Left;