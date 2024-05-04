import React from 'react'
import './SectionOne1.css'
import Phone from '../../components/SectionOne1/svg/phone.svg'
import Info from '../../components/SectionOne1/svg/Info.svg'
import WhatsApp from '../../components/SectionOne1/svg/WhatsApp.svg'
import Telegram from '../../components/SectionOne1/svg/Telegram.svg'
import Ok from '../../components/SectionOne1/svg/Ok.svg'
import { Link } from 'react-router-dom'

function SectionOne1() {
  return (
    <section>
      <div className="container">
        <div className="con-div">
        <div className="contact-con">

        <div className="contact">
          <ul>
          <li>Главная → Контакты</li>
          </ul>
          <h1>Контактная информация</h1>
          <p>Для оперативной связи с нами вы можете
            <br /> воспользоваться удобными для вас способами:</p>
        </div>
        <div className="mobile">
          <div className="tel-con">
            <div className="tel">
              <img src={Phone} alt="" />
              <h1>8 (800) 011-11-11</h1>
            </div>
            <div className="email">
              <div className="black-bg">
              <img src={Info} alt="" />
              </div>
              <h1>info@encarrus.ru</h1>
            </div>
          </div>
          <div className="tg-what">
            <div className="whats-app">
              <img src={WhatsApp} alt="" />
              <h1>WhatsApp</h1>
            </div>
            <div className="telegram">
              <img src={Telegram} alt="" />
              <h1>Telegram</h1>
            </div>
          </div>
        </div>
        </div>
        <div className="site">
          <div className="site-con">

          <h1>Обратная связь</h1>
          <p>Заполните форму и мы свяжемся
            <br /> с вами как можно скорее</p>
          </div>
        <div className="input-conn">
          <input placeholder='Введите ваш телефон *' type="text" />
          <div className="input-style">
            <p>Введите ваше имя</p>
          <h1>Иван</h1>
          </div>
          <input placeholder='Напишите ваш вопрос' type="text" />
          <button>Отправить форму</button>
        </div>
          <div className="chackbox">
            <img src={Ok} alt="" />
            <p>Согласен с <Link> политикой конфиденциальности </Link> </p>
          </div>
        </div>
        </div>
      </div>
    </section>
  ) 
}

export default SectionOne1
