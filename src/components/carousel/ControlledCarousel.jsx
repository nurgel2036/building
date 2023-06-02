import React from 'react';
import Carousel from 'react-bootstrap/Carousel';
import './carousel.scss'

import { BiPhoneCall } from 'react-icons/bi'


function ControlledCarousel() {
    const [index, setIndex] = React.useState(0);

    const handleSelect = (selectedIndex, e) => {
        setIndex(selectedIndex);
    };

    return (
        <Carousel activeIndex={index} onSelect={handleSelect} interval={3000} touch={true} controls={false}>
            <Carousel.Item>
                <img
                    className="d-block w-100"
                    src="https://img.freepik.com/free-photo/building-with-glass-walls-sunset_1127-2038.jpg?w=2000"
                    alt="First slide"
                />
                <Carousel.Caption>
                    <h3>
                        Добро пожаловать в DATKA Grand
                    </h3>
                    <p>Мы проводим <br /> индустриальные <br /> лидерческие решения</p>
                    <div className="button-number">
                        <button className='nachat'>
                            <span>НАЧАТЬ</span>
                            <div className="overlay"></div>
                        </button>
                        <div className="button-in-number">
                            <BiPhoneCall className='BiPhoneCall' />
                            <div className="button-in-in-number">
                                <span>звоните</span>
                                <a href='/'> 554 45 80 10</a>
                            </div>
                        </div>
                    </div>
                </Carousel.Caption>
            </Carousel.Item>
            <Carousel.Item >
                <img
                    className="d-block w-100"
                    src="https://media.istockphoto.com/id/1284999232/photo/from-an-idea-to-a-completed-project.jpg?s=1024x1024&w=is&k=20&c=u9slsixV4wRs9NbQih-dsj83cRIgE3ghuqw3fW29PAk="
                    alt="Second slide"
                />

                <Carousel.Caption>
                    <h3>
                        Добро пожаловать в DATKA Grand
                    </h3>
                    <p>Мы проводим <br /> индустриальные <br /> лидерческие решения</p>
                    <div className="button-number">
                        <button className='nachat'>
                            <span>НАЧАТЬ</span>
                            <div className="overlay"></div>
                        </button>
                        <div className="button-in-number">
                            <BiPhoneCall className='BiPhoneCall' />
                            <div className="button-in-in-number">
                                <span>звоните</span>
                                <a href='/'> 554 45 80 10</a>
                            </div>
                        </div>
                    </div>
                </Carousel.Caption>
            </Carousel.Item>
            <Carousel.Item>
                <img
                    className="d-block w-100"
                    src="https://c8.alamy.com/comp/2FWE4FM/construction-site-landscape-of-building-process-with-crane-bulldozer-excavator-and-concrete-mixer-machine-city-build-flat-vector-concept-2FWE4FM.jpg"
                    alt="Third slide"
                />

                <Carousel.Caption>
                    <h3>
                        Добро пожаловать в DATKA Grand
                    </h3>
                    <p>Мы проводим <br /> индустриальные <br /> лидерческие решения</p>
                    <div className="button-number">
                        <button className='nachat'>
                            <span>НАЧАТЬ</span>
                            <div className="overlay"></div>
                        </button>
                        <div className="button-in-number">
                            <BiPhoneCall className='BiPhoneCall' />
                            <div className="button-in-in-number">
                                <span>звоните</span>
                                <a href='/'> 554 45 80 10</a>
                            </div>
                        </div>
                    </div>
                </Carousel.Caption>
            </Carousel.Item>
        </Carousel>
    );
}
export default ControlledCarousel