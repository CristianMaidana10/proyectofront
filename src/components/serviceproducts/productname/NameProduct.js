import React from "react";
import { Box, BoxName, BoxTitle } from "./nameproduct.elements";
import Recommendations from '../../recommendation/recommendation.json'  


export const NameProduct = ({id}) => {
    return (
        <Box>
            <BoxName>{Recommendations[id].titulo}</BoxName>
            <BoxTitle>{Recommendations[id].nombre}</BoxTitle>
        </Box>
    )
}