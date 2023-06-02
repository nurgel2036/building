import React from 'react'
import HeaderFixed from './header-fixed/header_fixed'
import './Header.scss'

export default function Header() {
    return (
        <header>
            <tor className="outTor">
                <div className="inTor">
                    <img src="https://elitka.kg/images/builder/63edb80a4cb35_63edb80a4afb0.jpg" alt="" />
                    <div className="rightTor">
                        <div className="in-right-tor">
                            <img src="https://cdn-icons-png.flaticon.com/512/2838/2838912.png" alt="" />
                            <div className="in-in-right-tor">
                                <h3 className='in-in-right-tor-words'>Наше местоположение</h3>
                                <p className='in-in-right-tor-words-p'>Ош шаары</p>
                            </div>
                        </div>
                        <div className="in-right-tor">
                            <img src="https://static.vecteezy.com/system/resources/previews/000/581/999/original/email-icon-vector-illustration.jpg" alt="" />
                            <div className="in-in-right-tor">
                                <h3 className='in-in-right-tor-words'>Напишите нам в почту</h3>
                                <p className='in-in-right-tor-words-p'>datka.cons@gmail.com</p>
                            </div>
                        </div>
                        <button className='svasatsa'>
                            <span>СВЯЗАТЬСЯ</span>
                            <div className="overlay"></div>
                            <img src="https://cdn1.iconfinder.com/data/icons/lightly-selected/30/upper-right-480.png" alt="" color={'white'} />
                        </button>
                    </div>
                </div>
            </tor>
            <HeaderFixed/>
        </header>
    )
}
