import React from 'react';
import {FiMail} from 'react-icons/fi'
import {BiPhoneCall} from 'react-icons/bi'
import './Hoverunder.scss'

const Hoverunder = ({ avatar, full_name, occupation}) => {
    return (
        <div className='hoverunder'>
            <div className="hoverunder-wrapper">
                <div className="hoverunder-wrapper-in">
                    <img src={avatar} alt="" /> 
                </div>
                <div className="under-hoverunder">
                    <h1>{full_name}</h1>
                    <p>{occupation}</p>
                    <div className="hoverunder-block"><FiMail className='FiMail'/> <span>info.datka@gmail.com</span></div>
                    <div className="hoverunder-block"><BiPhoneCall className='FiMail'/> <span>+996 554 458 010</span></div>
                </div>
            </div>
        </div>
    );
}

export default Hoverunder;
