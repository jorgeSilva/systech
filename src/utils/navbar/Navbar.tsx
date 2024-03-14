import React from 'react'
import style from  './Navbar.module.css'
import systech from '../../assets/home/SysTech.png'
import { Link } from 'react-router-dom'

const Navbar = () => {
  const navbar__content__relative = React.useRef<HTMLDivElement | null>(null)
  const navbar__content = React.useRef<HTMLDivElement | null>(null)
  const navbar__content__fixed = React.useRef<HTMLDivElement | null>(null)

  const homeRef = React.useRef<HTMLAnchorElement | null>(null)
  const saibaRef = React.useRef<HTMLAnchorElement | null>(null)
  const orcamentoRef = React.useRef<HTMLAnchorElement | null>(null)
  const suporteRef = React.useRef<HTMLAnchorElement | null>(null)

  const click = (e:any) => {            
    if(e.target.pathname === saibaRef.current?.pathname){
      orcamentoRef.current?.classList.remove("navbar__nav__active")
      suporteRef.current?.classList.remove("navbar__nav__active")
      saibaRef.current?.classList.add("navbar__nav__active")
    }else if(e.target.pathname === orcamentoRef.current?.pathname){
      saibaRef.current?.classList.remove("navbar__nav__active")
      orcamentoRef.current?.classList.add("navbar__nav__active")
      suporteRef.current?.classList.remove("navbar__nav__active")
    }else if(e.target.pathname === suporteRef.current?.pathname){
      saibaRef.current?.classList.remove("navbar__nav__active")
      orcamentoRef.current?.classList.remove("navbar__nav__active")
      suporteRef.current?.classList.add("navbar__nav__active")
    }else if(e.target.baseURI === homeRef.current?.baseURI){
      saibaRef.current?.classList.remove("navbar__nav__active")
      orcamentoRef.current?.classList.remove("navbar__nav__active")
      suporteRef.current?.classList.remove("navbar__nav__active")
    }
  }

  function handleContato(){
    window.location.href = "https://wa.me/5515997886834"
  }

  return (
    <header className={style.navbar__container}>
      <div ref={navbar__content__relative} className={style.navbar__content__relative}>
        <div ref={navbar__content__fixed} className={style.navbar__content__fixed}>
          <div ref={navbar__content} className={style.navbar__content}>
            <figure className={style.navbar__figure__Icon}>
              <Link ref={homeRef} onClick={click} to="/"><img src={systech} alt='Logo "SysTech"' className={style.navbar__icon}/></Link>
            </figure>

            <nav className={style.navbar__nav}>
              <ul>
                <li><Link ref={saibaRef} onClick={click} className={style.navbar__nav__button} to="/saiba-mais">Saiba mais</Link></li>
                <li><Link ref={orcamentoRef} onClick={click} className={style.navbar__nav__button} to="/metodo-pagamento">Orçamento</Link></li>
                <li><Link ref={suporteRef} onClick={click} className={style.navbar__nav__button} to="/suporte">Suporte</Link></li>
              </ul>
            </nav>
            
            <button onClick={handleContato} className={style.navbar__button}>
              Entrar em contato
            </button>
          </div>
        </div>
      </div>
    </header>
  )
}

export default Navbar