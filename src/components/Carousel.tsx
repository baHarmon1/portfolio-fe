import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from 'react-responsive-carousel';
import selfie from "../assets/images/selfie.jpeg"

export class DemoCarousel extends Component {
    render() {
        return (
            <Carousel
            infiniteLoop={true}
            useKeyboardArrows={true}
            dynamicHeight={true}
            >
                <div className='carousel-image-container'>
                    <img src={selfie} />
                    <p className="legend">Legend 1</p>
                </div>
                <div className='carousel-image-container'>
                    <img src={selfie} />
                    <p className="legend">Legend 2</p>
                </div>
                <div className='carousel-image-container'>
                    <img src={selfie} />
                    <p className="legend">Legend 3</p>
                </div>
            </Carousel>
        );
    }
};

// ReactDOM.render(<DemoCarousel />, document.querySelector('.demo-carousel'));

// Don't forget to include the css in your page

// Using webpack or parcel with a style loader
// import styles from 'react-responsive-carousel/lib/styles/carousel.min.css';

// Using html tag:
// <link rel="stylesheet" href="<NODE_MODULES_FOLDER>/react-responsive-carousel/lib/styles/carousel.min.css"/>