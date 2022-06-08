import React from 'react'
import { Select, Span, Opcion } from './styles'
import Ciudades from '../locations/provincias.json'

export const ListOfLocations = (openSelect) => {
  return (
    // <Span>¿A dónde vamos?
        <Select name='ciudad' open={openSelect.select}>
          <Opcion>¿A dónde vamos?</Opcion>
                {
                    Ciudades.provincias.map(ciudad => <option className='provincia' key={ciudad.id}>{ciudad.iso_nombre}</option>)
                }
        </Select>
    // {/* </Span> */}
  )
}
