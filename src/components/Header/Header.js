import React, {useEffect,useState} from 'react'
import axios from 'axios'
import './Header.css'
import logo from '../../image/netflixlogo.png'
import avatar from '../../image/avatar.png'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
function Header() {
    const handleMobileSearch=()=>{
        document.querySelector('.header__navigation-search').classList.toggle('active')
    }
    const [movieList,setMovieList]=useState([])
    useEffect(() => {
        axios.get('https://api.themoviedb.org/3/movie/popular?api_key=070460ee0b557df99bd8fd941d183e23')
        .then(function(response){
            setMovieList(response.data.results.slice(0,6));
        })
        .catch(function(error){
            console.log(error)
        })
    }, [])
    return (
        <div className="header">
            <div className="header__container">
                <div className="container">
                    <div className="header__wrapper">
                        <a className="header__logo" href="/home">
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
                                    <li className="menu__mobile-tab"><a href="/truyenhinh">Phim T.hình</a></li>
                                    <li className="menu__mobile-tab"><a href="/phim">Phim</a></li>
                                    <li className="menu__mobile-tab"><a href="/moivaphobien">Mới & Phổ biến</a></li>
                                    <li className="menu__mobile-tab"><a href="/mylist">Danh sách của tôi</a></li>
                                </ul>
                            </li>
                            <li className="header__navigation-tab">
                                <a href="/home" className="tab" >Trang chủ</a>
                            </li>
                            <li className="header__navigation-tab">
                                <a href="/truyenhinh" className="tab">Phim T.hình</a>
                            </li>
                            <li className="header__navigation-tab">
                                <a href="/phim" className="tab">Phim</a>
                            </li>
                            <li className="header__navigation-tab">
                                <a href="/moivaphobien" className="tab">Mới & Phổ biến</a>
                            </li>
                            <li className="header__navigation-tab">
                                <a href="/mylist" className="tab">Danh sách của tôi</a>
                            </li>
                        </ul>
                        <div className="header__right">
                            <FontAwesomeIcon className="icon" icon="search"></FontAwesomeIcon>
                            <div className="header__noti">
                                <FontAwesomeIcon className="icon" icon="bell"></FontAwesomeIcon>
                                <ul className="noti__list">
                                    {movieList && movieList.map(movie=>(
                                        <li className="noti__list-item">
                                            <img src={'https://image.tmdb.org/t/p/original'.concat(movie.backdrop_path)} alt="" className="noti__image" />
                                            <div className="noti__detail">
                                                <div className="noti__detail-title">
                                                    {movie.original_title}
                                                </div>
                                                <span className="noti__detail-date">
                                                    {movie.release_date}
                                                </span>
                                            </div>
                                        </li>
                                    ))}
                                    
                                </ul>
                            </div>
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
