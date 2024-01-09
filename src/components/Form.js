import { useState } from "react";

function Form(){
    const [name, setName] = useState("")
    const [age, setAge] = useState("")
    const [email, setEmail] = useState("")
    const [gender, setGender] = useState("Male")
    
    const handleNameChange = (event)=>{
        setName((prev)=>{
            return event.target.value;
        })
    }

    const handleAgeChange = (event)=>{
        setAge((prev)=>{
            return event.target.value;
        })
    }

    const handleEmailChange = (event)=>{
        setEmail((prev)=>{
            return event.target.value;
        })
    }

    const handleGender = (event)=>{
        setGender((prev)=>{
            return event.target.value;
        })
    }

    const handleClick = ()=>{
        console.log(name, age, email, gender)
    }

    return (
        <div className="form">
            <input type="text" placeholder="Name" onChange={handleNameChange}/>
            <input type="number" placeholder="Age" onChange={handleAgeChange}/>
            <input type="email" placeholder="Email Address" onChange={handleEmailChange}/>
            <label>Gender</label>
            <select onChange={handleGender}>
                <option value="Male">Male</option>
                <option value="Female">Female</option>
                <option value="Other">Other</option>
            </select>
            <button onClick={handleClick}>Console</button>
        </div>
    )
}

export default Form;