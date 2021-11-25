import "./contatosection.css";



export const ContatoSection = () => {
    return(
        <div>
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 150 1440 200"><path fill="#cb7aba" fill-opacity="1" d="M0,224L1440,320L1440,0L0,0Z"></path></svg>
            <div className="container">
                <h2>CONTATO</h2>
                <form action="">
                    <div className="row">
                        <div className="col">
                            <input type="text" id="nome"/>
                            <label htmlFor="nome">Nome</label>
                        </div>
                        <div className="col">
                            <input type="email" id="email"/>
                            <label htmlFor="email">Email</label>
                        </div>
                    </div>
                    <div className="form-group">
                        <label htmlFor="textarea">Mensagem</label>
                        <textarea id="textarea" cols={30} rows={6}></textarea>
                    </div>

                    <input type="submit" className="fill round long"/>
                </form>
            </div>
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 200"><path fill="#121214" fill-opacity="1" d="M0,192L1440,96L1440,320L0,320Z"></path></svg>
        </div>
    )
}