import React from 'react'
import Slider from "react-slick";
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import img1 from '../assets/img/Screenshot (2).png'
import img2 from '../assets/img/Screenshot (6).png'
import img3 from '../assets/img/ruangan-camera1.png'
import bgAbout from '../assets/img/re.png'

export const About = () => {
    const settings = {
        dots: true,
        autoplay: true,
        infinite: true,
        speed: 500,
        slidesToShow: 3,
        slidesToScroll: 1
    };

    return (
        <div className='about'>
            <div className="container">
                <div className="about__col">
                    <div className="about__row">
                        <div className="about__text__col">
                            <h1 className='about__title'>about</h1>
                            <span className='about__desc'>
                                I'm a Frontend Web Developer.
                            </span>
                            <p className='about__p'>Saya Lahir pada tahun 2002, saya menyukai hal-hal baru seperti teknologi, dan menikmati kopi, musik adalah hobiku.</p>
                        </div>
                        <div className="about__wrapp__image">
                            <img src={bgAbout} alt="" />
                        </div>
                    </div>
                    <div className="about__galery">
                        <div className="container-galery">
                            <Slider {...settings}>
                                <div>
                                    <img src={img1} alt="" />
                                </div>
                                <div>
                                    <img src={img2} alt="" />
                                </div>
                                <div>
                                    <img src={img3} alt="" />
                                </div>
                                <div>
                                    <img src={img1} alt="" />
                                </div>
                                <div>
                                    <img src={img2} alt="" />
                                </div>
                                <div>
                                    <img src={img3} alt="" />
                                </div>
                            </Slider>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
