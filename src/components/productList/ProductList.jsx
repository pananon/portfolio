import React from 'react'
import Product from '../product/Product.jsx'
import './productList.css'
import {products} from '../../data'


function ProductList() {
    return (
        <div className='prodList'>
            <div className="prodList-texts">
                <h1 className="prodList-title">
                    Create & Inspire.
                </h1>
                <p className="prodList-desc">
                    It's a creative shit 
                </p>
            </div>
            <div className="prodList-list">
                {products.map((item)=>(
                    <Product key={item.id} img={item.img} link={item.link} alt={item.alt}/>
                ))}
                
            </div>
        </div>
    )
}

export default ProductList
