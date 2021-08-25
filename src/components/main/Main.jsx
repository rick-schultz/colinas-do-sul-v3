import Aos from 'aos'
import "aos/dist/aos.css"
import { useEffect } from 'react';
import Campos from "../../assets/images/campo.png"
import Icones from "../../assets/images/icones.png"
import Marca from "../../assets/images/marca.png"

export default function Main() {
 useEffect(() => {
  Aos.init({})
  }, []);
  return (
<div className="container mx-auto flex flex-wrap px-4"
data-aos="zoom-in"
data-aos-duration="1200"
data-aos-delay="1000" >

  <p className="text-white text-2xl font-bold text-center mx-auto my-2 sm:text-3xl">
  O FRESCOR DO CAMPO PRÓXIMO À CIDADE!</p>

  <div className="container mx-auto flex flex-wrap my-4">

    <div className="-z-1 float-right">
      <img className="-mt-12 sm:-mt-28 lg:w-3/4" src={Campos} alt="imagem de um campo" /></div>
    </div>

    <img className="w-3/4 mx-auto my-4" src={Icones} alt="lago, localização privilegiada, lotes a partir de 180m² e pagamento facilitado" />


    <img className="w-3/4 mx-auto mt-4 mb-8" src={Marca} alt="" />

</div>
 )
}