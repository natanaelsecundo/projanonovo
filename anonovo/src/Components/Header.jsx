


import logo from '../assets/logoanonovo.png'
import './Style.module.scss'
export default function Header(){
    return(
        <header>
           <img id='logoHeader' src={logo} alt="champanhe" />
           <nav className='head'>
                <ul id='listaHeader'>
                    <li class="l1"><a>Paz </a></li>
                    <li class="l2"><a>Saúde</a></li>
                    <li class="l3"><a>Alegria</a></li>
                </ul>
           </nav>
        </header>
    )
}