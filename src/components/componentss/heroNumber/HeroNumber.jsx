import React from "react";
import "./HeroNumber.scss";
// import ImageItem from "./svg/Item.svg"

function HeroNumber() {
  return (
    <div className="heroNumber">
      <div className="heroNumber__content">
        <h2>Процесс заказа и покупки автомобиля</h2>
        <span>из Южной Кореи в компании EncarRUS</span>
      </div>
      <div className="heroNumber__block">
        {/* <img src={ImageItem} alt="" /> */}
        <div className="heroNumber-boc">
          <div className="heroNumber__block-btn">
            <div className="heroNumber__block-boc">
              <h1>1</h1>
              <hr />
            </div>
            <h3>Предварительная консультация</h3>
          </div>
          <hr />
          <div className="heroNumber__block-btn">
            <div className="heroNumber__block-boc">
              <h1>2</h1>
              <hr />
            </div>
            <h3>
              Заключение <br /> договора{" "}
            </h3>
          </div>
          <div className="heroNumber__block-btn">
            <div className="heroNumber__block-boc">
              <h1>3</h1>
              <hr />
            </div>
            <h3>Подбор подходящих вариантов на площадках исходя из бюджета</h3>
          </div>
          <div className="heroNumber__block-btn">
            <div className="heroNumber__block-boc">
              <h1>4</h1>
              <hr />
            </div>
            <h3>Выездная диагностика понравившегося варианта</h3>
          </div>
        </div>
        <hr />
        <div className="heroNumber-boc">
          <div className="heroNumber__block-btn">
            <div className="heroNumber__block-boc">
              <h1>5</h1>
              <hr />
            </div>
            <h3>
              Фото и видео отчет на <br /> а/м достойные вашего внимания{" "}
            </h3>
          </div>
          <div className="heroNumber__block-btn">
            <div className="heroNumber__block-boc">
              <h1>6</h1>
              <hr />
            </div>
            <h3>Оплата а/м в Корею </h3>
          </div>
          <div className="heroNumber__block-btn">
            <div className="heroNumber__block-boc">
              <h1>7</h1>
              <hr />
            </div>
            <h3>Доставка а/м в порт Владивосток</h3>
          </div>
          <div className="heroNumber__block-btn2">
            <div className="heroNumber__block-boc">
              <h1>8</h1>
              <hr />
            </div>
            <h3>
              Растаможка автомобиля, получение ПТС и оставка до Вашего дома
            </h3>
          </div>
        </div>
      </div>
    </div>
  );
}

export default HeroNumber;
