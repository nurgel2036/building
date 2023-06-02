import React from 'react'
import {BsArrowRight} from 'react-icons/bs'
import {AiOutlineCheckCircle} from 'react-icons/ai'
import './Bigimage.scss'

export default function Bigimage() {
    return (
        <div className='out-bigimage'>
            <div className="in-bigimage">
                <div className="main-bigimage">
                    <img alt='' src='https://lh3.googleusercontent.com/ZDNa7NSTlZ-0IX6lt0uuyhSR-shPoGLAdpdqzPWDIjkALtWpPc5229rG1dxzcDoEkA0v9bVlBqax81TwqdFQm-uSGeHTwA_1PwyedtFsYg' />
                    <div className="in-bg-bigimage">
                        <h2>лидерческие развивития проект <br /> & жительство
                        </h2>
                        <div className="in-in-bg-bigimage">
                            <span>читать дальше</span>
                            <BsArrowRight className='BsArrowRight'/> 
                        </div>
                    </div>
                </div>
                <div className="bigimage-second">
                    <h1>последние проекты</h1>
                    <h2>мы зарегестрированы в <br /> рабочих департаментах</h2>
                    <div className="bigimage-second-block">
                        <button>о нас</button>
                        <button>видение</button>
                        <button>контакт</button>
                    </div>
                    <p>
                        Laoreet conubia parturient lacinia pulvinar senectus vel posuere proin nec
                        montes dapibus, elementum blandit sem et massa ornare habitasse cursus erat
                        nascetur, a sed placerat sagittis euismod.
                    </p>
                    <div className="bigimage-second-bigblock">
                        <div className="bigimage-second-bigblock-numbers">
                            <span>3572</span>
                            <h5>участвуют </h5>
                        </div>
                        <div className="bigimage-second-bigblock-row">
                            <div className="bigimage-second-bigblock-row1"><AiOutlineCheckCircle className='AiOutlineCheckCircle'/> <span>решение в любую секунду</span></div>
                            <div className="bigimage-second-bigblock-row1"><AiOutlineCheckCircle className='AiOutlineCheckCircle'/> <span>желательная цена  2 лет</span></div>
                            <div className="bigimage-second-bigblock-row1"><AiOutlineCheckCircle className='AiOutlineCheckCircle'/> <span>дружная & опытная комнада</span></div>
                        </div>
                  
                    </div>
                    <button className='nachat'>
                            <span>НАЧАТЬ</span>
                            <div className="overlay"></div>
                        </button>
                </div>

            </div>
        </div>
    )
}
