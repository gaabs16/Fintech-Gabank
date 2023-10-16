import Style from '../css/sessao2.module.css'

function sessao2(){
    return(
        <div>
            <div className={Style.fundo2}>
                
                <h1 className={Style.titulo1}>Acesso Rápido</h1>
               
                <section className={Style.quadrados}>
                    <div className={Style.quadrado1}>
                        <h1 className={Style.quadrado1_texto}>Boleto de Financiamento</h1>
                    </div>
                    <div className={Style.quadrado2}>
                        <h1 className={Style.quadrado2_texto}>Fatura do Cartao de Crédito</h1>
                    </div>
                    <div className={Style.quadrado3}>
                        <h1 className={Style.quadrado3_texto}>Renegogiação de Dívida</h1>
                    </div>
                    <div className={Style.quadrado4}>
                        <h1 className={Style.quadrado4_texto}>Validador de Boleto</h1>
                    </div>
                </section>
                
            </div>
        </div>
    )
}

export default sessao2;