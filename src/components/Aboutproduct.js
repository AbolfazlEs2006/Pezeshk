import React, {useState} from 'react'
import Allproduct from './Allproduct'
import { useParams } from 'react-router-dom'
import Header from './Header'
import { Container } from 'react-bootstrap'
import Title from './title'
import Footer from './Footer'

export default function Aboutproduct() {

  const [count, setCount] = useState(1)

  let params = useParams()  

  let mainproduct = Allproduct.filter(product => {
    return product.id === params.productID
  })


  function plucCountHandeler () {
    setCount(prev => {
      return prev + 1
    })
  }
  function minesCountHandeler () {
    setCount(prev => {
      return prev - 1
    })
    if (count <= 0) {
      setCount(0)
    }
  }

  return (
    <>
    <Header />
    <Container>
      <div className='des-product'>
        <div>
          <div className='about-product-dis'>
            <h1>{mainproduct[0].title}</h1>
            <p>مشخصات: <br />{mainproduct[0].description} <br /> دسته بندی: {mainproduct[0].des}</p>
            <div className='product-price'>
              <div>
                <h5>موجود در انبار</h5>
                <h3>بدون دیدگاه</h3>
              </div>
              <div>
                <h6>{mainproduct[0].price} تومان</h6>
              </div>
            </div>
            <hr />
            <div className='addProduct'>
              <button onClick={plucCountHandeler}>+</button>
              <h3>{count}</h3>
              <button onClick={minesCountHandeler}>-</button>
              <div>
                <button>افزودن به سبد خرید</button>
              </div>
            </div>
          </div>
        </div>
        <div className='about-product-img'>
          <img src={mainproduct[0].img} />
        </div>
      </div>
    </Container>
    <Title title='دیدگاه شما' />
    <Container>
      <div className='pointview'>
        <h5>نشانی ایمیل شما منتشر نخواهد شد. بخش های مورد نیاز علامت گذاری شده است*</h5>
        <div>
          <input placeholder='نام و نام خانوادگی: ' />
          <input placeholder='پست الکترونیکی: ' />
        </div>
        <textarea placeholder='متن دیدگاه' />
        <button>ارسال دیدگاه</button>
      </div>
    </Container>
    <Footer />
    </>
  )
}