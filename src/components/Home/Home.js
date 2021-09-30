import React,{useEffect,useState} from 'react'
import './Home.css'
import background from '../../image/background.png'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import axios from 'axios'
import Slider from "react-slick";
function Home() {
    const baseUrl='https://image.tmdb.org/t/p/original';
    const [movieList,setMovieList]=useState([])
    useEffect(() => {
        axios.get('https://api.themoviedb.org/3/movie/popular?api_key=070460ee0b557df99bd8fd941d183e23')
        .then(function(response){
            setMovieList(response.data.results);
        })
        .catch(function(error){
            console.log(error)
        })
    }, [])
    const settings = {
        infinite: false,
        speed: 500,
        slidesToShow: 6,
        slidesToScroll: 6,      
        responsive: [
            {
              breakpoint: 1024,
              settings: {
                infinite: false,
                speed: 500,
                slidesToShow: 4,
                slidesToScroll: 4,
              }
            },
            {
              breakpoint: 768,
              settings: {
                infinite: false,
                speed: 500,
                slidesToShow: 3,
                slidesToScroll: 3,
              }
            },
            {
              breakpoint: 480,
              settings: {
                slidesToShow: 2,
                slidesToScroll: 2
              }
            }
          ]
      };
      const handleMuteItem=()=>{
          document.querySelector('.home__item-img .mute__icon').classList.toggle('mute')
      }
    return (
        <div className="home">
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
                <Slider {...settings}>
                    {
                        movieList&&movieList.map(movie=>(
                        <div className="home__slider-item">
                            <img className="home__slider-item-img" src={movie? baseUrl.concat(movie.poster_path):''} alt="" />
                            <div className="home__slider-detail">
                                <div className="home__item-img">
                                    <img src={movie? baseUrl.concat(movie.poster_path):''} alt="" />
                                    <div className="mute__icon" onClick={handleMuteItem}>
                                        <FontAwesomeIcon className="iconvolumn" icon="volume-mute"></FontAwesomeIcon>
                                        <FontAwesomeIcon className="iconvolumn" icon="volume-up"></FontAwesomeIcon>
                                    </div>
                                </div>
                                <div className="detail__item-button">
                                    <div className="item__button-left">
                                        <span>
                                            <FontAwesomeIcon className="icon" icon="play"></FontAwesomeIcon>
                                        </span><span>
                                            <FontAwesomeIcon className="icon" icon="plus"></FontAwesomeIcon>
                                        </span><span>
                                            <FontAwesomeIcon className="icon" icon="thumbs-up"></FontAwesomeIcon>
                                        </span><span>
                                            <FontAwesomeIcon className="icon" icon="thumbs-down"></FontAwesomeIcon>
                                        </span>
                                    </div>
                                    <div className="item__button-right">
                                        <span>
                                            <FontAwesomeIcon className="icon" icon="chevron-down"></FontAwesomeIcon>
                                        </span>
                                    </div>
                                </div>
                                <div className="detail__item-info">
                                    <span className="item__similarity">
                                        Độ trùng : 98%
                                    </span>
                                    <span className="item__age">
                                        18+
                                    </span>
                                    <span className="iem__season">
                                        3 Mùa
                                    </span>
                                    <span className="item__standard">HD</span>
                                </div>
                                <div className="detail__item-categories">
                                    <span>Bạo lực-</span>
                                    <span>Thời kì lịch sử-</span>
                                    <span>Chính kịch</span>
                                </div>
                            </div>
                        </div>
                        ))
                    }
                    
                    
                </Slider>
            </div>
            <div className="home__slider">
                <a href="" className="home__slider-header">
                    <span>
                        Top 10 tại Việt Nam hôm nay
                        <span className="watch__all">
                            <span>Xem tất cả</span>
                            <FontAwesomeIcon icon="chevron-right" className="home__slider-arrowright"></FontAwesomeIcon>
                        </span>
                    </span>
                </a>
                <Slider {...settings}>
                    {
                        movieList&&movieList.map(movie=>(
                        <div className="home__slider-item">
                            <img className="home__slider-item-img" src={movie? baseUrl.concat(movie.poster_path):''} alt="" />
                            <div className="home__slider-detail">
                                <div className="home__item-img">
                                    <img src={movie? baseUrl.concat(movie.poster_path):''} alt="" />
                                    <div className="mute__icon" onClick={handleMuteItem}>
                                        <FontAwesomeIcon className="iconvolumn" icon="volume-mute"></FontAwesomeIcon>
                                        <FontAwesomeIcon className="iconvolumn" icon="volume-up"></FontAwesomeIcon>
                                    </div>
                                </div>
                                <div className="detail__item-button">
                                    <div className="item__button-left">
                                        <span>
                                            <FontAwesomeIcon className="icon" icon="play"></FontAwesomeIcon>
                                        </span><span>
                                            <FontAwesomeIcon className="icon" icon="plus"></FontAwesomeIcon>
                                        </span><span>
                                            <FontAwesomeIcon className="icon" icon="thumbs-up"></FontAwesomeIcon>
                                        </span><span>
                                            <FontAwesomeIcon className="icon" icon="thumbs-down"></FontAwesomeIcon>
                                        </span>
                                    </div>
                                    <div className="item__button-right">
                                        <span>
                                            <FontAwesomeIcon className="icon" icon="chevron-down"></FontAwesomeIcon>
                                        </span>
                                    </div>
                                </div>
                                <div className="detail__item-info">
                                    <span className="item__similarity">
                                        Độ trùng : 98%
                                    </span>
                                    <span className="item__age">
                                        18+
                                    </span>
                                    <span className="iem__season">
                                        3 Mùa
                                    </span>
                                    <span className="item__standard">HD</span>
                                </div>
                                <div className="detail__item-categories">
                                    <span>Bạo lực-</span>
                                    <span>Thời kì lịch sử-</span>
                                    <span>Chính kịch</span>
                                </div>
                            </div>
                        </div>
                        ))
                    }
                </Slider>
            </div>
        </div>
    )
}

export default Home
