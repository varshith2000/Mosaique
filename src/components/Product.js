import React, { useState, useEffect } from 'react';
import ReactDOM from 'react-dom';
import axios from 'axios';
import './Product.css';

function Product() {

    const url= 'http://103.7.8.89:8001/data/sensor/';
    const [product,setProduct]= useState(null)
    useEffect(() =>{
        axios.get(url).then(response => {
            setProduct(response.data)
    })
    },[url])

    if(product){
        return(
            <div  className='all'>
            <div className='temp'>
                <h1>{product.context[0].sensor}</h1>
                <h1>{product.context[0].date}</h1>
                <h1>{product.context[0].value}</h1>
            </div>
            <div className='temp'>
                <h1>{product.context[1].sensor}</h1>
                <h1>{product.context[1].date}</h1>
                <h1>{product.context[1].value}</h1>
            </div>
            <div className='temp'>
                <h1>{product.context[2].sensor}</h1>
                <h1>{product.context[2].date}</h1>
                <h1>{product.context[2].value}</h1>
            </div>
            </div>
        )
    }

    return(
        <div>

        </div>
    )
}

export default Product;