import React from 'react'
import IsLogin from './Utils'

export default function Pannel() {
    IsLogin('7')
  return (
    <>
        {IsLogin ? (<h1>hi</h1>) : (<h1>by</h1>)}
        <h1>hi</h1>
    </>
  )
}
