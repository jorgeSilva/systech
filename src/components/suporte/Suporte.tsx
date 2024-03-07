import React from 'react'
import style from './Suporte.module.css'
import wpp from '../../assets/Icon/whatsapp.svg'
import insta from '../../assets/Icon/instagram.svg'
import twitter from '../../assets/Icon/twitter.svg'
import whatsapp from '../../assets/Icon/whatsapp.svg'
import seta from '../../assets/Icon/chevron-down.svg'

const Suporte = () => {
  const [active, setActive] = React.useState<boolean>(false)
  const [id, setId] = React.useState<string | null>(null)
  function handleClick(e: any){
    setActive(!active)
    setId(e.target.id)    
  }

  return (
    <section className={style.suporte__container}>
      <div className={style.suporte__content__apresentation}>
        <h1 className={style.suporte__title}>Possíveis dúvidas sobre a SysTech Solutions<span style={{color:'var(--p1'}}>.</span></h1>
        <p className={style.suporte__text}>
          Esclareça toda e qualquer duvida perguntando diretamente ao nosso contato no whatsapp
          <a href='https://wa.me/5515997886834' className={style.saiba__text__cliente}><img src={wpp} className={style.saiba__img__whatsapp} alt="Icone whatsapp"/>
          </a>
        </p>
      </div>

      <section className={style.suporte__content}>
        {
          active && id === 'primeiro' ? 
          <div className={style.suporte__card} onClick={handleClick} id='primeiro'>
            <span className={style.suporte__card__span} id='primeiro'>
              <h1 className={style.suporte__card__title} id='primeiro'>
                Ferramentas de desenvolvimento e hospedagem de site.
              </h1>
              <span className={style.suporte__card__icon__open} id='primeiro'>
                <img src={seta} alt="Icone seta baixo" id='primeiro' />
              </span>
            </span>
            <p className={style.suporte__card__text} id='primeiro'>
              Plataformas web totalmente responsivas, desenvolvidas em React + TypeScript e node para manipulação do backend e construção de API's<span id='primeiro'>.</span><br/>
              Com informações produzidas pelo sistema, serão todas armazenadas em um banco de dados não relacional com "MongoDB"<span id='primeiro'>.</span><br />
              Hospedados nos servidores da Vercel dando maior velocidade e fluidez para o sistema.
            </p>
          </div>
          :
          <div className={style.suporte__card} onClick={handleClick} id='primeiro'>
            <span className={style.suporte__card__span} id='primeiro'>
              <h1 className={style.suporte__card__title} id='primeiro'>Ferramentas de desenvolvimento e hospedagem de site.</h1>
              <span className={style.suporte__card__icon__open} id='primeiro'>
                <img src={seta} alt="Icone seta baixo" id='primeiro' />
              </span>
            </span>
            <p className={style.suporte__card__text} id='primeiro'>Plataformas web totalmente...</p>
          </div>
        }

        {
          active && id === 'segundo' ? 
          <div className={style.suporte__card} onClick={handleClick} id='segundo'>
            <span className={style.suporte__card__span} id='segundo'>
              <h1 className={style.suporte__card__title} id='segundo'>
                Informações pertinentes a SysTech.
              </h1>
              <span className={style.suporte__card__icon__open} id='segundo'>
                <img src={seta} alt="Icone seta baixo" id='segundo' />
              </span>
            </span>
            <p className={style.suporte__card__text} id='segundo'>
              Formada unicamente por um membro responsável por todas as áreas do desenvolvimento, atuando no mercado de desde 2023, com 4 projetos reais em produção<span id='segundo'>.</span>
            </p>
          </div>
          :
          <div className={style.suporte__card} onClick={handleClick} id='segundo'>
            <span className={style.suporte__card__span} id='segundo'>
              <h1 className={style.suporte__card__title} id='segundo'>
                Informações pertinentes a SysTech.
              </h1>
              <span className={style.suporte__card__icon__open} id='segundo'>
                <img src={seta} alt="Icone seta baixo" id='segundo' />
              </span>
            </span>
            <p className={style.suporte__card__text} id='segundo'>
              Formada unicamente por...
            </p>
          </div>
        }

        {
          active && id === 'terceiro' ? 
          <div className={style.suporte__card} onClick={handleClick} id='terceiro'>
            <span className={style.suporte__card__span} id='terceiro'>
              <h1 className={style.suporte__card__title} id='terceiro'>
                Informações pertinentes ao único desenvolvedor.
              </h1>
              <span className={style.suporte__card__icon__open} id='terceiro'>
                <img src={seta} alt="Icone seta baixo" id='terceiro' />
              </span>
            </span>
            <p className={style.suporte__card__text} id='terceiro'>
              Jorge Lucas Ferreira Silva, fundador e único membro da "SysTech"<span id='terceiro'>.</span> <br />
              Com título em "Técnico em Desenvolvimeto de Sistemas" pela Escola Técnica do Estado de São Paulo, "ETEC Dr. Demétrio Azevedo Junior"<span id='terceiro'>.</span>
              <span id='terceiro'>.</span>
            </p>
          </div>
          :
          <div className={style.suporte__card} onClick={handleClick} id='terceiro'>
            <span className={style.suporte__card__span} id='terceiro'>
              <h1 className={style.suporte__card__title} id='terceiro'>
                Informações pertinentes ao único desenvolvedor.
              </h1>
              <span className={style.suporte__card__icon__open} id='terceiro'>
                <img src={seta} alt="Icone seta baixo" id='terceiro' />
              </span>
            </span>
            <p className={style.suporte__card__text} id='terceiro'>
              Jorge Lucas Ferreira Silva, fundador e...
            </p>
          </div>
        }
      </section>

      <div className={style.home__social__medias__container}>
          <p>Redes sociais</p>
          -
          <div className={style.home__social__medias__content}>
            <a href="https://www.instagram.com/_systech/">
              <img className={style.home__social__media} src={insta} alt="instagram SysTech" />
            </a>
            <a href="/">
              <img className={style.home__social__media} src={twitter} alt="twitter SysTech" />
            </a>
            <a href="https://wa.me/5515997886834">
              <img className={style.home__social__media} src={whatsapp} alt="Whatsapp SysTech"/>
            </a>
          </div>
      </div>
    </section>
  )
}

export default Suporte