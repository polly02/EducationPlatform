import Footer from "../../components/Footer/Footer"
import Header from "../../components/Header/Header"
import style from "./style.module.css"
import { useGetUserMutation } from '../../service/user';
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

function AuthPage() {
    const navigate = useNavigate();
    const [getUser] = useGetUserMutation();
    const [value, setValue] = useState({ email: '', pwd: '' });
    const [auth, setAuth] = useState(false);

    function sendRequest() {
        getUser(value)
          .then(() => {
            setAuth(true);
            navigate('/');
            // navigate('/courses');
          })
          .catch((error) => {
            setAuth(false);
          });
      }
    
      function changeInputValue(event) {
        setValue({ ...value, [event.target.name]: event.target.value });
      }

    return (
        <>
            <Header></Header>
            <div className={style.wrapper}>
                <div className={style.login}>
                    <h1>Login</h1>
                    <div>
                        <input name="email"  onChange={changeInputValue} placeholder="Email" />
                    </div>
                    <div>
                        <input name="pwd"  onChange={changeInputValue} type="password" placeholder="Password" />
                    </div>
                    <div className={style.btn} onClick={sendRequest}>Login</div>
                </div>
                <div className={style.image}></div>
            </div>
            <Footer></Footer>
        </>
    )
}

export default AuthPage