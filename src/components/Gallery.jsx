import React from 'react';
import "../pages/css/Gallery.css"; // Ensure this points to your CSS file

const Gallery = ({ images }) => {
    return (
        <div className="gallery-container">
            {images.map((image, index) => (
                <div key={index} className="gallery-image-container">
                    <img
                        className="gallery-image"
                        src={image.pictureURL}
                        alt={image.altText}
                    />
                    <div className="title-bar">
                        <span className="title-bar-text">{image.pictureName}</span>
                    </div>
                </div>
            ))}
        </div>
    );
};

export default Gallery;