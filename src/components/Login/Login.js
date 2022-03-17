import React, { useState } from 'react'
import Swiper from 'swiper';
import "../styles/style.css"



function Login() {
    const swiper = new Swiper('.swiper', {
        speed: 1000,
        spaceBetween: 50,
    });
    const [tel, setTel] = useState();
    const phoneNumber = () => {
        swiper.slideNext()
        console.log(tel);
    }
    return (
        <div className='container'>
            <form onSubmit={(e) => e.preventDefault()}>
                <div className="tel">
                    <h1>Enter your phone number</h1>
                    <input className='loginInp' onChange={(e) => setTel(e.target.value)} type="tel" name='number' maxLength={11} />
                    <button className='loginBtn' onClick={phoneNumber} >Enter</button>
                </div>
            </form>


        </div>
    )
}

export default Login
