import React from 'react'
import IsLogin from './utils'

export default function pannel() {
    IsLogin('7')
  return (
    <>
        {IsLogin ? (<h1>hi</h1>) : (<h1>by</h1>)}
    </>
  )
}
