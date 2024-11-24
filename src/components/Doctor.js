import React from 'react'
import CardDoctor from './CardDoctor';
import './Doctor.css'
import { Container } from 'react-bootstrap';


export default function Doctor() {
  return (
        <Container>
            <div className='doctor-card mt-3'>
                <CardDoctor img='../img/littleimg-1.png' name='زهرا حیدری' des='کارشناس مراقبت های پوستی' />
                <CardDoctor img='../img/littleimg-2.png' name='روژینا موسوی' des='تراپیست ، نروتراپیست' />
                <CardDoctor img='../img/littleimg-3.png' name='علی جعفری' des='متخصص گوارش' />
                <CardDoctor img='../img/littleimg-4.png' name='فریما عبدلاحی' des='متخصص دندانپزشکی' />
            </div >
        </Container>
  );
}