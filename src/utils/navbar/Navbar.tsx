import React from 'react'
import style from  './Navbar.module.css'
import systech from '../../assets/home/SysTech.png'

const Navbar = () => {
  const [valueScroll, setValueScroll] = React.useState<number>(0)
  const navbar__content__relative = React.useRef<HTMLDivElement | null>(null)
  const navbar__content = React.useRef<HTMLDivElement | null>(null)
  const navbar__content__fixed = React.useRef<HTMLDivElement | null>(null)

  function verificarScroll() {
    const scrollAtual: number = document.documentElement.scrollTop;

    console.log(scrollAtual);
    

    if (scrollAtual > valueScroll) {
      // console.log('aumentou');
      navbar__content__relative.current?.classList.add('nav-active-relative')
      navbar__content.current?.classList.add('nav-active')
      navbar__content__fixed.current?.classList.add('nav-active-fixed')
    } else if (scrollAtual <= 1.6) {
      navbar__content__relative.current?.classList.remove('nav-active-relative')
      navbar__content.current?.classList.remove('nav-active')
      navbar__content__fixed.current?.classList.remove('nav-active-fixed')      
    }

    setValueScroll(scrollAtual)
  }

  window.addEventListener('scroll', verificarScroll);

  const url = document.documentElement.baseURI
  const split_URL = url.split("/").slice(-1)
  const [link, setLink] = React.useState<string | null>(null)

  React.useEffect(() => {
    setLink(String(split_URL))
  }, [split_URL])

  return (
    <header className={style.navbar__container}>
      <div ref={navbar__content__relative} className={style.navbar__content__relative}>
        <div ref={navbar__content__fixed} className={style.navbar__content__fixed}>
          <div ref={navbar__content} className={style.navbar__content}>
            <figure className={style.navbar__figure__Icon}>
              <a href="/">
                <img src={systech} alt='Logo "SysTech"' className={style.navbar__icon}/>
              </a>
            </figure>

            <nav className={style.navbar__nav}>
              <ul>
                <li>
                  {
                    link === "saiba-mais" ?
                    <a href="/saiba-mais" className={style.navbar__nav__active} >Saiba mais</a>
                    :
                    <a href="/saiba-mais" >Saiba mais</a>
                  }
                </li>
                <li>
                  {
                    link === "metodo-pagamento" ?
                    <a href="/metodo-pagamento" className={style.navbar__nav__active}>
                      Orçamento
                    </a>
                    :
                    <a href="/metodo-pagamento">Orçamento</a>
                  }
                </li>
                <li>
                  {
                    link === "suporte" ?
                    <a href="/suporte" className={style.navbar__nav__active}>Suporte</a>
                    :
                    <a href="/suporte">Suporte</a>
                  }
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