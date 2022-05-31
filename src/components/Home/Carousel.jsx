import React, { useEffect, useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faChevronLeft, faChevronRight } from '@fortawesome/free-solid-svg-icons';
import { Link } from 'react-router-dom';

const Carousel = () => {

    const images = ['img/slides/slide1.png', 'img/slides/slide2.png', 'img/slides/slide3.png'];
    const categories = ['2', '1', '3'];

    const [selectedIndex, setSelectedIndex] = useState(0);
    const [selectedImage, setSelectedImage] = useState(images[0]);
    const [categoryID, setcategoryID] = useState(categories[0]);

    useEffect(() => {
        const interval = setInterval(() => {
            selectNewImage(selectedIndex, images);
        }, 5000);
        return () => clearInterval(interval);
    });

    const selectNewImage = (index, image, next = true) => {
        const condition = next ? selectedIndex < images.length - 1 : selectedIndex > 0;
        const nextIndex = next ? 
            (condition ? selectedIndex + 1 : 0)
            : (condition ? selectedIndex - 1 : images.length - 1);

        setSelectedIndex(nextIndex);
        setSelectedImage(images[nextIndex]);
        setcategoryID(categories[nextIndex]);
    }

    const previous = () => {
        selectNewImage(selectedIndex, images, false);
    }

    const next = () => {
        selectNewImage(selectedIndex, images);
    }

    return (
        <>  
            <div className="imgBanner">

                <Link to={`category/${categoryID}`}>
                    <img src={ `${process.env.PUBLIC_URL}/${selectedImage}` } alt="Banner"/>
                </Link>
                
                <button onClick={ previous } className="left">
                    <FontAwesomeIcon icon={faChevronLeft}/>
                </button>
                <button onClick={ next } className="right">
                    <FontAwesomeIcon icon={faChevronRight}/>
                </button>
            </div>
            
        </>
    )
}

export default Carousel