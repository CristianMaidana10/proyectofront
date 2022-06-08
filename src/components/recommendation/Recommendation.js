import React from 'react'
import { Container, Image, Box, BoxTitle, BoxDescription, SButton, BoxCategory } from './styles'

export const Recommendation = ({urlImagen, titulo, nombre, descripcion} ) => {
  return (
    <Container>
        <Image src={urlImagen}/>
        <Box>
            <BoxCategory>{titulo}</BoxCategory>
            <BoxTitle>{nombre}</BoxTitle>
            <BoxDescription>{descripcion}</BoxDescription>
            <SButton>Ver más</SButton>
        </Box>
    </Container>
  )
}
