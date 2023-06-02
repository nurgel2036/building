import React from 'react'
import './titles.scss'

export default function Titles( {title,title2} ) {
  return (
    <div className='out-title'>
      <div className="in-title">
        <h4>
            {title}
        </h4>
        <h2>
            {title2}
        </h2>
      </div>
    </div>
  )
}
