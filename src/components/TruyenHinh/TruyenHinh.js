import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import React from 'react'
import FilmList from '../FilmList/FilmList'
import Footer from '../Footer/Footer'
import Header from '../Header/Header'
import  './TruyenHinh.css'

function TruyenHinh({cate}) {
    const cateClick=()=>{
        document.querySelector('.category__wrapper').classList.toggle('active')
    }
    return (
        <div className="cate">
            <Header></Header>
            <div className="cate__wrapper">
                <div className="cate__header">
                    <div className="cate__header-left">
                        <h1>{cate}</h1>
                        <span className="category__button" onClick={cateClick}>Thể loại
                            <FontAwesomeIcon className="caretdown" icon="caret-down"></FontAwesomeIcon>
                            <div className="category__wrapper">
                                <ul className="category__list">
                                    <li className="category__list-item">
                                        <a href="">
                                            Anh
                                        </a>
                                    </li>
                                    <li className="category__list-item">
                                        <a href="">
                                            Anime
                                        </a>
                                    </li>
                                    <li className="category__list-item">
                                        <a href="">
                                            Châu Á
                                        </a>
                                    </li>
                                    <li className="category__list-item">
                                        <a href="">Châu Âu</a>
                                    </li>
                                    <li className="category__list-item">
                                        <a href="">
                                            Hài
                                        </a>
                                    </li>
                                </ul>
                                <ul className="category__list">
                                    <li className="category__list-item">
                                        <a href="">
                                            Khoa học và thiên nhiên
                                        </a>
                                    </li>
                                    <li className="category__list-item">
                                        <a href="">
                                            Khoa học viễn tưởng & giả tưởng
                                        </a>
                                    </li>
                                    <li className="category__list-item">
                                        <a href="">
                                            Kinh dị
                                        </a>
                                    </li>
                                    <li className="category__list-item">
                                        <a href="">Lãng mạn</a>
                                    </li>
                                    <li className="category__list-item">
                                        <a href="">
                                            Mỹ
                                        </a>
                                    </li>
                                </ul>
                            </div>
                        </span>
                    </div>
                    <div className="cate__header-right">
                        <FontAwesomeIcon className="alignleft" icon="align-left"></FontAwesomeIcon>
                        <FontAwesomeIcon className="thlarge" icon="th-large"></FontAwesomeIcon>
                    </div>
                </div>
                <div className="home__slider">
                    <a href="" className="home__slider-header">
                        <span>
                            Hiện đang hiện hành
                            <span className="watch__all">
                                <span>Xem tất cả</span>
                                <FontAwesomeIcon icon="chevron-right" className="home__slider-arrowright"></FontAwesomeIcon>
                            </span>
                        </span>
                    </a>
                    <FilmList></FilmList>
                </div>
                <div className="home__slider">
                    <a href="" className="home__slider-header">
                        <span>
                            Danh sách tiếp tục xem của Hagan
                            <span className="watch__all">
                                <span>Xem tất cả</span>
                                <FontAwesomeIcon icon="chevron-right" className="home__slider-arrowright"></FontAwesomeIcon>
                            </span>
                        </span>
                    </a>
                    <FilmList></FilmList>
                </div>
                <div className="home__slider">
                    <a href="" className="home__slider-header">
                        <span>
                            Chương trình truyền hình cưng muốn xỉu 
                            <span className="watch__all">
                                <span>Xem tất cả</span>
                                <FontAwesomeIcon icon="chevron-right" className="home__slider-arrowright"></FontAwesomeIcon>
                            </span>
                        </span>
                    </a>
                    <FilmList></FilmList>
                </div>
                <div className="home__slider">
                    <a href="" className="home__slider-header">
                        <span>
                            Phổ biến trên Netflix
                            <span className="watch__all">
                                <span>Xem tất cả</span>
                                <FontAwesomeIcon icon="chevron-right" className="home__slider-arrowright"></FontAwesomeIcon>
                            </span>
                        </span>
                    </a>
                    <FilmList></FilmList>
                </div>
            </div>
            <Footer></Footer>
        </div>
    )
}

export default TruyenHinh
