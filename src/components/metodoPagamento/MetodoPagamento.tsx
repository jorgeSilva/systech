import React from 'react'
import style from './MetodoPagamento.module.css'
import insta from '../../assets/Icon/instagram.svg'
import twitter from '../../assets/Icon/twitter.svg'
import whatsapp from '../../assets/Icon/whatsapp.svg'
import emailjs from '@emailjs/browser' 

const MetodoPagamento = () => {
  const [name, setNome] = React.useState<string>('')
  const [email, setEmail] = React.useState<string>('')
  const [message, setConteudo] = React.useState<string>('')

  function handleContato(){
    window.location.href = "https://wa.me/5515997886834"
  }

  function sendEmail(e:any){
    e.preventDefault()

    const templateParams = {
      from_name: name,
      message: message,
      email: email
    }

    emailjs.send("service_idf68af", "template_730vty8", templateParams, "XxTehvC__gXcnJ3rX")
      .then((r) => {
        console.log("Email enviado", r.status, r.text);
        setConteudo('')
        setEmail('')
        setNome('')
      }, (e) => {
        console.log("ERRO: ", e);
      })
  }

  return (
    <main className={style.pagamento__container__main}>
      <section className={style.pagamento__content__main}>
        <h1 className={style.pagamento__h1}>Solicite um orçamento para sua idea revolucionaria<b>.</b></h1>
        <h3 className={style.pagamento__h3}>Um email descrevendo seu proposito e retornaremos com valores e prazos.</h3>

        <h2 className={style.pagamento__h2}>Seu futuro digital começa aqui.</h2>

        <button onClick={handleContato} className={style.pagamento__button__contato}>Entrar em contato</button>

        <div className={style.pagamento__social__medias__container}>
          <p>Redes sociais</p>
          -
          <div className={style.pagamento__social__medias__content}>
            <a href="https://www.instagram.com/_systech/">
              <img className={style.pagamento__social__media} src={insta} alt="instagram SysTech" />
            </a>
            <a href="/">
              <img className={style.pagamento__social__media} src={twitter} alt="twitter SysTech" />
            </a>
            <a href="https://wa.me/5515997886834">
              <img className={style.pagamento__social__media} src={whatsapp} alt="Whatsapp SysTech"/>
            </a>
          </div>
        </div>
      </section>

      <section className={style.pagamento__container__form}>
        <form onSubmit={sendEmail} className={style.pagamento__form}>
          <label className={style.pagamento__label__content}>
            Nome:
            <input className={style.pagamento__input} onChange={(e) => setNome(e.target.value)} value={name} type="text" required/>
          </label>

          <label className={style.pagamento__label__content}>
            Email: 
            <input className={style.pagamento__input} onChange={(e) => setEmail(e.target.value)} value={email} type="email" required/>
          </label>

          <label className={style.pagamento__label__content}>
            Mensagem:
            <textarea className={style.pagamento__textarea} onChange={(e) => setConteudo(e.target.value)} value={message} required/>
          </label>

          <div className={style.pagamento__button__content}>
            <input 
              className={style.pagamento__button__cancel}
              type='button' 
              value='Cancelar'
              onClick={() => { 
                setConteudo('') 
                setEmail('')
                setNome('')
              }} 
            />
            <input className={style.pagamento__button__submit} type='submit' value='Enviar'/>
          </div>
        </form>
      </section>
    </main>
  )
}

export default MetodoPagamento