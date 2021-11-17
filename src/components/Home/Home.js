import React,{useEffect,useState} from 'react'
import './Home.css'
import background from '../../image/background.png'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import axios from 'axios'
import Slider from "react-slick";
import Header from '../Header/Header'
import Footer from '../Footer/Footer'
import FilmList from './../FilmList/FilmList';
function Home() {

    return (
        <div className="home">
            <Header cate="home"></Header>
            <div className="home__start">
                <div className="home__start-wrapper">
                    <img className="home__start-background" src="https://occ-0-325-395.1.nflxso.net/dnm/api/v6/LmEnxtiAuzezXBjYXPuDgfZ4zZQ/AAAABc5MwMGTLgLIUHz4GoejmJxHbbebq628L2xETbeouq62894K4b2RewxTb2-2T2zN3u7CYHHss7rDZX40gEGY3QebyVFnybJJBpqq.webp?r=047" alt="" />
                    <div className="home__start-info">
                        Vòng xoáy dữ dội của những lời dối trá, sự phản bội và lòng thù hận xé tan cuộc hôn nhân tưởng chừng như hoàn hảo giữa một vị bác sĩ và một nhà làm phim.
                    </div>
                    <div className="home__start-button">
                        <span className="play__button">
                            <FontAwesomeIcon className="play__arrow" icon="caret-right"></FontAwesomeIcon>
                            <span>Phát</span>
                        </span>
                        <span className="info__button">
                            <FontAwesomeIcon className="info__icon" icon="info-circle"></FontAwesomeIcon>
                            <span>Thông tin khác</span>
                        </span>
                    </div>
                </div>
                <div className="home__start-right">
                    <span className="replay__button">
                        <FontAwesomeIcon className="undo__icon" icon="undo-alt"></FontAwesomeIcon>
                    </span>
                    <span className="home__start-age">16+</span>
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
                        Hiện đang hiện hành
                        <span className="watch__all">
                            <span>Xem tất cả</span>
                            <FontAwesomeIcon icon="chevron-right" className="home__slider-arrowright"></FontAwesomeIcon>
                        </span>
                    </span>
                </a>
                <FilmList></FilmList>
            </div>
            <Footer></Footer>
        </div>
    )
}

export default Home
