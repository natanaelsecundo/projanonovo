


import face from '../assets/face.png'
import insta from '../assets/insta.png'
import linkedln from '../assets/linked.png'
export default function Footer(){
    return(
        <footer>
          <a href="https://www.linkedin.com/company/vainaweb/" target="_blank">
          <img src={linkedln} id="logo"  alt="Logo do LinkedIn"></img>
        </a>
        <a href="https://www.facebook.com/vainaweb" target="_blank">
          <img src={face} id="logo"  alt="Logo do facebook"></img>
        </a>
        <a href="https://www.instagram.com/vainaweb/" target="_blank">
          <img src={insta} id="logo"  alt="Logo do instagram"></img>
        </a>
          </footer>
    )
}