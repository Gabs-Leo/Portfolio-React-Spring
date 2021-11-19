import "./projeto.css"
import icon from "./../../images/logoIcon.png"
import { Botao } from "../Botao/Botao"

interface ProjetoProperties{
    titulo:string;
    descricao:string
}

export const Projeto = (properties:ProjetoProperties) => {
    return(
        <div className="projeto">
            <div className="detail"></div>
            <img src={icon} alt="" />
            <div className="content">
                <h3>{properties.titulo}</h3>
                <p>{properties.descricao}</p>
                <Botao texto="Github" link="/" type="fill"/>
            </div>
        </div>
    )
}