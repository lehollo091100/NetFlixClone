import React, { useEffect, useState } from 'react';
import './Login.css'
import logo from '../../image/netflixlogo.png'
import exit from '../../image/exit.png'
import wrapper from '../../image/wrapper.jpg'
import Footer from '../Footer/Footer';
import { Link, useHistory } from 'react-router-dom';
import Home from '../Home/Home';
import { render } from '@testing-library/react';
import User from '../DetailUser/User';
import Confirm from './Confirm';
import ConfirmError from './ConfirmError';
import Loading from '../Loading/Loading';
import isEmpty from 'validator/lib/isEmpty'
function Login(){
    let history = useHistory();
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const [showModal, setShow] = useState(false);
    const [showModalError, setShowE] = useState(false);
    const [success, setSuccess]= useState(false);
    const [validateMsg, setValidate] = useState('');
    function Close(){
        history.push("/");
    }
    const [loading, setLoading] = useState(false);
    useEffect(()=>{
        function Load()
        {
            setLoading(true);
            setTimeout(()=>{
                setLoading(false);
            },500)
        }
        Load()
    },[])
    useEffect(()=>{
        if(showModalError == true || showModal == true)
        {
            var x = document.getElementsByClassName("Login__modal");

            for(var i=0; i < x.length ;i++)
            {
                x[i].style.filter = "brightness(30%)"
            }
        }
        else
        {
            var x = document.getElementsByClassName("Login__modal");

            for(var i=0; i < x.length ;i++)
            {
                x[i].style.filter = "brightness(100%)"
            }
        }
    })
    const onChangeEmail = (event) =>{
        const value = event.target.value
        setEmail(value)
    }
    const onChangePassword = (event) =>{
        const value = event.target.value
        setPassword(value)
    }

    const validateAll = () =>{
        const msg = {}
        const mail = email.search("@gmail.com");
        const CorrectEmail = email.slice(0,mail);
        console.log(mail)
        if(isEmpty(email) || mail < 0){
            msg.email = "Vui l??ng nh???p email v?? s??? ??i???n tho???i h???p l???"
        }

        if(isEmpty(password) || password.length < 4)
        {
            msg.password = "M???t kh???u ph???i ch???a t??? 4 - 60 k?? t???"
        }

        setValidate(msg)
        if(Object.keys(msg).length < 4) 
        {
            return false
        }
        else
        {
            return true
        }
    }
    const LoginHandler = e =>{
        e.preventDefault();
        validateAll()
        if(email === "tinpham1510@gmail.com" && password === "12345678")
        {
            
            setSuccess(true);  
           
            localStorage.setItem("token" ,"12345678");
        }

        if(localStorage.getItem("token")!=null)
        {
            setShow(true);
        }
        else
        {
            setShowE(true);
        }
        console.log(success);
    }
    return (
        <>
        {
         loading? <Loading/> :
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
                        <img src={logo}alt="" style={{width: "45%", height: "45%" }}/>
                        <div className="Login__modal-title">
                                Xin ch??o,
                        </div>
                        <div className="Login__modal-content">
                                ????ng nh???p ho???c t???o t??i kho???n m???i
                        </div>
                        <div className="Login__modal-panel">
                            <br/>
                            <a>
                                <i class="far fa-user"></i>
                                <input onChange={onChangeEmail}  type="email" placeholder="  Email ho???c s??? ??i???n tho???i" id="text"></input>
                            </a>
                            <p className="feedback" style={{height: "12px", fontSize: "11px", justifyContent:"left",marginLeft: "90px", overflow:"hidden", fontWeight: "bold" , color: "red", fontStyle:"italic", marginTop: "-1%", display:"flex"}}>{validateMsg.email}</p>
                            <a>
                                <i class="fas fa-lock"></i>
                                <input onChange={onChangePassword} type="password" placeholder="  M???t kh???u" id="password" ></input>
                                <i class="far fa-eye"></i>
                            </a>
                            <p className="feedback" style={{height: "12px", fontSize: "11px", justifyContent:"left",marginLeft: "90px", overflow:"hidden", fontWeight: "bold" , color: "red", fontStyle:"italic", marginTop: "-1%", display:"flex"}}>{validateMsg.password}</p>
                        </div>
                        <div className="Login__modal-panel">
                            <button onClick={LoginHandler}> ????ng nh???p</button>
                        </div>
                    </form>
                    <div className="Login__modal-tocheck">
                        <a className="Login__tocheck-Bx">
                                <input type="checkbox" id='check-box-1' className='
                                apprearance-none h-32 w-32 border-2 rounded-3xl'></input>
                            
                            <span>
                                L??u m???t kh???u
                            </span>
                        </a>
                        <a className="Login__tocheck-Bx" href="#" style={{color:"#8C8C8C"}}>
                            <span>
                                Qu??n m???t kh???u?
                            </span>
                       </a>
                    </div>
                    <br/>
                    <div className="Login__modal-divide">
                        <div className="Login__modal-divide-bar"></div>
                        <div className="Login__modal-divide-content" style={{fontSize: "10px", color:"gray"}}>Ho???c</div>
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
                    <p style={{color: "#8C8C8C", fontSize:"12px", marginTop: "-1%"}}>B???n ch??a c?? t??i kho???n? <a href="/signup">
                            ????ng k??
                    </a> t???i ????y</p>

                </div>
                <Confirm showModal={showModal} setShow={setShow}/>
                <ConfirmError showModal={showModalError} setShow={setShowE}/>
            </div>
            
            <br/>
            <Footer/>
        </div>
}
        </>
    );
}

export default Login;
