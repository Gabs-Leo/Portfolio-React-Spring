import { Projeto } from "../Projeto/Projeto"
import "./section.css"

export const Section = () => {
    return (
        <section>
            <div className="container">
                <h2>Projetos</h2>
                <div className="gallery">
                    <Projeto titulo="Dashboard de Vendas" descricao="Lorem, ipsum dolor sit amet consectetur adipisicing elit. Officia blanditiis nulla, dolore autem fugit eos nobis repellat nisi ex tempora, laboriosam qui. Ex earum neque possimus fugit natus temporibus a."/>
                    <Projeto titulo="Dashboard de Vendas" descricao="Lorem, ipsum dolor sit amet consectetur adipisicing elit. Officia blanditiis nulla, dolore autem fugit eos nobis repellat nisi ex tempora, laboriosam qui. Ex earum neque possimus fugit natus temporibus a."/>
                    <Projeto titulo="Dashboard de Vendas" descricao="Lorem, ipsum dolor sit amet consectetur adipisicing elit. Officia blanditiis nulla, dolore autem fugit eos nobis repellat nisi ex tempora, laboriosam qui. Ex earum neque possimus fugit natus temporibus a."/>
                    <Projeto titulo="Dashboard de Vendas" descricao="Lorem, ipsum dolor sit amet consectetur adipisicing elit. Officia blanditiis nulla, dolore autem fugit eos nobis repellat nisi ex tempora, laboriosam qui. Ex earum neque possimus fugit natus temporibus a."/>
                </div>
            </div>
        </section>
    )
}