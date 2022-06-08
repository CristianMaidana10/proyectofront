import styled from "styled-components";

export const Select = styled.select`
    -webkit-appearance: none;
    z-index: 1;
    width: 274px;
    height: 38px;
    padding: 5px 8px;
    border: none;
    outline: none;
    transition: 0.5s;

    @media only screen and (min-width: 400px) {
        width: 368px;
    }

    @media only screen and (min-width: 768px) {
        width: 249px;
    }
    
    @media only screen and (min-width: 1024px) {
        width: 422px;
    }
`;

export const Opcion = styled.option`
    position: absolute;
    top: 39px;
    left: 0;
    display: ${({open})=> open ? "flex" : "none"};
    z-index: 1;
    width: 274px;
    height: 38px;
    padding: 5px 8px;
    border: none;
    outline: none;
    transition: 0.5s;

    @media only screen and (min-width: 400px) {
        width: 368px;
    }

    @media only screen and (min-width: 768px) {
        width: 249px;
    }
    
    @media only screen and (min-width: 1024px) {
        width: 422px;
    }
`;

export const Span = styled.span`
    display: flex;
    justify-content: flex-start;
    align-items: center;
    color: #7a7a7a;
    padding: 0px 10px;
    width: 274px;
    transition: 0.5s;

    @media only screen and (min-width: 400px) {
        width: 368px;
    }

    @media only screen and (min-width: 768px) {
        width: 249px;
    }
    
    @media only screen and (min-width: 1024px) {
        width: 422px;
    }
`;