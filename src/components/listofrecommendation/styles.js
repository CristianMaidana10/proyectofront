import styled from "styled-components"

export const Container = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    gap: 20px;
    margin: 30px auto 0px;
    padding: 20px;
    background: #e4e4e4;

`;

export const ContainerTitle = styled.div`
    max-width: 1310px;
    width: 100%;
    margin: 0 auto;
    display: flex;
    justify-content: center;
    align-items: center;

    @media only screen and (min-width: 1340px) {
        justify-content: flex-start;
    }

    @media only screen and (min-width: 1440px) {
        max-width: 1400px;
    }
`;

export const Title = styled.h2`
    /* width: 100%;
    margin: 0 auto;
    text-align: left;
    padding: 10px; */

    font-size: 18px;

    @media only screen and (min-width: 768px) {
        font-size: 25px;
    }
`;

export const Lista = styled.ul`
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
    align-items: center;
    list-style-type: none;
    gap: 20px;
    width: 100%;

    @media only screen and (max-width: 1330px) {
        max-width: 990px;
        margin: 0 auto;
    }

    @media only screen and (min-width: 1330px) {
        justify-content: space-between;
        max-width: 1310px;
    }

    @media only screen and (min-width: 1330px) {
        max-width: 1400px;
    }
`;

export const Item = styled.li`

`;