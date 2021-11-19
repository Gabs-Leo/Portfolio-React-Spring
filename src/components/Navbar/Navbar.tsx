import "./navbar.css"
import logo from "../../images/logo.png"
import { Divide as Hamburger } from 'hamburger-react'

export const Navbar = () => {
    return(
        <nav>
            <div className="container">
                <div><img src={logo} alt=""/></div>
                <div><Hamburger color="#ffaaed"/></div>
                
            </div>
        </nav>
    )
}