import React from "react";
import { Caja, BoxLocation, BoxRating, BoxList } from './locationrating.elements';
import Recommendations from '../../recommendation/recommendation.json'
import { FaMapMarkerAlt } from 'react-icons/fa';
import Rating from "react-rating";
import { BsStar } from "react-icons/bs";
import { BsStarFill } from "react-icons/bs";
// import { BsStarHalf } from "react-icons/bs";


export const LocationRating = ({ id }) => {
    return (
        <Caja>
            <BoxList>
                <FaMapMarkerAlt />
                <BoxLocation>{Recommendations[id].location}</BoxLocation>
                    <BoxRating><Rating
                        placeholderRating={3.5}
                        emptySymbol={<BsStar />}
                        placeholderSymbol={<BsStar />}
                        fullSymbol={<BsStarFill />} />  
                    </BoxRating>
            </BoxList>
        </Caja>
    )
}