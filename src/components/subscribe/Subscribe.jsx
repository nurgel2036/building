import React from 'react';
import './Subscribe.scss'

const Subscribe = () => {
    return (
        <div className='out-subscribe'>
            <div className="in-subscribe">
                <h1>Подпишитесь на наши журналы,<br /> для новых обновлений</h1>
                <div className="input-button">
                    <input type="text"  placeholder='Эмейл или аддресс' required />
                    <button className='nachat'>
                            <span>ПОДПИСАТЬСЯ</span>
                            <div className="overlay"></div>
                        </button>
                </div>
            </div>
        </div>
    );
}

export default Subscribe;
