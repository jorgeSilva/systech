import React from 'react'
import style from './Footer.module.css'
import systech from '../../assets/home/SysTech-min.png'
import IconWhatsapp from '../Icons/whatsapp-icon'
import IconInstagram from '../Icons/instagram-icon'
import IconEmail from '../Icons/email-icon'

const Footer = () => {
  return (
    <footer className={style.footer__container}>
      <section className={style.footer__content}>
        <div className={style.footer__list__container}>
          <h1 className={style.footer__h1}> <span>01/</span> Paginas do síte</h1>

          <ul>
            <li>
              <a href="/saiba-mais">Saiba Mais</a>
              <a href="/metodos-pagamento">Orçamento</a>
              <a href="/suporte">Suporte</a>
            </li>
          </ul>
        </div>

        <div className={style.footer__list__container}>
          <h1 className={style.footer__h1}> <span>02/</span> Contatos</h1>
          <ul>
            <li>
              <a href="https://wa.me/5515997886834"><span><IconWhatsapp/></span> Whatsapp</a>
              <a href="https://www.instagram.com/_systech/"><span><IconInstagram/></span> Instagram</a>
              <a href="/metodo-pagamento"><span><IconEmail/></span> Email</a>
            </li>
          </ul>
        </div>

        <div className={style.footer__list__container}>
          <h1 className={style.footer__h1}> <span>03/</span> Projetos Atuais</h1>
          <ul>
            <li className={style.li}>
              <a href="https://assistencia-social.vercel.app/">Assistência Social</a>
              <div>
                <span>05/01/2024</span>
                -
                <span>presente</span>
              </div>
            </li>

            <li className={style.li}>
              <a href="https://secretaria-almoxarifado.vercel.app/">Almoxarifado</a>
              <div>
                <span>05/06/2023</span>
                -
                <span>presente</span>
              </div>
            </li>

            <li className={style.li}>
              <a href="https://projeto-pesquisa-dun.vercel.app/">Pesquisa Eleitoral</a>
              <div>
                <span>20/07/2023</span>
                -
                <span>presente</span>
              </div>
            </li>

            <li className={style.li}>
              <a href="https://projeto-educacao-acao.vercel.app/">Educação na Palma da Mão</a>
              <div>
                <span>27/09/2023</span>
                -
                <span>presente</span>
              </div>
            </li>
          </ul>
        </div>
      </section>

      <figure className={style.footer__img__systech}>
        <img className={style.footer__img} src={systech} alt="Imagem SysTech de footer" />
      </figure>
      <p className={style.footer__direitos__reservados}>SysTech ©️ - Alguns direitos reservados.</p>
    </footer>
  )
}

export default Footer