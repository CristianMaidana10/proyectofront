import styled from "styled-components";

export const Caja = styled.div`
    width: 414px;
    padding: 10px 20px;
    height: 79px;
    display: flex;
    flex-direction: row;
    justify-content: space-around;
    align-items: center;
    left: 0%;
    right: 0%;
    top: 37.74%;
    bottom: 12.58%;
    background-color: rgba(84,87,118, 0.1);
    margin-top: -10px;

    @media only screen and (min-width: 425px) {
        width: 768px;
        margin-top: -470px;
    }

    @media only screen and (min-width: 1024px) {
        /* font-size: 36px; */
        width: 2560px;
        height: 60px;
        margin-top: -3347px;
    }
`;

export const BoxList = styled.ul`
    display: flex;
    flex-direction: row;
    justify-content: space-around;
    /* align-items: center; */
    gap: 2px;
    /* padding-right: 10px; */
    list-style-type: none;
`

export const BoxLocation = styled.div`
    width: 181px;
    height: 37px;
    top: 74px;
    left: 27px;
    font-family: 'Roboto';
    font-weight: 500;
    size: 14px;
    line-height: 16.41px;
    color: #383b58;
    justify-content: center;
    
`;

export const BoxRating = styled.div`
    /* justify-content: flex-end; */
    width: 115px;
    height: 23.45px;
    /* align-items: flex-end; */
    /* top: 6px; */
`;

