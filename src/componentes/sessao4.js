import Style from '../css/sessao4.module.css'
import propaganda from '../img/mulher_celular.png'
import celular from '../img/celular.png'

function sessao4(){
    return(
        <div className={Style.fundo4}>
                <div className={Style.tudo1}>
                    <div className={Style.propaganda}>
                        <img src={propaganda}  alt="propaganda" />
                    </div>
                    <div className={Style.texto}>
                        <h1 className={Style.descricao5}>Cumpra missões no app e ganhe recompensas.</h1>
                        <button className={Style.botao3}>abra sua conta</button>
                    </div>
                </div>

                <div className={Style.tudo2}>
                    <div className={Style.texto1}>
                        <h1 className={Style.descricao6}>Uma conta completa com soluções inteligentes para a sua vida.</h1>
                        <button className={Style.botao4}>abra sua conta</button>
                    </div>
                    <div className={Style.celular}>
                        <img src={celular} alt="celular" />
                    </div>
                </div>
        </div>
    )
}

export default sessao4;