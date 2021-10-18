import Aos from 'aos'
import "aos/dist/aos.css"
import { useEffect } from 'react';
import Fields from "../../assets/images/field.png"
import Icons from "../../assets/images/icons.png"
import Brand from "../../assets/images/brand.png"
import Hill from "../../assets/images/logo.png"
import Family from "../family/Family"
import './main.styled.css'

export default function Main() {
 useEffect(() => {
  Aos.init({})
  }, []);
  return (
<div className="main">

<div className="message" data-aos="zoom-in" data-aos-duration="1200" data-aos-delay="200" data-aos-once="true">
    <p>Você já se imaginou vivendo na cidade com a segurança e tranquilidade do campo?</p>
  </div>

  <div className="firstDiv">

  <div id="square" data-aos="fade-right" data-aos-duration="2000" data-aos-delay="200" data-aos-once="true" >
      <img src={Hill} alt="logo colinas do sul" />
      <p>Campestre - MG</p>
  </div>

    <div id="Fields">
      <img src={Fields} alt="imagem de um campo"/>
    </div>
  </div>

  <div className="message" data-aos="zoom-in" data-aos-duration="1200" data-aos-delay="200" data-aos-once="true">
  <p>Com condições de pagamento jamais vistas, você poderá investir no local dos seus sonhos!</p>
</div>

    <img id="Icons" src={Icons} alt="lago, localização privilegiada, lotes a partir de 180m² e pagamento facilitado"  data-aos="zoom-in" data-aos-duration="1200" data-aos-delay="500" data-aos-once="true" />

    <div id="text"  data-aos="zoom-in" data-aos-duration="1200" data-aos-delay="200" data-aos-once="true">
    <p>O FRESCOR DO CAMPO PRÓXIMO À CIDADE!</p>
  </div>

<div  data-aos="fade-up-right" data-aos-duration="3000" data-aos-delay="200" data-aos-once="true"><Family/></div>

    <img id="Brand" src={Brand} alt="logo iTUDE e Soluções Imobiliárias"/>
</div>
 )
}