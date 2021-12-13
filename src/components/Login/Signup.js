import React from 'react';
import './Signup.css'
import logo from '../../image/netflixlogo.png'
import exit from '../../image/exit.png'
import wrapper from '../../image/wrapper.jpg'
import Footer from '../Footer/Footer';
import { Link, useHistory } from 'react-router-dom';
function Signup(){
    let history = useHistory(); 
    function Close(){
        history.push("/");
    }
    return (
        <div className="Signup">
            <div className="Signup__container">
                <div className="Signup__container-wrapper">
                </div> 
                <a className="Signup__logo">
                    <img src={logo} alt=" " />
                </a>
                <div className="Signup__modal">
                    <button className="Signup__modal-exit" onClick={Close}>
                        <img src={exit}></img>
                    </button>
                    <form>
                        <img src={logo}alt="" style={{width: "45%", height: "45%" }}/>
                        <div className="Signup__modal-title">
                                Chào mừng bạn!
                        </div>
                        <div className="Signup__modal-content">
                                Tham gia Netflix thật đơn giản.
                        </div>
                        <div className="Signup__modal-panel">
                            <br/>
                            <a>
                                <input type="email" placeholder="Email hoặc số điện thoại"></input>
                            </a>
                            <a>
                                <input  type="password" placeholder="Mật khẩu" ></input>
                            </a>
                            <a>
                                <input  type="password" placeholder="Nhập lại mật khẩu" ></input>
                            </a>
                        </div>
                        <div className="Signup__modal-panel">
                            <br/>
                            <input  type="submit" value="Đăng ký"></input>
                        </div>
                        <div className="Signup__modal-tocheck">
                            <a className="Signup__tocheck-Bx">
                                <input type="checkbox" style={{border: "1px solid red"}}></input>
                                <span>
                                    Tôi đồng ý với các điều khoản, điều kiện {"&"} chính sách của Netflix.
                                </span>
                            </a>
                        </div>
                        <br/>
                        <div className="Signup__modal-divide">
                            <div className="Signup__modal-divide-bar"></div>
                            <div className="Signup__modal-divide-content" style={{fontSize: "10px", color:"gray"}}>Hoặc</div>
                            <div className="Signup__modal-divide-bar"></div>
                        </div>
                        <br/>
                        <p style={{color: "whitesmoke", fontSize:"12px", marginTop: "-1%"}}>Bạn đã có tài khoản? <a href="/login">
                                Đăng nhập
                        </a> tại đây</p>
                    </form>
                </div>
            </div>
            <br/>
            <Footer/>
        </div>
    );
}

export default Signup;
