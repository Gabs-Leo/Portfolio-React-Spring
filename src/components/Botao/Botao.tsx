import "./botao.css"

interface BotaoProperties{
    texto:string;
    link:string;
    type:string;
}

export const Botao = (properties:BotaoProperties) => {
    return(
        <a className={properties.type} href={properties.link}>{properties.texto} 
        </a>
    )
}