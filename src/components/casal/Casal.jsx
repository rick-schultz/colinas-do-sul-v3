import Familia from "../../assets/images/casal.png"
import './casal.styled.css'

export default function Casal() {
 return (
       <div id="casal" className="my-4">
        <img src={Familia} alt="foto casal"/>
          <button><a href="https://api.whatsapp.com/send?phone=5535998690427" target="_blank" rel="noreferrer">MAIS INFORMAÇÕES!</a></button>
       </div>
 )
}
