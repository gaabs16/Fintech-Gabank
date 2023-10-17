import Style from '../css/sobre.module.css'
import Logo from '../img/logo.png'
import Hamburguer from '../img/hamburguer.png'
import cartao from '../img/mulher-cartao.png'

function sobre(){
    return(
        <div classname={Style.fundo_sobre}>
            <div className={Style.logo}>
                <img src={Logo} alt="Logo" />
            </div>
            <header>
                <nav className={Style.menu}>
                    <li><button className={Style.botao2}>Para Você</button></li>
                    <li><button className={Style.botao2}>Sobre Nós</button></li>
                    <div className={Style.hamburguer}>
                        <img src={Hamburguer} alt="hamburguer" />
                    </div>
                </nav>
            </header>
        
            <div className={Style.tudo3}>
                    <section className={Style.texto}>
                        <h1 className={Style.titulo}>Gabank</h1>
                    </section>
                    <div className={Style.texto2}>
                        <h1 className={Style.descricao7}>No Gabank, estamos comprometidos em proporcionar uma experiência bancária excepcional, baseada em confiança, inovação e dedicação aos nossos clientes. </h1>
                        <button className={Style.botao5}>Pedir meu cartão</button>
                    </div>
                    <div className={Style.mulher-cartao}>
                        <img src={cartao} alt="celular" />
                    </div>
            </div>
        </div>
    )
}


export default sobre;