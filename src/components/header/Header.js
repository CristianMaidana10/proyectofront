import { useState } from "react";
import { Boton, Brand, Container, Logo, LogoName, Link, Nav, Toggle, Ul, BotonLogin, ListaSignIn, ListaSignUp, Mobilemenu, CloseMenu, Menutitle } from './header.elements';
import {LogoF} from '../Logo/Logo'
import Loguin from '../loguin/Loguin';
import Signup from "../signup/Signup";

const Header = () => {
    const [showSignin, setShowSignin] = useState(false)
    const [showSignup, setShowSignup] = useState(false)
    const [showMenu, setShowMenu] = useState(false)
    const [showClose, setShowClose] = useState(false)

    //Función para cerrar el Loguin y el Registarse
    //y esconder el botón (x) que cierra los dos bloques.
    const Shows = () => {
        setShowMenu(!showMenu)
        setShowSignin(false) 
        setShowSignup(false) 
        setShowClose(false)
    }

    //Función para cerrar el Loguin
    const closeLoguin = () => {
        setShowSignin(!showSignin) 
        setShowSignup(false) 
        setShowClose(true)
    }

    //Función para cerrar el Registrarse
    const closeSignup = () => {
        setShowSignin(false)
        setShowSignup(!showSignup)
        setShowClose(true)
    }

  return (
      <>
        <Container>
            <Brand>
                <LogoF onClick={()=> Shows()}/>
                <Link to='/' onClick={()=> Shows()}>Un destino, un hogar</Link>
                <Toggle onClick={() => (setShowMenu(!showMenu), setShowSignin(false), setShowSignup(false)) } >
                    <i className='fas fa-bars'></i>
                </Toggle>
            </Brand>
            <Nav abrir={showMenu}>
                <Mobilemenu open={showClose}>
                    <CloseMenu onClick={()=> Shows()}>X</CloseMenu>
                    <Menutitle>Menú</Menutitle>
                </Mobilemenu>
                <Ul>
                    <ListaSignUp onClick={() => closeSignup()} abrir={showSignup}><Boton>Crear cuenta</Boton></ListaSignUp>
                    <Signup abrir={showSignup}/>
                    <ListaSignIn onClick={() => closeLoguin()} abrir={showSignin} ><Boton>Iniciar sesión</Boton></ListaSignIn>
                    <Loguin abrir={showSignin}/>
                </Ul>
            </Nav>
        </Container>
      </>
  )
}

export default Header