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
    width: 320px;
    height: 71px;
    display: flex;
    flex-direction: column;
    justify-content: center;
    gap: 3px;
    left: 0px;
    right: 0px;
    top: 0px;
    bottom: 62.26px;
    background: #545776;
    margin-top: -169px;
    
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
`

export const BoxTitle = styled.div`
    left: 2.17%;
    right: 53.38%;
    top: 13.84%;
    bottom: 68.55%;
    font-family: 'Roboto';
    font-style: normal;
    font-weight: 700;
    font-size: 24px;
    line-height: 28px;
    color: #FFFFFF;
`

export const BoxName = styled.p`
    left: 2.42%;
    right: 51.93%;
    top: 5.03%;
    bottom: 76.73%;
    font-family: 'Quicksand';
    font-style: normal;
    font-weight: 700;
    font-size: 14px;
    line-height: 18px;
    color: #FFFFFF;
`