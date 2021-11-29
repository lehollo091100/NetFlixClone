import React from 'react';
import FilmList from '../FilmList/FilmList';
import Footer from '../Footer/Footer';
import Header from '../Header/Header';
import './WatchPage.css';
import ReactPlayer from 'react-player';
function WatchPage() {
    
    return (
        <div>
            <Header cate="home"/>
            <div className="watchpage">
                <div className="watchpage__container">
                    <div className="watchpage__content">
                        Venom: đối mặt tử thủ
                    </div>
                    <div className="watchpage__text">
                        Venom: Let There Be Carnage (2021)
                    </div>
                    <div className="watchpage__video">
                    <ReactPlayer 
                        url='https://www.youtube.com/watch?v=ebgkBxF0KnU'
                        width="100%"
                        height="100%"
                        controls={true}
                    />
                    </div>
                </div>
                <div className="watchpage__button">
                    <button className="watchpage__button-like">
                    <box-icon name='like' animation='flashing' color='#f9f2f2' ></box-icon>
                        Like
                    </button>
                    <button className="watchpage__button-dislike">
                    <box-icon name='dislike' animation='flashing' color='#f9f2f2' ></box-icon>
                        Dislike
                    </button>

                </div>
                <div className="watchpage__detail-list">
                    <div className="title">
                        PHIM CÙNG THỂ LOẠI
                    </div>
                <FilmList></FilmList>
                </div>
            </div>
            <Footer/>
        </div>
    );
}

export default WatchPage
