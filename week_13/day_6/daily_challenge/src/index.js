import React from 'react';
import ReactDOM from 'react-dom/client';
import 'react-responsive-carousel/lib/styles/carousel.min.css';
import reportWebVitals from './reportWebVitals';
import { Carousel } from 'react-responsive-carousel';


const root = ReactDOM.createRoot(document.getElementById('root'));
const images = [
    {
        src: 'https://res.klook.com/image/upload/fl_lossy.progressive,q_65/c_fill,w_480,h_384/cities/jrfyzvgzvhs1iylduuhj.jpg',
        name: 'Hong Kong'
    },
    {
        src: 'https://res.klook.com/image/upload/fl_lossy.progressive,q_65/c_fill,w_480,h_384/cities/c1cklkyp6ms02tougufx.webp',
        name: 'Macao'
    },
    {
        src: 'https://res.klook.com/image/upload/fl_lossy.progressive,q_65/c_fill,w_480,h_384/cities/e8fnw35p6zgusq218foj.webp',
        name: 'Japan'
    },
    {
        src: 'https://res.klook.com/image/upload/fl_lossy.progressive,q_65/c_fill,w_480,h_384/cities/liw377az16sxmp9a6ylg.webp',
        name: 'Las Vegas'
    }
];
root.render(
    <React.StrictMode>
        <div style={{ width: '500px', margin: 'auto' }}>
            <Carousel>
                {images.map(image => {
                    return (
                        <div>
                            <img src={image.src} alt={image.name}/>
                            <p className={'Legend'}>{image.name}</p>
                        </div>
                    );
                })}
            </Carousel>
        </div>
    </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
