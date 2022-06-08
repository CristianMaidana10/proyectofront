import styled from "styled-components";

export const Container = styled.div`
    width: 310px;
    box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
    border-radius: 10px;

    &:hover{
        transform: scale(1.02);
        box-shadow:
        -1.5px -1.5px 3.6px rgba(0, 0, 0, 0.024),
        0px 6.8px 10px rgba(0, 0, 0, 0.035),
        0px 25.7px 24.1px rgba(0, 0, 0, 0.046),
        0px 30px 20px rgba(0, 0, 0, 0.07)
        ;


    }

    @media only screen and (min-width: 426px) {
        width: 350px;
    }

    @media only screen and (min-width: 670px) {
        width: 325px;
    }

`;

export const Image = styled.img`
    overflow: hidden;
    object-fit: cover;
    width: 100%;
    height: 184px;
    border-radius: 8px 8px 0px 0px;
`;

export const Box = styled.div`
    width: 100%;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: flex-start;
    padding: 10px;
    margin: 5px auto;
`;

export const BoxTitle = styled.p`
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