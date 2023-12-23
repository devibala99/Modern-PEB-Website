import React, { useState, useEffect } from 'react';
import pic1 from '../images/s1.jpg'
import pic2 from '../images/s2.jpg'
import pic3 from '../images/s3.jpg'
import peb1 from '../images/prefabHouse1.jpg'
import indus from "../images/industry.jpg"
import ware from "../images/poultry.jpg"

const WorkHome = () => {
    const [backgroundImage, setBackgroundImage] = useState(0);
    const images = [
        pic1, pic2, pic3
    ];

    useEffect(() => {
        const interval = setInterval(() => {
            setBackgroundImage((prevImage) => (prevImage + 1) % images.length);
        }, 6000);

        return () => {
            clearInterval(interval);
        }
    }, [images.length]);

    const divStyle = {
        backgroundImage: `url(${images[backgroundImage]})`,
        backgroundSize: 'cover',
        backgroundRepeat: 'no-repeat',
        height: '100vh',
    }
    return (
        <div className='work-home-container'>
            <div className='works' style={divStyle}>
                <div className="work-desc">
                    <div className="work-home-content content1">

                    </div>
                    <div className="work-home-content content2">

                    </div>
                    <div className="work-home-content content3">

                    </div>
                </div>

            </div>
        </div>
    )
}

export default WorkHome
