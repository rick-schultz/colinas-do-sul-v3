import Aos from 'aos'
import "aos/dist/aos.css"
import { useEffect } from 'react';
import './navBar.styled.css';
import Logo from "../../assets/images/logo-primary-dark.png"

export default function NavBar() {
 useEffect(() => {
Aos.init({})
 }, []);
 return (
<nav className="navBar" data-aos="flip-down" data-aos-duration="1000" data-aos-delay="100" data-aos-once="true">
      <a href="https://itude.com.br" target="_blank" rel="noreferrer">
        <img src={Logo} alt="logo itude" />
      </a>
</nav>
 )
}
