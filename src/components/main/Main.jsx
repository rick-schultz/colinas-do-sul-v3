import Aos from 'aos'
import "aos/dist/aos.css"
import { useEffect } from 'react';
import Campos from "../../assets/images/campo.png"
import Icones from "../../assets/images/icones.png"
import Marca from "../../assets/images/marca.png"
import Colina from "../../assets/images/logo.png"
import './main.styled.css'
import Casal from '../casal/Casal';

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
      <img src={Colina} alt="logo colinas do sul" />
      <p>Campestre - MG</p>
  </div>

    <div id="campos">
      <img src={Campos} alt="imagem de um campo"/>
    </div>
  </div>

  <div className="message" data-aos="zoom-in" data-aos-duration="1200" data-aos-delay="200" data-aos-once="true">
  <p>Com condições de pagamento jamais vistas, você poderá investir no local dos seus sonhos!</p>
</div>

    <img id="icones" src={Icones} alt="lago, localização privilegiada, lotes a partir de 180m² e pagamento facilitado"  data-aos="zoom-in" data-aos-duration="1200" data-aos-delay="500" data-aos-once="true" />

    <div id="text"  data-aos="zoom-in" data-aos-duration="1200" data-aos-delay="200" data-aos-once="true">
    <p>O FRESCOR DO CAMPO PRÓXIMO À CIDADE!</p>
  </div>

<div  data-aos="fade-up-right" data-aos-duration="3000" data-aos-delay="200" data-aos-once="true"><Casal/></div>

    <img id="marca" src={Marca} alt="logo iTUDE e Soluções Imobiliárias"/>
</div>
 )
}