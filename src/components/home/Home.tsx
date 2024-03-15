import React from 'react'
import style from './Home.module.css'
import blob from '../../assets/home/blub.svg'
import iphone from '../../assets/home/Iphone-min.png'
import mac from '../../assets/home/MacBook-min.png'
import insta from '../../assets/Icon/instagram.svg'
import twitter from '../../assets/Icon/twitter.svg'
import whatsapp from '../../assets/Icon/whatsapp.svg'

function Home() {

  function handleContato(){
    window.location.href = "https://wa.me/5515997886834"
  }

  return (
    <main className={style.home__container__main}>
      <section className={style.home__content__main}>
        <h1 className={style.home__h1}>Desenvolvimento de software para potencializar seu negócio.</h1>
        <h3 className={style.home__h3}>Transformando ideias em soluções.</h3>

        <figure className={style.home__container__blob__main}>
          <div className={style.home__content__blob}>
            <img className={style.home__blob} src={blob} alt="conteudo laranja que abrange as imagens" />
            <img className={style.home__mac} src={mac} alt="Laptop de exemplo." />
            <img className={style.home__iphone} src={iphone} alt="Celular de exemplo." />
          </div>
        </figure>

        <h2 className={style.home__h2}>Seu futuro digital começa aqui.</h2>

        <button onClick={handleContato} className={style.home__button__contato}>Entrar em contato</button>

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

      <figure className={style.home__container__blob}>
        <div className={style.home__content__blob}>
          <img className={style.home__blob} src={blob} alt="conteudo laranja que abrange as imagens" />
          <img className={style.home__mac} src={mac} alt="Laptop de exemplo." />
          <img className={style.home__iphone} src={iphone} alt="Celular de exemplo." />
        </div>
      </figure>
    </main>
  )
}

export default Home