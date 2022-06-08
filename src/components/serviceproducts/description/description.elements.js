import styled from "styled-components";

export const Contenedor = styled.div`
    width: 100%;
    height: 100vh;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    gap: 10px; 
    margin-top: 92px;
    `;

export const Box = styled.div`
    width: 100%;
    height: fit-content;
    display: flex;
    flex-direction: column;
    justify-content: center;
    gap: 10px; 
    padding: 10px;
    `;

export const BoxName = styled.p`
    font-family: 'Roboto';
    font-weight: 700;
    font-size: 20px;
    color: #383B58;
`;

export const BoxDescription = styled.p`
    font-family: 'Roboto';
    font-weight: 700;
    font-size: 14px;
    color: #383B58;
    opacity: 0.6;
`;
