import Aos from 'aos'
import "aos/dist/aos.css"
import { useEffect } from 'react';
import Campos from "../../assets/images/campo.png"
import Icones from "../../assets/images/icones.png"
import Marca from "../../assets/images/marca.png"
import Colina from "../../assets/images/logo.png"
import './mainBig.styled.css'
import CasalBig from '../casalBig/CasalBig';

export default function MainBig() {
 useEffect(() => {
  Aos.init({})
  }, []);
  return (
<>

  <div className="messageBig" data-aos="zoom-in" data-aos-duration="1200" data-aos-delay="200" data-aos-once="true">
      <p>Você já se imaginou vivendo na cidade com a segurança e tranquilidade do campo?</p>
    </div>

<div className="mainBig" data-aos="zoom-in"data-aos-duration="1500"data-aos-delay="300" data-aos-once="true" >

<CasalBig/>

  <div id="squareBig">
      <img src={Colina} alt="logo colinas do sul" />
      <p>Campestre - MG</p>
  </div>

  <div id="textBig">
    <p>  O FRESCOR DO CAMPO PRÓXIMO À CIDADE!</p>
  </div>

  <div className="firstDivBig">
    
    <img id="iconesBig" src={Icones} alt="lago, localização privilegiada, lotes a partir de 180m² e pagamento facilitado" />

    <div id="camposBig">
      <img src={Campos} alt="imagem de um campo" />
      <div className="messageBig2">
        <p>Com condições de pagamento jamais vistas, você poderá investir no local dos seus sonhos!</p>
      </div>
    </div>
  </div>
    <img id="marcaBig" src={Marca} alt="logo iTUDE e Soluções Imobiliárias" />
</div>
</>
 )
}