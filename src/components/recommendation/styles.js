import styled from "styled-components"

const colors = {
    principal: '#194D98',
    error: '#DC143C'
}

export const Container = styled.div`
    width: 310px;
    min-height: fit-content;
    box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
    border-radius: 10px;
    background: #fff;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    margin: 0 auto;

    &:hover{
        transform: scale(1.01);
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
        width: 635px;
        flex-direction: row;
    }

    @media only screen and (min-width: 1440px) {
        width: 690px;
    }

`;

export const Image = styled.img`
    overflow: hidden;
    object-fit: cover;
    cursor: pointer;
    width: 100%;
    height: 259px;
    border-radius: 8px;

    /* @media only screen and (min-width: 481px) {
        width: 344px;
    } */

    @media only screen and (min-width: 1360px) {
        width: 311px;
    }
`;

export const Rating = styled.div`

`

export const Box = styled.div`
    width: 100%;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: flex-start;
    padding: 10px;
    margin: 0px auto 5px;
    background: #fff;
    gap: 10px;

    @media only screen and (min-width: 1360px) {
        width: calc(100% - 311px);
    }
`;

export const BoxTitle = styled.p`
    font-family: 'Roboto';
    font-weight: 700;
    font-size: 20px;
    color: #383B58;
`;

export const BoxCategory = styled.p`
    font-family: 'Roboto';
    font-weight: 700;
    font-size: 16px;
    color: #383B58;
`;

export const BoxDescription = styled.p`
    font-family: 'Roboto';
    font-weight: 700;
    font-size: 14px;
    color: #383B58;
    opacity: 0.6;
    text-align: justify;
`;

export const SButton = styled.button`
    width: 100%;
    height: 38px;
    cursor: pointer;
    display: flex;
    justify-content: center;
    align-items: center;
    font-family: 'Roboto';
    font-weight: 700;
    font-size: 16px;
    text-align: center;
    background: ${colors.principal};
    color: #fff;
    border: none;
    
    border-radius: 5px;
    transition: 0.5s;

    &:hover{
        box-shadow: 3px 0px 20px rgba(25, 77, 152, 0.5);
    }

`;