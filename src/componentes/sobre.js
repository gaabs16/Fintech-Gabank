import Style from '../css/sobre.module.css'
import Header from './header';
import cartao from '../img/mulher-cartao.png'

function sobre(){
    return(
        <div classname={Style.fundo5}>
            <Header />
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