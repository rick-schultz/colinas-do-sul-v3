import Family from "../../assets/images/family.png"
import './familyBig.styled.css'

export default function familyBig() {
 return (
       <div id="familyBig" className="my-4">
        <img src={Family} alt="foto família"/>
          <button><a href="https://online.crm.anapro.com.br/WebCRMService/Pages/chat/cliente/v2/ChatClienteFaleConosco.aspx?conta=b5PfcEw_G6E1&keyIntegradora=2D031627-1E73-48BE-9729-B9B0BA708F30&keyAgencia=2D031627-1E73-48BE-9729-B9B0BA708F30&strDir=atitude&campanha=3iqqh5Q5dEw1&canal=b5H4krENDc41&produto=VlX13i2EiQk1&strmidia=Landing+page&strpeca=&usuarioEmail=&strgrupopeca=&strcampanhapeca=&nome=&email=&telefoneDDD=&telefone=&strTexto=&keyexterno=&urlep=&urlcp=&urlca=&urlat=&strMostrarTopo=false&strAutoSubmit=true&strU" target="_blank" rel="noreferrer">MAIS INFORMAÇÕES!</a></button>
       </div>
 )
}
