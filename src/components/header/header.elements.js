import styled from "styled-components";
import { Link as LinkRouter } from "react-router-dom";

const colors = {
    principal: '#194D98',
    error: '#DC143C',
    boton: '#11366B'
}

export const Container = styled.div`
    background-color: ${colors.principal};
    width: 100%;
    padding: 10px 20px;
    position: fixed;
    z-index: 10;
    top: 0;

    @media only screen and (min-width: 481px) {
        display: flex;
        justify-content: space-between;
        align-items: flex-end;
    }
`;

export const Brand = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;

    @media only screen and (min-width: 481px) {
        display: flex;
        justify-content: center;
        gap: 10px;
    }
`;

export const Logo = styled.img`
    width: 68px;
    border-radius: 8px;
`;

export const Link = styled(LinkRouter)`
    display: none;
    text-decoration: none;

    @media only screen and (min-width: 768px) {
        display: block;
        font-family: 'Roboto';
        font-style: italic;
        font-weight: 300;
        font-size: 20px;
        color: #fff;
        cursor: pointer;
    }
`;

export const Toggle = styled.div`
    font-size: 1.2rem;
    cursor: pointer;

    @media only screen and (min-width: 481px) {
       display: none;
    }
`;

export const Nav = styled.div`
    display: ${({abrir})=> abrir ? 'flex' : 'none'};
    flex-direction: column;
    width: 100%;
    height: 100vh;
    z-index: 1;
    position: absolute;
    background: ${colors.principal};
    top: 88px;
    right: 0;

    @media only screen and (min-width: 481px) {
       display: flex;
       flex-direction: row;
       width: fit-content;
       height: fit-content;
       z-index: 0;
       position: initial;
       background: transparent;
    }
`;

export const Mobilemenu = styled.div`
    width: 100%;
    height: 150px;
    background: ${colors.principal};
    margin-bottom: 5px;
    position: relative;

    @media only screen and (min-width: 481px) {
        position: absolute;
        bottom: -50px;
        height: 40px;
        z-index: 100;
        background: rgb(247,247,247);
        display: ${({open})=>open ? 'block' : 'none'};
    }
`;

export const CloseMenu = styled.p`
    position: absolute;
    top: 5px;
    left: 10px;
    font-weight: 700;
    font-size: 24px;
    color: #fff;
    cursor: pointer;

    @media only screen and (min-width: 481px) {
        color: #000;
        opacity: 0.7;

        &:hover{
            transform: scale(1.1);
            transition: 0.5s;
            opacity: 1;
        }
    }
`;

export const Menutitle = styled.p`
    position: absolute;
    bottom: 5px;
    right: 10px;
    font-weight: 700;
    font-size: 20px;
    text-align: right;
    color: #fff;

    @media only screen and (min-width: 481px) {
        display: none;
    }
`;

export const Ul = styled.ul`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: flex-end;
    gap: 15px;
    padding-right: 10px;
    list-style-type: none;

    @media only screen and (min-width: 481px) {
        flex-direction: row;
        align-items: center;
        padding-right: 0;
    }
`;

export const ListaSignUp = styled.li`
    height: fit-content;
    position: relative;

    &::before{
        content: '';
        width: 280px;
        height: 1px;
        background: #000;
        position: absolute;
        bottom: -7px;
        right: 0;
    }
    
    @media only screen and (min-width: 481px) {
        cursor: pointer;
        display: flex;
        justify-content: center;
        align-items: center;
        width: 206px;
        height: 40px;
        padding: 10px;
        background: #FFFFFF;
        border: 1px solid transparent;
        border-radius: 5px;
        -webkit-border-radius: 5px;
        -moz-border-radius: 5px;
        -ms-border-radius: 5px;
        -o-border-radius: 5px;
        transition: all .3s ease-in-out;
        display: ${({abrir})=> abrir ? "none" : "flex"};

        &:hover{
            border: 1px solid #000;
        }

        &::before{
            display: none;
        }
    }

    @media only screen and (min-width: 768px) {
        width: 206px;
    }
`;

export const Boton = styled.a`

    text-decoration: none;
    font-family: 'Roboto';
    font-weight: 700;
    font-size: 16px;
    color: #000;
    cursor: pointer;
    border: 1px solid transparent;
   
   @media only screen and (min-width: 481px) {
       color: ${colors.boton};
   }
`;

export const ListaSignIn = styled.li`

    @media only screen and (min-width: 481px) {
        cursor: pointer;
        display: flex;
        justify-content: center;
        align-items: center;
        width: 164px;
        height: 40px;
        padding: 10px;
        background: #FFFFFF;
        border: 1px solid transparent;
        border-radius: 5px;
        -webkit-border-radius: 5px;
        -moz-border-radius: 5px;
        -ms-border-radius: 5px;
        -o-border-radius: 5px;
        transition: all .3s ease-in-out;
        display: ${({abrir})=> abrir ? "none" : "flex"};

        &:hover{
            border: 1px solid #000;
        }
    }

    @media only screen and (min-width: 768px) {
        width: 206px;
    }
`;

export const BotonLogin = styled.a`
    text-decoration: none;
    font-family: 'Roboto';
    font-weight: 700;
    font-size: 16px;
    color: #1DBEB4;
    cursor: pointer;
`;