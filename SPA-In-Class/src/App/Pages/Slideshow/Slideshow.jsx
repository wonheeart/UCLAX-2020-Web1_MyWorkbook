import React from 'react';
import styled from 'styled-components';

import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from 'react-responsive-carousel';

import { slides } from './slidesData.js';

const Slideshow = () => {

    const renderSlides = () => {
        return slides.map((slide, idx) => {
            return (
                <div key={ idx }>
                    <img src={ slide.image } alt={ slide.title } />
                    <p classname="legend">{ slide.title }</p>
                </div>
            );
        });
    }

    return (
        <SlideshowStyled className='Slideshow'>
            <Carousel
                showThumbs={ false }
                showIndicators={ false }
                autoPlay={ true }
                infiniteLoop={ true }
                showArrows={ true }
                stopOnHover={ false }
            >
                { renderSlides() }
            </Carousel>
        </SlideshowStyled>
    );
}

export default Slideshow;

const SlideshowStyled = styled.div`

    .carousel .slide .legend {
        background-color: maroon;
        color: white;
    }
`;