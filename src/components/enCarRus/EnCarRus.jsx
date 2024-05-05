import React from "react";
import "./enCarRus.css";

const EnCarRus = () => {
	return (
		<section className="container">
			<div className="encar">
				<h3>
					Получите бесплатную <br /> консультацию от наших <br /> экспертов{" "}
					<span>EncarRUS</span>{" "}
				</h3>
				<p>
					Оставьте ваши контакты и наши эксперты свяжутся с вами <br /> для
					консультации по вопросам покупки авто
				</p>
				<button>Получить консультацию</button>
				{/* <img className='jeep' src={Jeep} alt="" /> */}
			</div>
		</section>
	);
};

export default EnCarRus;
