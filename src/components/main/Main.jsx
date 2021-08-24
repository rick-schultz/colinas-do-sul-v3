import Aos from 'aos'
import "aos/dist/aos.css"
import { useEffect } from 'react';
import Campos from "../../assets/images/campo.png"
import Icones from "../../assets/images/icones.png"
import Marca from "../../assets/images/marca.png"
import Colina from "../../assets/images/logo.png"
import Casal from '../casal/Casal'
import "./main.styled.css"


export default function Main() {
useEffect(() => {
Aos.init({})
}, []);
return (
<div className="container"
data-aos="zoom-in"
data-aos-duration="1200"
data-aos-delay="1000" >

  <p> O FRESCOR DO CAMPO PRÓXIMO À CIDADE!</p>

  <div className="firstdiv">

  <div className="square">
         <img src={Colina} alt="logo colinas do sul" />
  </div>

      <img id="campo" src={Campos} alt="imagem de um campo" />

    </div>

    <img id="icones" src={Icones} alt="lago, localização privilegiada, lotes a partir de 180m² e pagamento facilitado" />

<Casal/>

    <img id="marca" src={Marca} alt="" />

</div>
)
}