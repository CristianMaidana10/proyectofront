import { useState } from 'react';
import { Title, Form, Input, Label, Overlay, Signin, Texto, Button, Registrar, Leyenda, ContainerInputs } from './loguin.elements';

const useInputValue = initialValue => {
    const [value, setValue] = useState(initialValue)
    const onChange = e => setValue(e.target.value)

    return {value, onChange}
}

const Loguin = (showSignin) => {
    const correo = useInputValue('')
    const password = useInputValue('')

  return (
        <Signin className='Inicio' open={showSignin.abrir}>
            <Title>Iniciar sesión</Title>
            <Overlay>
                <Form>
                    <ContainerInputs>
                        <Label htmlFor="correo"><b>Correo electrónico</b></Label>
                        <Input type="email" placeholder="" name="correo" value={correo.value} onChange={correo.onChange} id="inputEmail" required></Input>
                        <Leyenda>Correo electrónico o contraseña invalida</Leyenda>
                    </ContainerInputs>

                    <Label htmlFor="psw"><b>Contraseña</b></Label>
                    <Input type="password" placeholder="••••••" name="psw" value={password.value} onChange={password.onChange} id="inputPassword" required></Input>

                    <Button type="submit">Ingresar</Button>
                    <Texto>¿Aún no tienes cuenta? <Registrar>Registrarte</Registrar></Texto>
                </Form>
            </Overlay>
        </Signin>
  )
}

export default Loguin