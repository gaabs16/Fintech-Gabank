import Sessao1 from './sessao1';
import Acesso from './sessao2';
import Solucoes from './sessao3';
import Missoes from './sessao4';

function Tudo(){
    return(
        <div>
            <Sessao1 />
            <Acesso />
            <Solucoes />
            <Missoes />
        </div>
    )
}

export default Tudo;