import Aos from 'aos'
import "aos/dist/aos.css"
import { useEffect } from 'react';
import Logo from "../../assets/images/logo-primary-dark.png"
import './navBar.styled.css'

export default function NavBar() {
 useEffect(() => {
Aos.init({})
 }, []);
 return (
<nav className="navbar" data-aos="fade-right" data-aos-duration="1000" data-aos-delay="500">
      <a href="https://itude.com.br" target="_blank" rel="noreferrer">
        <img src={Logo} alt="logo itude" />
      </a>
</nav>
 )}