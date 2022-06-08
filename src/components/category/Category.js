import React from 'react'
import { Container, Image, Box, BoxTitle, BoxDescription } from './category.elements'
import { Link } from 'react-router-dom'


export const Category = ({urlImagen, titulo, descripcion}) => {
  return (
        <Container>
          <Link to='/'>
            <Image src={urlImagen}/>
          </Link>
            <Box>
                <BoxTitle>{titulo}</BoxTitle>
                <BoxDescription>{descripcion}</BoxDescription>
            </Box>
        </Container>
  )
}
