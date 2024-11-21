import React from 'react'
import Specificationscard from './Specificationscard'
import { Container } from 'react-bootstrap'


export default function Specifications() {
  return (
    <Container>
        <div className='specifications-dis'>
            <Specificationscard name='ارسال رایگان' des='بدون محدودیت در خرید'/>
            <Specificationscard name='بازگشت پول' des='7روز مهلت بازگشت پول' />
            <Specificationscard name='پشتیبانی 7 / 24' des='پشتیبانی آنلاین و دوستانه ما' />
            <Specificationscard name='تخفیف های ویژه' des='همیشه با تخفیف هستیم' />
            <Specificationscard name='ارسال سریع و امن' des='تحویل در 2 روز کاری' />
            <Specificationscard name='با کمترین قیمت کالا' des='پیش شما هستیم' />
        </div>
    </Container>
  )
}
