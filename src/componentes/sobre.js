import Style from '../css/sobre.module.css'
import Header from './header';
import cartao from '../img/mulher-cartao.png'

function Sobre(){
    return(
        <div>
            <Header />
            <div className={Style.fundo_sobre}>
                <div className={Style.texto}>
                    <h1 className={Style.titulo}>Gabank</h1>
                    <h1 className={Style.descricao7}>No Gabank, estamos comprometidos em proporcionar uma experiência bancária excepcional, baseada em confiança, inovação e dedicação aos nossos clientes. </h1>
                    <button className={Style.botao5}>Pedir meu cartão</button>
                </div>
                <div className={Style.mulher_cartao}>
                    <img src={cartao} alt="celular" />
                </div>
            </div>
        </div>
    )
}


export default Sobre;