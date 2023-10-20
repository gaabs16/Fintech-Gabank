import Style from '../css/sessao1.module.css'
import Cartao from '../img/cartao.png'

function Sessao1(){
    return(
       <div className={Style.fundo1}>
            <section className={Style.texto}>
                <h1 className={Style.titulo}>Gabank</h1>
                <p className={Style.descricao}>Descubra a excelência em serviços bancários no nosso site - onde cada conta é uma história de sucesso!</p>
                <button className={Style.botao1}>Saiba Mais</button>
                <div className={Style.cartao}>
                    <img src={Cartao} alt="cartao" />
                </div>
            </section>
        </div>
       
    )
}

export default Sessao1;