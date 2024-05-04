import React from 'react'
import Car from './svg/Group.svg'
import a from './svg/a.svg'
import './FirstSection.css'
import Koreya from './svg/Koreya.svg'
import Kytai from './svg/Kytai.svg'
import Alben from './svg/Alben.svg'
import Kazak from './svg/Kazak.svg'

function FirstSection() {

    
  return (
    <section className='fist-section'>
        <img src={Car} alt="" />
        <div className="container first-container">
            <div className="first-auto">
                <div className="first-text">
                Анализируем <br />
мировой <span>авто-рынок </span>
                </div>
                <p>в сравнении в Российским и помогаем выбрать лучший <br /> вариант не только по деньгам, но и по срокам.</p>
                <div className="opyt">
                    <img src={a} alt="" />
                    <p>Опыт работы более 30 лет</p>
                </div>
                <div className=" opyt-2">
                    <img style={{marginTop:"8px"}} src={a} alt="" />
                    <p>Помощь с выбором авто и <br /> страны покупки</p>
                </div>
                <button>Получить консультацию</button>
            </div>
            <div className="first-right">
                <div className="flag">
                    <img src={Koreya} alt="" />
                    <div className="flag-text">
                        <h1>Южная Корея</h1>
                        <p>Лучшие европейские авто с <br /> жирными комплектациями</p>
                    </div>

                </div>
                <div className="flag">
                    <img src={Kazak} alt="" />
                    <div className="flag-text">
                        <h1>Казахстан</h1>
                        <p>Только новые авто <br /> без пробега</p>
                    </div>

                </div>
                <div className="flag">
                    <img src={Alben} alt="" />
                    <div className="flag-text">
                        <h1>Арабские <br /> Эмираты</h1>
                        <p>Уникальные авто</p>
                    </div>

                </div>
                <div className="flag">
                    <img src={Kytai} alt="" />
                    <div className="flag-text">
                        <h1>Китай</h1>
                        <p>Электрокары и лучший <br /> китайский автопром</p>
                    </div>

                </div>
                

            </div>



        </div>
    </section>
  )
}

export default FirstSection
