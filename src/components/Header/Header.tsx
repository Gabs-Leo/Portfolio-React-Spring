import { Botao } from "../Botao/Botao"
import { Navbar } from "../Navbar/Navbar"
import "./header.css"

export const Header = () => {
    return(
        <header>
            <Navbar />
            <div className="container">
                <div>
                    <h1>Desenvolvedor Back-End</h1>
                    <h2>Oi, Eu Sou o Gabs!</h2>
                    <Botao texto="Projetos" link="/" type="empty round long"/>
                </div>
            </div>
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 200"><path fill="#ffaaed" fill-opacity="1" d="M0,192L1440,96L1440,320L0,320Z"></path></svg>
        </header>
    )
}