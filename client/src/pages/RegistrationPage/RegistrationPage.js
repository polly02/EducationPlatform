import Footer from '../../components/Footer/Footer';
import Header from '../../components/Header/Header';
import style from "./style.module.css"
import { useCreateUserMutation } from '../../service/user'
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

function RegistrationPage() {
    const [createUser] = useCreateUserMutation()
    const [value, setValue] = useState({ name: '', surname: '', email: '', pwd: '', role: '' })
    const navigate = useNavigate();

    function sendRequest() {
        createUser(value)
        .then(() => {
               navigate('/auth'); 
          })
    }

    function changeInputValue(event) {
        setValue({ ...value, [event.target.name]: event.target.value })
    }

    return (
        <>
            <Header></Header>
            <div className={style.wrapper}>
                <div className={style.sign}>
                    <h1>Sign Up</h1>
                    <div>
                        <input name='name' onChange={changeInputValue} placeholder='Name' />
                    </div>
                    <div>
                        <input name='surname' onChange={changeInputValue} placeholder='Surname' />
                    </div>
                    <div>
                        <input name='email' onChange={changeInputValue} placeholder='Email' />
                    </div>
                    <div>
                        <input name='pwd' onChange={changeInputValue} type='password' placeholder='Password' />
                    </div>
                    <div>
                        <input name='role' onChange={changeInputValue} placeholder='Role' />
                    </div>
                    <div className={style.btn} onClick={sendRequest}>Login</div>
                </div>
                <div className={style.image}></div>
            </div>
            <Footer></Footer>
        </>
    )
}

export default RegistrationPage