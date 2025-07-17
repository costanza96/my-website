import adamello from '../assets/images/adamello.jpeg';
import adamello1 from '../assets/images/adamello1.jpeg';
import adamello2 from '../assets/images/adamello2.jpeg';
import bg1 from '../assets/images/bg1.jpeg';
import clouds from '../assets/images/clouds.jpeg';
import colorful from '../assets/images/colorful.jpeg';
import glacier from '../assets/images/glacier.jpeg';
import hut from '../assets/images/hut.jpeg';
import lake from '../assets/images/lake.jpeg';
import palla_bianca from '../assets/images/palla_bianca.jpeg';
import tl from '../assets/images/tl.jpeg';
import tl2 from '../assets/images/tl2.jpeg';
import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import '../assets/styles/Expertise.scss';
import '../assets/styles/About.scss';

function About() {
    const images = [
        adamello,
        adamello1,
        adamello2,
        bg1,
        clouds,
        colorful,
        glacier,
        hut,
        lake,
        palla_bianca,
        tl,
        tl2,
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
    return (
        <div className="container" id="about">
            <div className="about-text-panel">
                <h1>About me</h1>
                <p>
                    Hi, I’m Costanza — a data scientist passionate about turning complex data into meaningful, actionable insights.
                    I design and implement machine learning models and data pipelines in Python, with experience spanning company profiling,
                    sustainability metrics, and energy consumption analytics. Lately, my focus has shifted toward financial applications:
                    I’ve worked on personal wealth estimation and developed LLM-powered tools to support credit risk assessment and investment decisions.
                </p>
                <p>
                    I love what I do and part of that is knowing the landscape never stands still.
                    Working in AI means constantly staying on top of what’s new, separating genuine breakthroughs from hype, 
                    and embracing the next challenge.
                    I’m always looking to expand my skill set, whether it’s diving deeper into GenAI or picking up new tools that help me 
                    build and experiment faster.
                    Lately, I’ve been exploring frontend development to better prototype ideas end-to-end; 
                    this website is one of those side projects: a space to learn by doing while sharing what I care about.
                </p>
                <p>
                    When I’m not working, you’ll probably find me in the mountains riding my mountain bike, ski touring across backcountry trails, or
                    hiking with a heavy pack in search of new views (and taking mediocre photos of spectacular places). I’m also a voracious reader,&nbsp;
                    <a
                        href="https://www.notion.so/My-Library-169977198510804297a0e794825e66e6?source=copy_link"
                        target="_blank"
                        rel="noreferrer"
                    >
                        check out what I’ve been reading lately!
                    </a>
                </p>
            </div>
            <div className="about-slideshow-panel">
                <Slider {...settings}>
                    {images.map((src, idx) => (
                        <div key={idx}>
                            <img src={src} alt={`slide ${idx + 1}`} className="about-slide-img" />
                        </div>
                    ))}
                </Slider>
            </div>
        </div>
    );
}

export default About;