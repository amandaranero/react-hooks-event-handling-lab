import React from "react"

function Keypad (){
    const enterPassword = ()=>{
        console.log("Entering Password")
    }
    return (
        <div>
            <input type="password" onChange={enterPassword}/>
        </div>
    )
}

export default Keypad;