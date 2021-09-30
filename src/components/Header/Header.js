import React from 'react'
import './Header.css'
import logo from '../../image/netflixlogo.jpg'
import avatar from '../../image/avatar.png'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
function Header() {
    const handleMobileSearch=()=>{
        document.querySelector('.header__navigation-search').classList.toggle('active')
    }
    return (
        <div className="header">
            <div className="header__container">
                <div className="container">
                    <div className="header__wrapper">
                        <a className="header__logo">
                            <img src={logo} alt="" />
                        </a>
                        <ul className="header__navigation">
                            <li className="header__navigation-search">
                                <div onClick={handleMobileSearch}>
                                    <span href="" className="search__button" >Duyệt tìm</span>
                                    <span className="header__avatar-arrow"></span>
                                </div>
                                <ul className="menu__mobile">
                                    <span className="header__avatar-arrow-up"></span>
                                    <li className="menu__mobile-tab"><a href="" >Trang chủ</a></li>
                                    <li className="menu__mobile-tab"><a href="">Phim T.hình</a></li>
                                    <li className="menu__mobile-tab"><a href="">Phim</a></li>
                                    <li className="menu__mobile-tab"><a href="">Mới & Phổ biến</a></li>
                                    <li className="menu__mobile-tab"><a href="">Danh sách của tôi</a></li>
                                </ul>
                            </li>
                            <li className="header__navigation-tab">
                                <a href="" className="tab" >Trang chủ</a>
                            </li>
                            <li className="header__navigation-tab">
                                <a href="" className="tab">Phim T.hình</a>
                            </li>
                            <li className="header__navigation-tab">
                                <a href="" className="tab">Phim</a>
                            </li>
                            <li className="header__navigation-tab">
                                <a href="" className="tab">Mới & Phổ biến</a>
                            </li>
                            <li className="header__navigation-tab">
                                <a href="" className="tab">Danh sách của tôi</a>
                            </li>
                        </ul>
                        <div className="header__right">
                            <FontAwesomeIcon className="icon" icon="search"></FontAwesomeIcon>
                            <FontAwesomeIcon className="icon" icon="bell"></FontAwesomeIcon>
                            <div className="header__avatar">
                                <img src={avatar} alt="" />
                                <span className="header__avatar-arrow"></span>
                                <div className="account__wrap">
                                    <span className="header__avatar-arrow-up"></span>
                                    <ul className="account__list">
                                        <li className="account__list-item">
                                            <img src={avatar} className="account__item-image" alt="" />
                                            <span className="account__item-name">Thien</span>
                                        </li>
                                        <li className="account__list-item">Quản lí hồ sơ</li>
                                    </ul>
                                    <ul className="account__list">
                                        <a href=""><span>Tài khoản</span></a>
                                        <a href="">
                                            <span>
                                                Trung tâm trợ giúp
                                            </span>
                                        </a>
                                        <a href=""><span>Đăng xuất khỏi Netflix</span></a>
                                    </ul>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Header
