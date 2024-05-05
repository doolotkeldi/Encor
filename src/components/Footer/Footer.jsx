import React from 'react' 
import Button from 'react-bootstrap/Button'; 
import Card from 'react-bootstrap/Card'; 
import Container from 'react-bootstrap/Container'; 
import Row from 'react-bootstrap/Row'; 
import Col from 'react-bootstrap/Col'; 
import Logo1 from "../Footer/image/Logo1.png" 
import  Phone1 from "./svg/Phone.svg" 
import  Google from "./svg/gis.svg" 
import './Footer.css' 
 
import './Footer.css' 
 
function Footer() { 
  return ( 
    <footer> 
      <div className="footer-con"> 
        <div className="container"> 
          <div className="content-text"> 
          <div className="footer-left"> 
 
          <div className="logo-con"> 
            <img src={Logo1} alt="" /> 
            <p>© 2022 EncarRUS. Все права защищены, согласно 
              <br /> ГК РФ ст. 1225 - 1551 об авторском праве. Любое  
              <br />копирование материалов сайта и элементов  
              <br />включая изображения строго запрещены.</p> 
          </div> 
          <div className="text-ul"> 
            <ul> 
              <li>Авто из Кореи</li> 
              <li>Авто из Казахстана</li> 
              <li>Авто из ОАЭ</li> 
              <li>Авто из Китая</li> 
            </ul> 
          </div> 
          <div className="menu-con"> 
            <ul> 
              <li>Главная</li> 
              <li>О компании</li> 
              <li>Контакты</li> 
            </ul> 
          </div> 
          </div> 
            <div className="gis"> 
          <div className="phone-tel"> 
          <button> 
              <img style={{ width: "18px", height: "18px" }} src={Phone1} alt="" /> 
              +7 (800) 011-11-11 
            </button>           
            </div> 
 
            <div className="gis-google"> 
              <img src={Google} alt="" /> 
              <p>Москва, ул. Семеновская 
                <br /> д 14 офис 122</p> 
            </div> 
          </div> 
          </div> 
        </div> 
         
      </div> 
    </footer> 
  ) 
} 
 
export default Footer