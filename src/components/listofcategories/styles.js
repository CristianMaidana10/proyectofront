import styled from "styled-components"

export const Container = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    gap: 20px;
    padding: 5px;
    margin: 0 auto;

    @media only screen and (min-width: 768px) {
        max-width: 990px;
    }

    @media only screen and (min-width: 1024px) {
        max-width: 1400px;
    }

    @media only screen and (min-width: 1340px) {
        align-items: flex-start;
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
    gap: 10px;
    width: 100%;
    max-width: 950px;
    margin: 0 auto;

    @media only screen and (min-width: 1340px) {
        justify-content: space-between;
        max-width: 1400px;
    }

`;

export const Item = styled.li`

`;