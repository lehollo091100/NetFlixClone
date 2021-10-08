import React, {useState,useEffect} from 'react'
import axios from 'axios'
import Slider from "react-slick";
import './FilmList.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
function FilmList() {
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
    const handleMuteItem=()=>{
        document.querySelector('.home__item-img .mute__icon').classList.toggle('mute')
    }
    const settings = {
        // className: "center",
        infinite: false,
        speed: 500,
        slidesToShow: 5,
        slidesToScroll: 5,      
        lazyLoad:true,
        // centerPadding: "60px",
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
    return (
        <div className="filmlist">
            <Slider {...settings}>
                    {
                        movieList&&movieList.map(movie=>(
                        <div className="home__slider-item">
                            <img className="home__slider-item-img" src={movie? baseUrl.concat(movie.poster_path):''} alt="" />
                            <div className="home__slider-detail">
                                {/* <div className="home__item-img">
                                    <img src={movie? baseUrl.concat(movie.poster_path):''} alt="" />
                                    <div className="mute__icon" onClick={handleMuteItem}>
                                        <FontAwesomeIcon className="iconvolumn" icon="volume-mute"></FontAwesomeIcon>
                                        <FontAwesomeIcon className="iconvolumn" icon="volume-up"></FontAwesomeIcon>
                                    </div>
                                </div> */}
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
    )
}

export default FilmList
