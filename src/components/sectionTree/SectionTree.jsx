import React from "react";
import "./SectionTree.scss"
import line from "./img/Rectangle 692 (1).png"
import vector from "./img/Vector 12 (1).png"
import treeCar from "./img/tyler-clemmensen-4gSavS9pe1s-unsplash (2).png"
import arrow from "./img/Arrow 2 (1).png"
import arrow2 from "./img/Arrow 1 (1).png"
import  ruka from "./img/4ExNzh 1 (1).png"

function SectionTree() {
  return (
    <div className="sectionTree">
      <h1>Преимущества покупки авто из Кореи</h1>
      <div className="sectionTree__content">
        <div className="sectionTree__block">
          <div className="sectionTree__block-btn">
            <img src={line} alt="" />
            <p className="sectionTree__block-title">Честный пробег</p>
          </div>
          <img src={vector} alt="" />
          <div className="sectionTree__block-btn">
            <img src={line} alt="" />
            <p>Сервисное обслуживание</p>
          </div>
          <img src={vector} alt="" />
          <div className="sectionTree__block-btn">
            <img src={line} alt="" />
            <p>Выездная диагностика</p>
          </div>
          <img src={vector} alt="" />
          <div className="sectionTree__block-btn">
            <img src={line} alt="" />
            <p>Прозрачная история а/м</p>
          </div>
          <img src={vector} alt="" />
          <div className="sectionTree__block-btn">
            <img src={line} alt="" />
            <p>Разнообразие двигателей и трансмиссий</p>
          </div>
          <img src={vector} alt="" />
          <div className="sectionTree__block-btn">
            <img src={line} alt="" />
            <p>Выездная диагностика</p>
          </div>
          <img src={vector} alt="" />
          <div className="sectionTree__block-btn">
            <img src={line} alt="" />
            <p>Стоимость автомобиля</p>
          </div>
        </div>
        <div className="sectionTree__block2">
          <div className="sectionTree__block-btn">
            <img src={line} alt="" />
            <p>Качество сборки</p>
          </div>
          <img className="section__vector" src={vector} alt="" />
          <div className="sectionTree__block-btn">
            <img src={line} alt="" />
            <p>Богатые комплектации</p>
          </div>
          <img className="section__vector" src={vector} alt="" />
          <div className="sectionTree__block-btn">
            <img src={line} alt="" />
            <p>Европейские автомобили</p>
          </div>
          <img className="section__vector" src={vector} alt="" />
          <div className="sectionTree__block-btn">
            <img src={line} alt="" />
            <p>Американские автомобили </p>
          </div>
          <img className="section__vector" src={vector} alt="" />
          <div className="sectionTree__block-btn">
            <img src={line} alt="" />
            <p>Коммерческий транспорт </p>
          </div>
          <img className="section__vector" src={vector} alt="" />
          <div className="sectionTree__block-btn">
            <img src={line} alt="" />
            <p>Русификация меню</p>
          </div>
          <img className="section__vector" src={vector} alt="" />
        </div>
        <div className="sectionTree__btn">
          <img src={treeCar} alt="" />
          <h2>Честный пробег</h2>
          <p>
            Скрутить пробег в Корее нельзя, т.к. это уголовное преступление и
            никто не будет с этим связываться + пробег легко проверить через
            базы страховых компаний
          </p>
          <div className="sectionTree__box">
            <button>
              <img src={arrow} alt="" />
            </button>
            <button className="sectionTree__button">
              <img src={arrow2} alt="" />
            </button>
            <img className="sectionTree__box-img" src={ruka} alt="" />
          </div>
        </div>
      </div>
    </div>
  );
}

export default SectionTree;
