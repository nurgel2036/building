import React from 'react'
import {VscCallIncoming} from 'react-icons/vsc'
import {AiFillUnlock} from 'react-icons/ai'
import {TfiLocationPin} from 'react-icons/tfi'
import './Colorbeauty.scss'

 function Colorbeauty() {
  return (
    <div className='out-colorbeauty'>
      <div className="in-colorbeauty">
        <div className="colorbeauty-block1">
            <AiFillUnlock className='AiFillUnlock'/>
            <div className="vremya"><span>мы открыты по будням</span><h5>7:00 - 19:00</h5></div>
        </div>
        <div className="colorbeauty-block2">
        <VscCallIncoming className='VscCallIncoming'/>
            <div className="vremya"><span>есть вопросы?</span><h5>0 554 458 010</h5></div>
        </div>
        <div className="colorbeauty-block1">
        <TfiLocationPin className='AiFillUnlock' color='white'/>
            <div className="vremya"><span>наш аддресс:</span><h5>г.Ош ул.Масалиева</h5></div>
        </div>
      </div>
    </div>
  )
}
export default Colorbeauty
