import { useState, useEffect } from 'react';
import './Gallery.css';

const Gallery: React.FC = () => {

    const images = [
        'https://carlosdigitalfotografo.com/wp-content/uploads/2020/06/carlos-digital-fotografo-24-2-1.jpg',
        'https://www.fotolive.tv/wp-content/uploads/featured-fotolive-jessica-xv-casual-.jpg',
        'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTJDqwRFUUbmr3po0xSj10f_HjKut_smSGt-Q&s',
        'https://images.squarespace-cdn.com/content/v1/5feba61e53772d5386a5f7a1/1640976003368-QSIP3D6B0ZB46PEKN7FN/Sesio%CC%81n%2BXV%2BCasual%2BFotografia-1.jpg',
        'https://images.squarespace-cdn.com/content/v1/5feba61e53772d5386a5f7a1/1640976348612-VIKFDQV4FSVTV6YH3UXT/Sesio%CC%81n%2BXV%2BCasual%2BFotografia-1-15.jpg',
        'https://clarissabell.com.mx/wp-content/uploads/2023/10/sesion-fotos-quincean%CC%83era-xv-formal-informal-la-ruina-hermosillo-sonora-34-682x1024.jpg',
    ];

    return (
        <div className="gallery__container">
            <img src='https://64.media.tumblr.com/e158f02792590e77cb845b80e8a13587/f4ff9c269cb80ec1-98/s1280x1920/781e4d59fe5cd1744b441658cb32b93c34ebc40d.gif'/>
            <h2 className='magic-text'>La galer&iacute;a encantada</h2>
            <div className="parent">
                {images.map((image, index) => (
                    <div className={`div${index+1}`} key={index}>
                        <img src={image} alt={`Image ${index + 1}`} />
                    </div>
                ))}
                
            </div>
        </div>
    );
};

export default Gallery;
