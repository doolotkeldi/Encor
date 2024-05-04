import React from "react";
import "./CarPotion.scss";
import car from "./img/Group 2827.png";
import line from "./img/Vector 8.svg";
import car2 from "./img/arvid-skywalker-ZvVNJOnV3ho-unsplash.png"

function CarPotion() {
  return (
    <div className="carpotion">
      <h1>Популярные а/м из Кореи</h1>
      <div className="carpotion__content">
        <div className="carpotion__block">
          <img className="carpotion__image" src={car} alt="" />
          <h2>KIA K5 (Optima)</h2>
          <div className="carpotion__btn">
            <div className="carpotion__line">
              <h4>Пробег</h4>
              <img src={line} alt="" />
              <p>До 90 тыс. км.</p>
            </div>
            <div className="carpotion__line">
              <h4>Год выпуска</h4>
              <img className="line-img" src={line} alt="" />
              <p>2018/</p>
            </div>
            <div className="carpotion__line">
              <h4>Мощность</h4>
              <img className="line-img2" src={line} alt="" />
              <p>163 л.с.</p>
            </div>
            <div className="carpotion__line">
              <h4>Двигатель</h4>
              <img className="line-img3" src={line} alt="" />
              <p>2.0 л</p>
            </div>
            <div className="carpotion__line">
              <h4>Коробка</h4>
              <img className="line-img4" src={line} alt="" />
              <p>Автомат</p>
            </div>
            <hr />
            <div className="carpotion__block2">
              <div>
                <span>1 890 000 ₽</span>
                <p>
                  Цена на вторичном <br />
                  рынке в РФ
                </p>
              </div>
              <div className="carpotion__block-btn">
                <span>1 540 000 ₽</span>
                <p>
                  Цена из Кореи <br /> во Владивостоке
                </p>
              </div>
            </div>
            <button>Подобрать аналог</button>
          </div>
        </div>
        <div className="carpotion__block">
          <img className="carpotion__image" src={car2} alt="" />
          <h2>KIA K5 (Optima)</h2>
          <div className="carpotion__btn">
            <div className="carpotion__line">
              <h4>Пробег</h4>
              <img src={line} alt="" />
              <p>До 90 тыс. км.</p>
            </div>
            <div className="carpotion__line">
              <h4>Год выпуска</h4>
              <img className="line-img" src={line} alt="" />
              <p>2018/</p>
            </div>
            <div className="carpotion__line">
              <h4>Мощность</h4>
              <img className="line-img2" src={line} alt="" />
              <p>163 л.с.</p>
            </div>
            <div className="carpotion__line">
              <h4>Двигатель</h4>
              <img className="line-img3" src={line} alt="" />
              <p>2.0 л</p>
            </div>
            <div className="carpotion__line">
              <h4>Коробка</h4>
              <img className="line-img4" src={line} alt="" />
              <p>Автомат</p>
            </div>
            <hr />
            <div className="carpotion__block2">
              <div>
                <span>1 890 000 ₽</span>
                <p>
                  Цена на вторичном <br />
                  рынке в РФ
                </p>
              </div>
              <div className="carpotion__block-btn">
                <span>1 540 000 ₽</span>
                <p>
                  Цена из Кореи <br /> во Владивостоке
                </p>
              </div>
            </div>
            <button>Подобрать аналог</button>
          </div>
        </div>
        <div className="carpotion__block">
          <img className="carpotion__image" src={car} alt="" />
          <h2>KIA K5 (Optima)</h2>
          <div className="carpotion__btn">
            <div className="carpotion__line">
              <h4>Пробег</h4>
              <img src={line} alt="" />
              <p>До 90 тыс. км.</p>
            </div>
            <div className="carpotion__line">
              <h4>Год выпуска</h4>
              <img className="line-img" src={line} alt="" />
              <p>2018/</p>
            </div>
            <div className="carpotion__line">
              <h4>Мощность</h4>
              <img className="line-img2" src={line} alt="" />
              <p>163 л.с.</p>
            </div>
            <div className="carpotion__line">
              <h4>Двигатель</h4>
              <img className="line-img3" src={line} alt="" />
              <p>2.0 л</p>
            </div>
            <div className="carpotion__line">
              <h4>Коробка</h4>
              <img className="line-img4" src={line} alt="" />
              <p>Автомат</p>
            </div>
            <hr />
            <div className="carpotion__block2">
              <div>
                <span>1 890 000 ₽</span>
                <p>
                  Цена на вторичном <br />
                  рынке в РФ
                </p>
              </div>
              <div className="carpotion__block-btn">
                <span>1 540 000 ₽</span>
                <p>
                  Цена из Кореи <br /> во Владивостоке
                </p>
              </div>
            </div>
            <button>Подобрать аналог</button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default CarPotion;
