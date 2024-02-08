import React from 'react'
import style from  './Navbar.module.css'
import systech from '../../assets/Icon/SysTech.png'

const Navbar = () => {
  const [valueScroll, setValueScroll] = React.useState<number>(0)
  const navbar__content__relative = React.useRef<HTMLDivElement | null>(null)
  const navbar__content = React.useRef<HTMLDivElement | null>(null)
  const navbar__content__fixed = React.useRef<HTMLDivElement | null>(null)

  function verificarScroll(): void {
    const scrollAtual: number = document.documentElement.scrollTop;

    if (scrollAtual > valueScroll) {
      navbar__content__relative.current?.classList.add('nav-active-relative')
      navbar__content.current?.classList.add('nav-active')
      navbar__content__fixed.current?.classList.add('nav-active-fixed')
    } else if (scrollAtual < valueScroll) {
      navbar__content__relative.current?.classList.remove('nav-active-relative')
      navbar__content.current?.classList.remove('nav-active')
      navbar__content__fixed.current?.classList.remove('nav-active-fixed')
    } else {
        console.log('O scroll não mudou.');
    }

    setValueScroll(scrollAtual)
  }

  window.addEventListener('scroll', verificarScroll);

  return (
    <header className={style.navbar__container}>
      <div ref={navbar__content__relative} className={style.navbar__content__relative}>
        <div ref={navbar__content__fixed} className={style.navbar__content__fixed}>
          <div ref={navbar__content} className={style.navbar__content}>
            <figure className={style.navbar__figure__Icon}>
              <img src={systech} className={style.navbar__icon}/>
            </figure>

            <nav className={style.navbar__nav}>
              <ul>
                <li>
                  <a href="">Saiba mais</a>
                </li>
                <li>
                  <a href="/orcamento">Orçamento</a>
                </li>
                <li>
                  <a href="/suporte">Suporte</a>
                </li>
              </ul>
            </nav>
            
            <button className={style.navbar__button}>
              Entrar em contato
            </button>
          </div>
        </div>
      </div>
    </header>
  )
}

export default Navbar