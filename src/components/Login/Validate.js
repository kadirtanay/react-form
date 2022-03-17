import React, { useState } from 'react'
import "../styles/style.css"

function Validate() {
    const [code, setCode] = useState();
    const sendedCode = () => {
        console.log(code);
    }
    return (
        <div className='container'>
            <form onSubmit={(e) => e.preventDefault()}>
                <h1>Enter your code</h1>
                <div className="code">
                    <input className='validateInp' onChange={(e) => setCode(e.target.value)} type="tel" name='number' maxLength={6} />
                    <button className='validateBtn' onClick={sendedCode}  >Enter</button>
                </div>
            </form>

        </div>
    )
}

export default Validate
