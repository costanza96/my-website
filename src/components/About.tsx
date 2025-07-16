import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import '../assets/styles/Expertise.scss';
import '../assets/styles/About.scss';

function About() {
    const images = [
    require('../assets/images/adamello.jpeg'),
    require('../assets/images/adamello1.jpeg'),
    require('../assets/images/adamello2.jpeg'),
    require('../assets/images/bg1.jpeg'),
    require('../assets/images/clouds.jpeg'),
    require('../assets/images/colorful.jpeg'),
    require('../assets/images/glacier.jpeg'),
    require('../assets/images/hut.jpeg'),
    require('../assets/images/lake.jpeg'),
    require('../assets/images/palla_bianca.jpeg'),
    require('../assets/images/tl.jpeg'),
    require('../assets/images/tl2.jpeg'),
];

    const settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1,
        arrows: true,
        autoplay: true,
        autoplaySpeed: 3000,
        adaptiveHeight: true,
    };
    console.log(images)
    return (
        <div className="container" id="about">
            <div className="about-text-panel">
                <h1>About me</h1>
                <p>
                    Hello, My name is Costanza, I’m a data scientist focused on turning complex data into actionable insights.
                    I build machine learning models and pipelines in Python, with projects spanning company profiling,
                    sustainability analysis, and energy consumption estimation. Recently, I’ve specialized in financial data,
                    working on wealth estimation and LLM-based tools for credit risk and investment support.
                </p>
                <p>
                    Outside work, you’ll find me in the mountains either on my mountain bike or with a heavy backpack
                    or with my backcountry skiis on, chasing thrilling heights and taking mediocre pictures of breathtaking landscapes.
                    I'm also an insatiable reader,&nbsp;
                    <a
                        href="https://www.notion.so/My-Library-169977198510804297a0e794825e66e6?source=copy_link"
                        target="_blank"
                        rel="noreferrer"
                    >
                        check out my latest readings!
                    </a>
                </p>
            </div>
            {/* <div className="about-slideshow-panel">
                <Slider {...settings}>
                    {images.map((src, idx) => (
                        <div key={idx}>
                            <img src={src} alt={`slide ${idx + 1}`} className="about-slide-img" />
                        </div>
                    ))}
                </Slider>
            </div> */}
        </div>
    );
}

export default About;