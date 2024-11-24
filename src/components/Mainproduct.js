import React from 'react'
import Header from './Header'
import './Product.css'
import Allproduct from './Allproduct'
import { Link } from 'react-router-dom'

export default function Mainproduct() {
  return (
    <>
        <Header />
        <div className='Allproduct-card'>
        {Allproduct.map(product => (
          <Link to={`/product/${product.id}`}>
                    <div>
                        <div>
                                <img src={product.img} />
                            <div>
                                <h1>{product.title}</h1>
                                <p>{product.des}</p>
                            </div>
                        </div>
                        <div className='add-product'>
                        <button>
                            </button>
                            <h4>{product.price}</h4>
                        </div>
                    </div>
                    </Link>
        ))}
        </div>
    </>
  )
}
