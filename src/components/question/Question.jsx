import React from "react";
import "./question.css";
import Galochka from "./Vector 26.png";

const Question = () => {
	return (
		<section className="container">
			<div className="question">
				<h3>Вопрос-ответ</h3>
				<div className="question-text">
					<div className="minusQues"></div>
					<h4>Какие сроки поставки а/м?</h4>
				</div>

				<div className="hr"></div>

				<div className="question-text">
					<div></div>
					<h4>Что проверяет технический специалист при осмотре а/м?</h4>
				</div>

				<div className="hr"></div>

				<div className="question-text-red">
					<div className="question-text">
						<div></div>
						<h4 className="redHFour">
							Страхуются ли автомобили при перевозке из Кореи в Россию?
						</h4>
					</div>
					<p>
						Наш партнер в Корее - это официальная экспортная компания, она же
						выставляет инвойс, на ее реквизиты Вы оплачиваете а/м. <br /> До
						отправки во Владивосток, а/м хранятся у нашего партнера на
						охраняемой парковке около порта.
					</p>
				</div>

				<div className="hr"></div>

				<div className="question-text">
					<div></div>
					<h4>
						Кто в Корее подбирает автомобили и кому мы платим, <br /> если вы
						находитесь в Москве?
					</h4>
				</div>

				<div className="hr"></div>

				<div className="question-text">
					<div></div>
					<h4>Какие юридические гарантии есть при работе с Вашей компанией?</h4>
				</div>

				<div className="question-images">
					<h5 className="galochka">
						<img src={Galochka} alt="" />
					</h5>
					<h3>
						Мы работаем строго по договору, оплата проходит в несколько <br />{" "}
						этапов, все этапы максимально прозрачны.{" "}
					</h3>
				</div>
			</div>
		</section>
	);
};

export default Question;
