import styled from "styled-components";


const colors = {
    principal: '#194D98',
    error: '#DC143C'
}

export const Signin = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: flex-start;
    align-items: center;
    width: 100%;
    /* height: ${({open})=> open ? "calc(100% - 145px)" : "0%"}; */
    height: ${({open})=> open ? "100%" : "0%"};
    position: fixed;
    z-index: 1;
    top: 150px;
    left: 0;
    background: rgb(247,247,247);
    overflow-y: hidden;
    transition: 0.5s;

    @media only screen and (min-width: 481px) {
        display: flex;
        flex-direction: column;
        align-items: center;
        width: 100%;
        /* height: ${({open})=> open ? "calc(100% - 145px)" : "0%"}; */
        height: ${({open})=> open ? "100%" : "0%"};
        display: ${({open})=> open ? "flex" : "none"};
        top: 85px;
        padding-top: 30px;
    }
`;

export const CloseContainer = styled.div`
    display: none;

    @media only screen and (min-width: 481px) {
        display: flex;
        justify-content: flex-end;
        align-items: center;
        width: 100%;
    }

`;

export const Title = styled.h4`
    /* font-family: 'Roboto'; */
    font-weight: 700;
    font-size: 24px;
    text-align: center;
    color: ${colors.principal};
    margin: 30px auto;

    @media only screen and (min-width: 768px) {
        margin: 50px auto 15px;
    }
`;

export const Overlay = styled.div`

`;

export const Form = styled.form`
    width: 300px;
    height: fit-content;
    margin: 0 auto;

    @media only screen and (min-width: 768px) {
        width: 448px;
    }
`;

export const ContainerInputs = styled.div`
    margin-bottom: 10px;
`;

export const Label = styled.label`
    font-family: 'Roboto';
    font-weight: 500;
    font-size: 12px;
    line-height: 14px;
    color: #000;
`;

export const Input = styled.input`
    width: 300px;
    height: 40px;
    padding: 10px;
    font-size: 12px;
    margin: 5px auto;
    background: #fff;
    border: 1px solid transparent;
    box-shadow: 0px 1px 5px rgba(0, 0, 0, 0.15);
    border-radius: 5px;
    transition: all .3s ease;

    &:focus{
        border: 1px solid ${colors.principal};
        outline: none;
    }

    @media only screen and (min-width: 768px) {
        width: 448px;
    }
`;

export const Leyenda = styled.p`
    font-size: 10px;
    margin-bottom: 0;
    color: ${colors.error};
    display: none;
`;

export const Button = styled.button`
    display: flex;
    justify-content: center;
    align-items: center;
    width: 300px;
    height: 40px;
    font-family: 'Roboto';
    font-weight: 700;
    font-size: 16px;
    margin: 50px auto 5px;
    border: none;
    background: ${colors.principal};
    cursor: pointer;
    color: #fff;
    box-shadow: 0px 2px 4px rgba(0, 0, 0, 0.12);
    border-radius: 5px;
    transition: all .3s ease;

    &:hover{
        box-shadow: 3px 0px 20px rgba(25, 77, 152, 0.5);
    }

    @media only screen and (min-width: 768px) {
        width: 206px;
    }
`;

export const Texto = styled.p`
    font-family: 'Roboto';
    font-weight: 500;
    font-size: 12px;
    line-height: 14px;
    text-align: center;
    margin: 15px auto;
`;

export const Registrar = styled.a`
    color: ${colors.principal};
    cursor: pointer;
`;
