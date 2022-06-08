import styled from "styled-components";
import fondoSearch from '../../fondoSearch.svg'

const colors = {
    principal: '#194D98',
    error: '#DC143C',
    boton: '#11366B'
}

export const SearchContainer = styled.div`
    width: 100%;
    height: fit-content;
    padding: 10px;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    /* background: #545776; */
    background: url(${fondoSearch});
    background-position: center;
    background-repeat: no-repeat;
    background-size: cover;
    gap: 10px;
    margin-top: 88px;
`;

export const Title = styled.h1`
    text-align: center;
    font-family: 'Roboto';
    font-weight: 700;
    font-size: 28px;
    line-height: 1;
    text-align: center;
    color: #fff;
    margin: 10px auto;

    @media only screen and (min-width: 768px) {
        margin: 20px auto;
        font-size: 30px;
    }

    @media only screen and (min-width: 1024px) {
        font-size: 36px;
    }
`;

export const Container = styled.div`
    width: 100%;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    gap: 10px;

    @media only screen and (min-width: 768px) {
        flex-direction: row;
        max-width: 1100px;
        margin: 0px auto 20px;
    }
`;

export const Boxlocation = styled.div`
    background: white;
    height: 39px;
    box-shadow: 0px 1px 5px rgba(0, 0, 0, 0.15);
    border-radius: 5px;
    transition: 0.5s;
    display: flex;
    /* justify-content: center; */
    align-items: center;
    padding: 0px 5px;
    position: relative;
`;

export const Location = styled.input`
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

export const Calendar = styled.input`
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
        width: 417px;
    }
`;

export const SButton = styled.button`
    width: 300px;
    height: 38px;
    padding: 5px 8px;
    cursor: pointer;
    display: flex;
    justify-content: center;
    align-items: center;
    font-family: 'Roboto';
    font-weight: 700;
    font-size: 16px;
    text-align: center;
    background: ${colors.boton};
    color: #fff;
    border: 1px solid transparent;
    /* filter: drop-shadow(0px 2px 4px rgba(0, 0, 0, 0.12)); */
    box-shadow: 0px 2px 4px rgba(0, 0, 0, 0.12);
    border-radius: 5px;
    transition: all .3s ease;

    &:hover{
        border: 1px solid #fff;
    }

    @media only screen and (min-width: 400px) {
        width: 394px;
    }

    @media only screen and (min-width: 768px) {
        width: 206px;
    }
`;
