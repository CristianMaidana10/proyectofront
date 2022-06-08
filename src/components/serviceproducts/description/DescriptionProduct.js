import React from 'react'
import { Box, BoxName, BoxDescription} from './description.elements'
import Recommendations from '../../recommendation/recommendation.json'


export const Description = ({id}) => {
      return (
            <Box>
                  <BoxName>{Recommendations[id].nombre}</BoxName>
                  <BoxDescription>{Recommendations[id].descripcion}</BoxDescription>
            </Box>
      )
}