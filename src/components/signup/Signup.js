
import { Button, Checkin, Form, Fullname, Input, Label, Texto, Title, Registrar, NameContainer, Boxlocation, Input2 } from './signup.elements'
import {BsFillEyeSlashFill} from "react-icons/bs";
import {BsFillEyeFill} from "react-icons/bs";

const Signup = (showSignup) => {

    const ShowContraseña = () =>{
        let Contraseña = document.getElementById('psw');
        let Icon = document.getElementById('iconClose');
        let Icon2 = document.getElementById('iconShow');

    
        if(Contraseña.getAttribute('type') === 'password'){
            Contraseña.removeAttribute('type');
            Contraseña.setAttribute('type','text')
            Icon.style.display = 'none';
            Icon2.style.display = 'block'
        }else{
            Contraseña.removeAttribute('type');
            Contraseña.setAttribute('type','password')
            Icon.style.display = 'block';
            Icon2.style.display = 'none'
        }
    }

    const ShowContraseña2 = () =>{
        let Contraseña = document.getElementById('psw2');
        let Icon = document.getElementById('iconClose2');
        let Icon2 = document.getElementById('iconShow2');
        
        if(Contraseña.getAttribute('type') === 'password'){
            Contraseña.removeAttribute('type');
            Contraseña.setAttribute('type','text')
            Icon.style.display = 'none';
            Icon2.style.display = 'block'
        }else{
            Contraseña.removeAttribute('type');
            Contraseña.setAttribute('type','password')
            Icon.style.display = 'block';
            Icon2.style.display = 'none'
        }
    }

    const apiUrl = 'https://ctd-todo-api.herokuapp.com/v1/users';


  return (
    <Checkin open={showSignup.abrir}>
        <Title>Crear cuenta</Title>
        <Form>
            <Fullname>
                <NameContainer>
                    <Label htmlFor="nombre">Nombre</Label>
                    <Input type="text" placeholder="" name="nombre" id="nombre" required></Input>
                </NameContainer>
                <NameContainer>
                    <Label htmlFor="apellido">Apellido</Label>
                    <Input type="text" placeholder="" name="apellido" id="apellido" required></Input>
                </NameContainer>
            </Fullname>
            <Label htmlFor="correo">Correo electrónico</Label>
            <Input type="email" placeholder="" name="correo" id="email" required></Input>
            <Label htmlFor="psw">Contraseña</Label>
            <Boxlocation>
                <Input2 type="password" placeholder="" name="psw" id="psw" required></Input2>
                <BsFillEyeSlashFill id='iconClose' style={{color:'#607D8B', cursor:'pointer'}} onClick={()=>ShowContraseña()}/>
                <BsFillEyeFill id='iconShow' style={{color:'#607D8B', cursor:'pointer', display:'none'}} onClick={()=>ShowContraseña()}/>
            </Boxlocation>
            <Label htmlFor="psw2">Confirmar Contraseña</Label>
            <Boxlocation>
                <Input2 type="password" placeholder="" name="psw2" id="psw2" required></Input2>
                <BsFillEyeSlashFill id='iconClose2' style={{color:'#607D8B', cursor:'pointer'}} onClick={()=>ShowContraseña2()}/>
                <BsFillEyeFill id='iconShow2' style={{color:'#607D8B', cursor:'pointer', display:'none'}} onClick={()=>ShowContraseña2()}/>
            </Boxlocation>

            <Button>Crear cuenta</Button>
            <Texto>¿Ya tienes una cuenta? <Registrar>Iniciar sesión</Registrar></Texto>
        </Form>
    </Checkin>
  )
}

export default Signup