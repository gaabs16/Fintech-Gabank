import Style from '../css/sessao1.module.css'
import Logo from '../img/logo.png'
import Hamburguer from '../img/hamburguer.png'
import Cartao from '../img/cartao.png'

function sessao1(){
    return(
       <div className={Style.fundo1}>
            <div className={Style.logo}>
                <img src={Logo} alt="Logo" />
            </div>
            <section className={Style.texto}>
                <h1 className={Style.titulo}>Gabank</h1>
                <p className={Style.descricao}>Descubra a excelência em serviços bancários no nosso site - onde cada conta é uma história de sucesso!</p>
                <button className={Style.botao1}>Saiba Mais</button>
            </section>
            <header>
                <nav className={Style.menu}>
                    <li><button className={Style.botao2}>Para Você</button></li>
                    <li><button className={Style.botao2}>Sobre Nós</button></li>
                    <div className={Style.hamburguer}>
                        <img src={Hamburguer} alt="hamburguer" />
                    </div>
                    <div className={Style.cartao}>
                        <img src={Cartao} alt="cartao" />
                    </div>
                </nav>
            </header>
        </div>
       
    )
}

export default sessao1;