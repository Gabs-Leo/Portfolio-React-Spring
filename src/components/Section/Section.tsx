import React from "react"
import "./section.css"

interface SectionProperties{
    tema:string
    conteudo?:React.ReactNode
}

export const Section = (properties:SectionProperties) => {
    return (
        <section className={properties.tema}>
            <div>{properties.conteudo}</div>
        </section>
    )
}
