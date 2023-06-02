import React from 'react'
import '../Header.scss'

export default function HeaderFixed() {
  const [isFixed,setFixed] = React.useState(false)
  React.useEffect(()=>{
    const handleScroll = () => {
      const scrollTop = window.pageYOffset;
      setFixed(scrollTop > 140)
    };
    window.addEventListener('scroll',handleScroll);
    return () => {
      window.removeEventListener('scroll',handleScroll);
    }
  },[])
  return (
    <header>
      
      <div className={isFixed ? 'out-header fixed' : 'out-header'}>
        <div className="in-header">
          <h1 className="header-words">Главная</h1>
          <h1 className="header-words">Контакты</h1>
        </div>
      </div>
    </header>
  )
}
