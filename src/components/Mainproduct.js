import React from 'react'
import Header from './Header'
import { Link } from 'react-router-dom'
import Allproduct from './Allproduct'
import LocalGroceryStoreOutlinedIcon from '@mui/icons-material/LocalGroceryStoreOutlined';
import './Product.css'
import Product from './ProductCard';

export default function Mainproduct() {
  return (
    <>
        <Header />
        {/* <div className='Allproduct-card'>
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
                            <LocalGroceryStoreOutlinedIcon />
                            </button>
                            <h4>{product.price}</h4>
                        </div>
                    </div>
                    </Link>
        ))}
        </div> */}
        <Product />
    </>
  )
}
