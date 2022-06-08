import React from 'react'
import { Category } from '../category/Category'
import { Container, Lista, Item, Title } from './styles'
import Categorias from '../category/categorias.json'

export const ListOfCategories = () => {
  return (
    <Container>
        <Title>Busca por tipo de alojamiento</Title>
        <Lista>
            {
                Categorias.map(category => <Item key={category.id}><Category {...category}/></Item>)
            }
        </Lista>
    </Container>
  )
}
