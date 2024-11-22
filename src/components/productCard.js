import React, { useRef, useState } from 'react';
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';
import { Container } from 'react-bootstrap';
import KeyboardArrowLeftIcon from '@mui/icons-material/KeyboardArrowLeft';
import LocalGroceryStoreOutlinedIcon from '@mui/icons-material/LocalGroceryStoreOutlined';
// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/bundle';

import { Link } from 'react-router-dom';

// import required modules
import { Pagination } from 'swiper/modules';
import './Product.css'

export default function Product() {
  return (
    <>
        <Container>
      <Swiper
        slidesPerView={3}
        spaceBetween={60}
        pagination={{
            clickable: true,
        }}
        modules={[Pagination]}
        className="mySwiper mt-3 mb-5 Services-swiper swiper-product"
        >
        <SwiperSlide className='Product-swip'>
            <Link to={'/product'}>
            <div>
                <div>
                        <img src='./img/tabsanj-1.png' />
                    <div>
                        <h1>برس پاک سازی میوتو</h1>
                        <p>دماسنج | تب سنج</p>
                    </div>
                </div>
                <div className='add-product'>
                <button>
                    <LocalGroceryStoreOutlinedIcon />
                    </button>
                    <h4>700,00</h4>
                </div>
            </div>
            </Link>
        </SwiperSlide>
        <SwiperSlide className='Product-swip'>
            <Link to={'/product'}>
            <div>
                <div>
                        <img src='./img/bokhor-2.png' />
                    <div>
                        <h1>دستگاه بخور و رطوبت ساز</h1>
                        <p>محصولات پوستی | تب سنج</p>
                    </div>
                </div>
                <div className='add-product'>
                <button>
                    <LocalGroceryStoreOutlinedIcon />
                    </button>
                    <h4>2,600,000</h4>
                </div>
            </div>
            </Link>
        </SwiperSlide>
        <SwiperSlide className='Product-swip'>
            <Link to={'/product'}>
            <div>
                <div>
                        <img src='./img/bokhor-3.png' />
                    <div>
                        <h1>دستگاه بخور سرد امسیگ</h1>
                        <p>محصولات پوستی</p>
                    </div>
                </div>
                <div className='add-product'>
                <button>
                    <LocalGroceryStoreOutlinedIcon />
                    </button>
                    <h4>2,500,000</h4>
                </div>
            </div>
            </Link>
        </SwiperSlide>
        <SwiperSlide className='Product-swip'>
            <Link to={'/product'}>
            <div>
                <div>
                        <img src='./img/hava-1.png' />
                    <div>
                        <h1>دستگاه بخور سرد و گرم درما</h1>
                        <p> تب سنج</p>
                    </div>
                </div>
                <div className='add-product'>
                    <button>
                    <LocalGroceryStoreOutlinedIcon />
                    </button>
                    <h4>6,000,000</h4>
                </div>
            </div>
            </Link>
        </SwiperSlide>

      </Swiper>
    </Container></>
  )
}
