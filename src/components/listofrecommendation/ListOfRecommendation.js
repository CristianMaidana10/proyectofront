import React from 'react'
import { Container, ContainerTitle, Title, Lista, Item } from './styles'
import { Recommendation } from '../recommendation/Recommendation'
import Recommendationn from '../recommendation/recommendation.json'

export const ListOfRecommendatio = () => {
  return (
    <Container>
      <ContainerTitle>
        <Title>Recomendaciones</Title>
      </ContainerTitle>
        <Lista>
            {
                Recommendationn.map(recommen => <Item key={recommen.id}><Recommendation {...recommen}/></Item>)
            }
        </Lista>
    </Container>
  )
}
