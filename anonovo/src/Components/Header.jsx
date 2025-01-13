


import logo from '../assets/logoanonovo.png'
import './Style.module.scss'
export default function Header(){
    return(
        <header>
           <img src={logo} alt="champanhe" />
           <nav>
                <ul>
                    <li> Paz</li>
                    <li> Saúde</li>
                    <li>Alegria</li>
                </ul>
           </nav>
        </header>
    )
}