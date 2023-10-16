import Style from '../css/footer.module.css'
import logo from '../img/logo-footer.png'
import instagram from '../img/insta.png'
import linkedin from '../img/linkedin.png'

function footer(){
    return(
        <div className={Style.fundo5}>
            <div className={Style.logo_footer}>
                <img src={logo} alt="propaganda" />

                <div className={Style.sessao}>
                    <h3 className={Style.social}>Redes Sociais</h3>
                    <div className={Style.redes}>
                        <img src={instagram} alt="instagram" />
                        <img src={linkedin} alt="linkedin" />
                    </div>
                </div>

                <div className={Style.sessao1}>
                    <h3 className={Style.produtos}>Produtos</h3>
                    <ul>
                        <li>Conta Digital</li>
                        <li>Investimentos</li>
                        <li>Cartão de Crédito</li>
                    </ul>
                </div>                
            </div>

            <div className={Style.footer_nome}>
                <h6><span className={Style.color}>Desenvolvido pela Gabriella Hernandes</span></h6>
            </div>
        </div>
    )
}

export default footer;