import Aos from 'aos'
import "aos/dist/aos.css"
import { useEffect } from 'react';
import Fields from "../../assets/images/field.png"
import Icons from "../../assets/images/icons.png"
import Brand from "../../assets/images/brand.png"
import Hill from "../../assets/images/logo.png"
import FamilyBig from "../familyBig/FamilyBig"
import './mainBig.styled.css'

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

<FamilyBig/>

  <div id="squareBig">
      <img src={Hill} alt="logo colinas do sul" />
      <p>Campestre - MG</p>
  </div>

  <div id="textBig">
    <p>  O FRESCOR DO CAMPO PRÓXIMO À CIDADE!</p>
  </div>

  <div className="firstDivBig">
    
    <img id="IconsBig" src={Icons} alt="lago, localização privilegiada, lotes a partir de 180m² e pagamento facilitado" />

    <div id="FieldsBig">
      <img src={Fields} alt="imagem de um campo" />
      <div className="messageBig2">
        <p>Com condições de pagamento jamais vistas, você poderá investir no local dos seus sonhos!</p>
      </div>
    </div>
  </div>
    <img id="BrandBig" src={Brand} alt="logo iTUDE e Soluções Imobiliárias" />
</div>
</>
 )
}