import React, { useState } from 'react';
import './Login.css'
import logo from '../../image/netflixlogo.png'
import exit from '../../image/exit.png'
import wrapper from '../../image/wrapper.jpg'
import Footer from '../Footer/Footer';
import { Link, useHistory } from 'react-router-dom';
import Home from '../Home/Home';

function Login(){
    let history = useHistory();
    const [success, setSuccess]= useState(false);
    function Close(){
        history.goBack();
    }

    const LoginHandler = e =>{
        e.preventDefault();
        let username = document.getElementById("text").value;
        let password = document.getElementById("password").value;
        if(username === "tinpham1510" && password === "12345678")
        {
            setSuccess(true);
            history.push('/home');
            localStorage.setItem("token" ,"12345678");
        }
        console.log(success);
    }
    return (
        <>
        {
            success ? <Home/>:
        <div className="Login">
            <div className="Login__container">
                <div className="Login__container-wrapper">
                </div> 
                <a className="Login__logo">
                    <img src={logo} alt=" " />
                </a>
                <div className="Login__modal">
                    <button className="Login__modal-exit" onClick={Close}>
                        <img src={exit}></img>
                    </button>
                    <form>
                        <div className="Login__modal-title">
                                Xin chào,
                        </div>
                        <div className="Login__modal-content">
                                Đăng nhập hoặc tạo tài khoản mới
                        </div>
                        <div className="Login__modal-panel">
                            <br/>
                            <a>
                                <input  placeholder="Email hoặc số điện thoại" id="text"></input>
                            </a>
                            <a>
                                <input  type="password" placeholder="Mật khẩu" id="password" ></input>
                            </a>
                        </div>
                        <div className="Login__modal-panel">
                            <br/>
                            <button onClick={LoginHandler}> Đăng nhập</button>
                        </div>
                    </form>
                    <div className="Login__modal-tocheck">
                        <a className="Login__tocheck-Bx">
                            <input type="checkbox" style={{border: "1px solid red"}}></input>
                            <span>
                                Lưu mật khẩu
                            </span>
                        </a>
                        <a className="Login__tocheck-Bx" href="#" style={{color:"white"}}>
                            <span>
                                Quên mật khẩu?
                            </span>
                       </a>
                    </div>
                    <br/>
                    <div className="Login__modal-divide">
                        <div className="Login__modal-divide-bar"></div>
                        <div className="Login__modal-divide-content" style={{fontSize: "10px", color:"gray"}}>Hoặc</div>
                        <div className="Login__modal-divide-bar"></div>
                    </div>
                    <div className="Login__modal-account">
                        <button className="Login__modal-account-btn">
                            <box-icon name='facebook-square' type='logo' animation='tada' color='#f4ecec' ></box-icon>
                            <div className="Login__modal-account-text">
                                Facebook
                            </div>
                        </button>
                        <button className="Login__modal-account-btn">
                            <box-icon name='google' type='logo' animation='tada' color='#f4ecec' ></box-icon>
                            <div className="Login__modal-account-text">
                                Google
                            </div>
                        </button>
                    </div>
                    <br/>
                    <p style={{color: "whitesmoke", fontSize:"12px", marginTop: "-1%"}}>Bạn chưa có tài khoản? <a href="/signup" style={{color:"red"}}>
                            Đăng kí
                    </a> tại đây</p>

                </div>
            </div>
            <br/>
            <Footer/>
        </div>
}
        </>
    );
}

export default Login;
