import React from 'react';
import {FcIdea} from 'react-icons/fc'
import './Topfooter.scss'

const Topfooter = () => {
    return (
        <div className='bg-topfooter'>
            <div className="in-topfooter">
            <h1>последние проекты</h1>
            <h6>убедительные результаты для доверия <br /> без проверки</h6>
            <div className="topfooter-blocks">
                <div className="topfooter-block"><div className="icon"><FcIdea className='FcIdea'/></div><p>3526+</p><h4>тонны клиентов</h4></div>
                <div className="topfooter-block"><div className="icon"><FcIdea className='FcIdea'/></div><p>3081+</p><h4>завершенные проекты</h4></div>
                <div className="topfooter-block"><div className="icon"><FcIdea className='FcIdea'/></div><p>312+</p><h4>количество команд</h4></div>
                <div className="topfooter-block"><div className="icon"><FcIdea className='FcIdea'/></div><p>53+</p><h4>будущие проекты</h4></div>
            </div>
            </div>
        </div>
    );
}

export default Topfooter;
