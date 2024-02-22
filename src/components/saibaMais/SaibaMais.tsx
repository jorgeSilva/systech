import React from 'react'
import style from './SaibaMais.module.css'
import blob from '../../assets/saibaMais/blob 1.svg'
import blob_device from '../../assets/saibaMais/Device blub 2.png'
import blob_3 from '../../assets/saibaMais/blob 3.svg'
import blob_4 from '../../assets/saibaMais/blob 4.svg'
import device_1_1 from '../../assets/saibaMais/Device 1-1.png'
import device_1_2 from '../../assets/saibaMais/Device 1-2.png'
import device_2_1 from '../../assets/saibaMais/device 2-1.png'
import device_3 from '../../assets/saibaMais/Device 3-1.png'
import device_4 from '../../assets/saibaMais/Device 4-1.png'
import whatsapp from '../../assets/Icon/whatsapp.svg'

const SaibaMais = () => {
  return (
    <section className={style.saiba__container}>

      <section className={style.saiba__content__card}>
        <div className={style.saiba__card__left}>
          <h2 className={style.saiba__title}>"<span>Assistencia Social System</span>"</h2>
          <h1 className={style.saiba__conteudo}>Sistema designado ao cadastro de familias referentes ao programa da assistencia social<b>.</b></h1>
          <a href='/' className={style.saiba__text__cliente}>Torne-se nosso cliente entrando em contato através. <img src={whatsapp} className={style.saiba__img__whatsapp} alt="Icone whatsapp"/></a>
        </div>

        <div className={style.saiba__card__right}>
          <img className={style.saiba__card__blob} src={blob} alt="Background laranja para os despositivos." />
        </div>
      </section>

      <section className={style.saiba__content__card}>
        <div className={style.saiba__card__left__conteudo}>
          <h2 className={style.saiba__title}>"<span>Educação na palma da mão</span>"</h2>
          <h1 className={style.saiba__conteudo}>
            Designado à secretária de educação do municipio com intuito de um melhor controle de seus funcionarios<b>.</b>
          </h1>
          <a href='/' className={style.saiba__text__cliente}>Torne-se nosso cliente entrando em contato através. <img src={whatsapp} className={style.saiba__img__whatsapp} alt="Icone whatsapp"/></a>
        </div>

        <div className={style.saiba__card__right__conteudo}>
          <img className={style.saiba__card__blob__conteudo} src={blob_device} alt="Background laranja para os despositivos." />
        </div>
      </section>

      <section className={style.saiba__content__card}>
        <div className={style.saiba__card__left}>
          <h2 className={style.saiba__title}>"<span>Campanha Pesquisa</span>"</h2>
          <h1 className={style.saiba__conteudo}>
          Site onde o comprador irá inserir as perguntas e a partir disso fazer entrevistas, gerando relatorios referentes as respostas induzidas ou expontaneas<b>.</b>
          </h1>
          <a href='/' className={style.saiba__text__cliente}>Torne-se nosso cliente entrando em contato através. <img src={whatsapp} className={style.saiba__img__whatsapp} alt="Icone whatsapp"/></a>
        </div>

        <div className={style.saiba__card__right}>
          <img className={style.saiba__card__blob} src={blob_3} alt="Background laranja para os despositivos." />
        </div>
        <div className={style.saiba__card__left}></div>
      </section>

      <section className={style.saiba__content__card}>
        <div className={style.saiba__card__left__conteudo}>
          <h2 className={style.saiba__title}>"<span>Secretaria Almoxarifado</span>"</h2>
          <h1 className={style.saiba__conteudo}>
            Voltado para as escolas do municipio onde é solicitado pelas merendeiras os alimentos para semana na escola<b>.</b>
          </h1>
          <a href='/' className={style.saiba__text__cliente}>Torne-se nosso cliente entrando em contato através. <img src={whatsapp} className={style.saiba__img__whatsapp} alt="Icone whatsapp"/></a>
        </div>

        <div className={style.saiba__card__right__conteudo}>
          <img className={style.saiba__card__blob__conteudo} src={blob_4} alt="Background laranja para os despositivos." />
        </div>
        <div className={style.saiba__card__left}></div>
      </section>

    </section>  
  )
}

export default SaibaMais