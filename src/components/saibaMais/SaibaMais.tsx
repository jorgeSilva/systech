import React from 'react'
import style from './SaibaMais.module.css'
import blob from '../../assets/saibaMais/blob 1.svg'
import blob_device from '../../assets/saibaMais/Device blub 2.png'
import blob_3 from '../../assets/saibaMais/blob 3.svg'
import blob_4 from '../../assets/saibaMais/blob 4.svg'
import device_1_1 from '../../assets/saibaMais/Device 1-1.png'
import device_1_2 from '../../assets/saibaMais/Device 1-2.png'
import device_3 from '../../assets/saibaMais/Device 3-1.png'
import device_4 from '../../assets/saibaMais/Device 4-1.png'
import whatsapp from '../../assets/Icon/whatsapp.svg'

const SaibaMais = () => {

  const terceiro_elemento = React.useRef<HTMLElement | null>(null)
  const quarto_elemento = React.useRef<HTMLElement | null>(null)

  document.addEventListener('scroll', () => {
    let valor_terceiro = terceiro_elemento.current?.scrollHeight
    let valor_quarto = quarto_elemento.current?.scrollHeight

    console.log(valor_quarto);
    console.log(valor_terceiro);
    

    if(valor_terceiro){
      let meio_valor = valor_terceiro / 2

      if(window.scrollY >= meio_valor){
        terceiro_elemento.current?.classList.add('fade__left')
      }
    }

    if(valor_quarto){
      let meio_valor = valor_quarto * 1.5

      if(window.scrollY >= meio_valor){
        quarto_elemento.current?.classList.add('fade__right')
      }
    }
  })  

  return (
    <section className={style.saiba__container}>
      <section className={`${style.saiba__content__card} ${style.fade__left}`}>
        <div className={style.saiba__card__left}>
          <h2 className={style.saiba__title}>"<span>Assistencia Social System</span>"</h2>
          <h1 className={style.saiba__conteudo}>Sistema designado ao cadastro de familias referentes ao programa da assistencia social<b>.</b></h1>
          <a href='/' className={style.saiba__text__cliente}>Torne-se nosso cliente entrando em contato através. <img src={whatsapp} className={style.saiba__img__whatsapp} alt="Icone whatsapp"/></a>
        </div>

        <div className={style.saiba__card__right}>
          <img className={style.saiba__card__blob} src={blob} alt="Background laranja para os despositivos." />
          <img className={style.device11} src={device_1_1} alt="Imagem dispositivo." />
          <img className={style.device12} src={device_1_2} alt="Imagem dispositivo." />
        </div>
      </section>

      <section className={`${style.saiba__content__card} ${style.fade__right}`}>
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

      <section ref={terceiro_elemento} className={`${style.saiba__content__card}`}>
        <div className={style.saiba__card__left}>
          <h2 className={style.saiba__title}>"<span>Campanha Pesquisa</span>"</h2>
          <h1 className={style.saiba__conteudo}>
          Site onde o comprador irá inserir as perguntas e a partir disso fazer entrevistas, gerando relatorios referentes as respostas induzidas ou expontaneas<b>.</b>
          </h1>
          <a href='/' className={style.saiba__text__cliente}>Torne-se nosso cliente entrando em contato através. <img src={whatsapp} className={style.saiba__img__whatsapp} alt="Icone whatsapp"/></a>
        </div>

        <div className={style.saiba__card__right}>
          <img className={style.saiba__card__blob} src={blob_3} alt="Background laranja para os despositivos." />
          <img className={style.device11} src={device_3} alt="Imagem dispositivo." />

        </div>
      </section>

      <section ref={quarto_elemento} className={`${style.saiba__content__card}`}>
        <div className={style.saiba__card__left__conteudo}>
          <h2 className={style.saiba__title}>"<span>Secretaria Almoxarifado</span>"</h2>
          <h1 className={style.saiba__conteudo}>
            Voltado para as escolas do municipio onde é solicitado pelas merendeiras os alimentos para semana na escola<b>.</b>
          </h1>
          <a href='/' className={style.saiba__text__cliente}>Torne-se nosso cliente entrando em contato através. <img src={whatsapp} className={style.saiba__img__whatsapp} alt="Icone whatsapp"/></a>
        </div>

        <div className={style.saiba__card__right__conteudo}>
          <img className={style.saiba__card__blob__conteudo} src={blob_4} alt="Background laranja para os despositivos." />
          <img className={style.device4} src={device_4} alt="Imagem dispositivo." />
        </div>
      </section>

    </section>  
  )
}

export default SaibaMais