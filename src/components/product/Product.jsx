import React from 'react'
import './product.css'
function Product({img,link,alt}) {
    return (
        <div className='prod'>
            <div className="prod-browser">
                <div className="prod-circle"></div>
                <div className="prod-circle"></div>
                <div className="prod-circle"></div>
                <p className='card-title'>{alt}</p>
            </div>
            <a href={link} target="_blank" rel='noreferrer'>
                <img src={img} alt={alt} className="prod-img" />
            </a>
        </div>
    )
}

export default Product
