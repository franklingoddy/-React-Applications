import "./Navbar.css"
import {RiMenu3Line, RiCloseLine} from "react-icons/ri"
import { useState } from "react"
import Logo from "../../assets/logo.svg"
import "./Navbar.css"


function Navbar(){
  const [toggleMenu, setToggleMenu] = useState(false)
      return(
        <div className="gpt3__navbar">
        <div className="gpt3__navbar-links">
          <div className="gpt3__navbar-links_logo">
          <img src={Logo} alt="" />
          </div>
          <div className="gpt3__navbar-links_container">
          <p><a href="#home">Home</a></p>
          <p><a href="#whatgpt3">WHAT IS GPT3?</a></p>
          <p><a href="#possibility">Open AI</a></p>
          <p><a href="#features">Case Studies</a></p>
          <p><a href="#blog">Library</a></p>
          </div>
        </div>
        <div className="gpt3__navbar-sign">
          <p>Sign In</p>
          <button type="button">Sign Up</button>
        </div>
        <div className="gpt3__navbar-menu">
      {toggleMenu
      ? <RiCloseLine color="#fff" size={27} onClick={() => setToggleMenu(false)} />
      : <RiMenu3Line color="#fff" size={27} onClick={() => setToggleMenu(true)} />
      }
      {toggleMenu &&(
        <div className="gpt3__navbar-menu_container scale-up-center">
          <div className="gpt3_navbar-menu_container-links">
          <p><a href="#home">Home</a></p>
          <p><a href="#gpt3">WHAT IS GPT3?</a></p>
          <p><a href="#possibility">Open AI</a></p>
          <p><a href="#features">Case Studies</a></p>
          <p><a href="#blog">Library</a></p>

          <div className="gpt3__navbar-menu_container-links-sign">
          <p>Sign In</p>
          <button type="button">Sign Up</button>
        </div>
          </div>
        </div>
      )}
        </div>
        </div>
      )
}

 export default Navbar
