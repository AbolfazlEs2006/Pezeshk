import React from 'react'
import Header from './Header'
import './Product.css'
import Allproduct from './Allproduct'
import { Link } from 'react-router-dom'
import Basket from './Basket'


export default function Mainproduct() {
  document.title = 'Products'

  return (
    <>
        <Header>
          <Basket />
        </Header>
        <div className='Allproduct-card'>
        {Allproduct.map(product => (
          <Link to={`/product/${product.id}`} style={{textDecoration: 'none'}}>
                    <div key={product.id}>
                      <div className='dis-products'>
                        <div className='products-img'>
                            <img src={product.imgg} alt={product.title}/>
                            <div className='about-products'>
                                <h1>{product.title}</h1>
                                <p>دسته: {product.des}</p>
                                <h5>تنها {product.count} در انبار باقی مانده است</h5>
                                <div className='price-products'>
                                  <h4>{product.price}</h4>
                                </div>
                            </div>
                        </div>
                      </div>
                    </div>
          </Link>
        ))}
        </div>
    </>
  )
}
