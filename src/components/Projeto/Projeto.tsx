interface ProjetoProperties{
    titulo:string;
    descricao:string
}

export const Projeto = (properties:ProjetoProperties) => {
    return(
        <div className="projeto">
            <h3>{properties.titulo}</h3>
            <p>{properties.descricao}</p>
        </div>
    )
}