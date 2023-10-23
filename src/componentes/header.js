import {Link} from 'react-router-dom'
import Style from '../css/header.module.css'
import Logo from '../img/logo.png'
import Hamburguer from '../img/hamburguer.png'

function Header(){
    return(
        <div className={Style.fundo_header}>
            <div className={Style.logo}>
                <img src={Logo} alt="Logo" />
            </div>
            <header>
                <nav className={Style.menu}>
                    <li><Link to='/'><button className={Style.botao2}>Para Você</button></Link></li>
                    <li><Link to='/Sobre'><button className={Style.botao2}>Sobre Nós</button></Link></li>
                    <div className={Style.hamburguer}>
                        <img src={Hamburguer} alt="hamburguer" />
                    </div>
                </nav>
            </header>
        </div>
    )
}

export default Header;