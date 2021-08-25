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
<div className="main" data-aos="zoom-in"data-aos-duration="1200"data-aos-delay="1000" data-aos-once="true">

  <div id="text">
    <p>  O FRESCOR DO CAMPO PRÓXIMO À CIDADE!</p>
  </div>

  <div className="firstDiv">

  <div id="square">
      <img src={Colina} alt="logo colinas do sul" />
  </div>

    <div id="campos">
      <img src={Campos} alt="imagem de um campo" />
    </div>
  </div>

    <img id="icones" src={Icones} alt="lago, localização privilegiada, lotes a partir de 180m² e pagamento facilitado" />

<Casal/>

    <img id="marca" src={Marca} alt="" />
</div>
 )
}