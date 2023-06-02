import './App.css';
import GoUp from './components/goUp/goUp';
import Header from './components/header/Header';
import ControlledCarousel from './components/carousel/ControlledCarousel';
import Titles from './components/titles/titles';
import TriImages from './components/triImages/TriImages';
import Bigimage from './components/bigimage/Bigimage';
import Colorbeauty from './components/colorbeauty/Colorbeauty';
import Hoverunder from './components/hoverunder/Hoverunder';
import Topfooter from './components/topfooter/Topfooter';
import Subscribe from './components/subscribe/Subscribe';
import Footer from './Footer';
import UFooter from './components/u-footer/UFooter'

import 'bootstrap/dist/css/bootstrap.min.css';

function App() {
  const imgbuilderc1 = 'https://lh3.googleusercontent.com/b_aDBLsikkSj7_TVAXCSMYbLa9I7Ukk37yYp8V29W8h5hHcQZETLxrhBA57ZzB-Fd_MXcJ3Lggy4gxBqLFm3S6dKpiuwUCR0XVhAnRIM'
  const imgbuilderc2 = 'https://lh3.googleusercontent.com/0DXyWZLupLPpwt4oe-KdTlRJqzpF9NUFL6rpsnVIb6cdTlqEi_j8AlO4FJEtTEV4FVW6_vKafdFiPDqZ8wTI98INp1qQWGYodp90H6We'
  const imgbuilderc3 = 'https://lh3.googleusercontent.com/IMC2ZDIZOTbeCErwhEDltBe8OEDAOG33mjDPGFIr9Tc_SM6EHH1LZvbbDxkVnLTixMpineUqjF9TjygZwww9vN0FDiUhMdDOjBSa8Z9e'
  
  const avatar1 = 'https://lh3.googleusercontent.com/Z5wKfaDkI0z4JdnfpdWJLRR20k4HIEW5I9LdLuTOKmG90Tyq0gmczPmewrUps6Eh-5zbMHcIALyQdfY-sjo5uw6zxJiWsKL2kpt0tsBNkQ'
  const avatar2 = 'https://lh3.googleusercontent.com/iDuww9ZxSZuXFrhIAdDUL7dCWHdy_mfKpCzaU0S9zva53F8fTiaVL5G0t7sRgnUiUq9sBs_RarzcNhY2gRhHxOfJjkxjjHD7hr1AnY-r'
  const avatar3 = 'https://lh3.googleusercontent.com/XwTooyHco92rNxZHHk5KGMUnfIskHWSbPgsbVhbaqC9UmN4GX3FizKkBXHNcHMQlSqQoJ1AOBdjf3MEqEGssBq4KVrkfxRRR5B8D4O1Cbw'
  return (
    <div className="App">
      <Header/>
      <GoUp/>
      <ControlledCarousel/>
      <Titles title={'ПОСЛЕДНИЕ ПРОЕКТЫ'} title2={'Качественные сервисные возможности'}/>

      <div className='out-triimages'>
        <div className='in-triimages'>
          <TriImages sentence={'прочная система'} imgBuilder={imgbuilderc1} imgBuilderClass={'overlay-img1'}/>
          <TriImages sentence={'значение качеств'} imgBuilder={imgbuilderc2} imgBuilderClass={'overlay-img2'}/>
          <TriImages sentence={'виртуальный дизайн'} imgBuilder={imgbuilderc3} imgBuilderClass={'overlay-img3'}/>
        </div>
      </div>

      <Bigimage/>
      <Titles title={'ПОСЛЕДНИЕ ПРОЕКТЫ'}/>
      <Colorbeauty/>
      <Titles title={'эксперты'} title2={'НАШИ ЭКСПЕРТЫ'}/>

      <div className='out-triimages'>
        <div className='in-triimages'>
        <Hoverunder avatar={avatar1} full_name={'Джонc Кинг'} occupation={'Глава архитектуры'}/>
        <Hoverunder avatar={avatar2} full_name={'Джек Ханма'} occupation={'Лидер красоты'}/>
        <Hoverunder avatar={avatar3} full_name={'Том Стенсон'} occupation={'Глава по защите'}/>
        </div>
      </div>

      <Topfooter/>
      <Subscribe/>
      <Footer/>
      <UFooter/>
    </div>


  );
}

export default App;
