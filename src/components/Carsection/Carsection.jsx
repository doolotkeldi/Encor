import React from "react";
import "./Carsection.css";

import One from "./svg/one.jpg";
import Two from "./svg/two.jpg";
import Three from "./svg/three.jpg";
import Four from "./svg/fore.jpg";
import Fave from "./svg/fave.jpg";
import Six from "./svg/six.jpg";
import Seven from "./svg/seven.jpg";
import Eich from "./svg/eich.jpg";

import Audi from "./svg/photo_2024-05-04_18-58-48.jpg";

const CarSection = () => (
	<section className="container">
		<div className="wrapper">
			<div className="boxes">
				<div className="box">
					<h3>
						Помощь на всех <br /> этапах покупки
					</h3>
					<p>
						Оставьте заявку и наш менеджер <br /> перезвонит вам через 15 минут
					</p>
					<input type="text" placeholder="+7 (  )" />
					<br />
					<br />
					<button>Получить консультацию</button>
				</div>
			</div>

			<div className="logo-title">
				<div className="logo-column">
					<div className="logo">
						<img src={One} alt="" />
						<p>
							Поберем лучший вариант <br /> авто по наилучшей стоимости
						</p>
					</div>

					<div className="logo">
						<img src={Three} alt="" />
						<p>
							Подготовим все документы <br /> для таможни в РФ
						</p>
					</div>

					<div className="logo">
						<img src={Fave} alt="" />
						<p>
							Предоставим фото и <br /> видео отчет автомобиля
						</p>
					</div>

					<div className="logo">
						<img src={Seven} alt="" />
						<p>
							Оптимизируем налоговые <br /> автомобили
						</p>
					</div>
				</div>

				<div className="logo-column">
					<div className="logo">
						<img src={Two} alt="" />
						<p>
							Поможем купить валюту по <br /> выгодному курсу и подскажем <br />{" "}
							как перевести деньги за рубеж
						</p>
					</div>

					<div className="logo">
						<img src={Four} alt="" />
						<p>
							Организуем перевозку <br /> и страхование груза
						</p>
					</div>

					<div className="logo">
						<img src={Six} alt="" />
						<p>
							Наш эксперт тщательно <br /> осмотрит понравившийся <br />{" "}
							экземпляр
						</p>
					</div>

					<div className="logo">
						<img src={Eich} alt="" />
						<p>
							Полностью русифицируем <br /> автомобиль
						</p>
					</div>
				</div>
				<div className="photo">
					<img className="audi" src={Audi} alt="" />
				</div>

				<div className="photo2">{/* <img src={AudiAldy} alt="" /> */}</div>
			</div>
		</div>
	</section>
);

export default CarSection;
