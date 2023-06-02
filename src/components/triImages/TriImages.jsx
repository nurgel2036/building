import React from 'react'
import './TriImages.scss'

export default function TriImages({sentence,imgBuilder,imgBuilderClass}) {
  return (
    <div className='all-img-under'>
      <div className={imgBuilderClass}>
        <img src={imgBuilder} alt="" className='img-builder-class' />
      </div>    
      <div className="all-img-under-under">
        <h6>{sentence}</h6>
        <p>Люблю людей потому что они хорошо  работают и иногда развлекают</p>
        <button className='uznat'><div className="overlay"></div><span>Узнать больше</span></button>
      </div>
    </div>
  )
}

