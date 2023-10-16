import Style from '../css/sessao3.module.css'
import porco from '../img/porquinho.png'
import Cartao1 from '../img/cartaozin.png'
import Cartao2 from '../img/cartaozin2.png'
import banco from '../img/banco.png'

function sessao3(){
    return(
            <div className={Style.fundo3}>
                
                <h1 className={Style.titulo2}>Soluções <span className={Style.color}>inteligentes</span> para um mundo automatizado</h1>
                <div className={Style.porquinho}>
                    <img src={porco} alt="porco" />
                    <p className={Style.descricao1}>serviço incrível nos diferencia</p>
                </div>

                <div className={Style.cartao2}>
                    <img src={Cartao2} alt="Cartao2" />
                    <p className={Style.descricao3}>a complexidade da simplicidade</p>
                </div>

                <div className={Style.cartao1}>
                    <img src={Cartao1} alt="Cartao1" />
                    <p className={Style.descricao2}>para melhor qualidade de experiência</p>
                </div>
                    
                <div className={Style.banco}>
                    <img src={banco} alt="banco" />
                    <p className={Style.descricao4}>faça grandes coisas todos os dias</p>
                </div>
            </div>
    )
}

export default sessao3;