import React from 'react'
import LocalShippingOutlinedIcon from '@mui/icons-material/LocalShippingOutlined';
import './Specifications.css'

export default function Specificationscard(props) {
  return (
    <>
        <div className='Specifications'>
            <div>
                <LocalShippingOutlinedIcon />
            </div>
            <div>
                <h3>{props.name}</h3>
                <h4>{props.des}</h4>
            </div>
        </div>
    </>
  )
}
