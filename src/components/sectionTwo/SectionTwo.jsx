import React from "react";
import "./SectionTwo.scss";
import line from "./img/Rectangle 674 (1).png";
import line2 from "./img/Rectangle 678.png";

function SectionTwo() {
  return (
    <div className="sectionBlock">
      <h1>Сделаем расчёт на а/м Kia Mohave 2019 года</h1>
      <img className="sectionBlock__image" src={line2} alt="" />
      <div className="sectionBlock__content">
        <div className="sectionBlock__buttons">
          <div>
            <h1>Стоимость автомобиля в Корее</h1>
            <p>По курсу на день покупки</p>
          </div>
          <span>
            50 <span className="sectionBlok__btn-btn">млн вон</span>
          </span>
        </div>
        <div className="sectionBlock__buttons2">
          <div>
            <h1>Расходы в Корее</h1>
            <p>
              Доставка а/м до порта Владивосток, стоянка, перегоны, снятие а/м с
              учета, подготовка экспортных документов, растонировка (снятие
              темной пленки с передней полусферы и лобового стекла)
            </p>
          </div>
          <span>
            3,5 <span className="sectionBlok__btn-btn">млн вон</span>
          </span>
        </div>
        <div className="sectionBlock__buttons2">
          <div>
            <h1>Таможня</h1>
            <p>Пошлина, СБКТС, получение ЭЛПТС, перегон, комиссия брокера</p>
          </div>
          <span>
            650 <span className="sectionBlok__btn-btn">тыс руб</span>
          </span>
        </div>
        <div className="sectionBlock__buttons2">
          <div>
            <h1>Наша Комиссия</h1>
            <p>За поиск а/м, организацию и сопровождение сделки</p>
          </div>
          <span>
            100 <span className="sectionBlok__btn-btn">тыс руб</span>
          </span>
        </div>
        <div className="sectionBlock__buttons2">
          <div className="sectionBlok__btn">
            <h1>Доставка до Москвы автовозом</h1>
            <p>
              Стоимость зависит от габаритов авто и города отправки) + Вы можете
              сами забрать а/м во Владивостоке, чтобы совершить незабываемое
              путешествие по всей России
            </p>
          </div>
          <span>
            150 <span className="sectionBlok__btn-btn">тыс вон</span>
          </span>
        </div>
        <div className="sectionBlock__buttons2">
          <div>
            <h1>Расходы в РФ</h1>
            <p>
              Комиссия банка за конвертацию валюты и перевод средств за рубеж
            </p>
          </div>
          <span>
            80 <span className="sectionBlok__btn-btn">тыс руб</span>
          </span>
        </div>
      </div>
      <hr />
      <div className="sectionBlock__text">
        <img src={line} alt="" />
        <p>Итоговая стоимость а/м под ключ</p>
        <span>3 280 000 руб</span>
      </div>
      <div className="sectionBlock__text">
        <img src={line} alt="" />
        <p>Стоимость аналогичного а/м в РФ</p>
        <span className="sectionBlock__span">4 900 000 руб</span>
      </div>
    </div>
  );
}

export default SectionTwo;
