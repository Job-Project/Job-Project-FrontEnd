import styled from 'styled-components'

export const Background = styled.div`
    position: relative;
    width: 100%;
    height: calc(100vh - 90px);
    background-color: #F8F9FA;
`;

export const MainCont = styled.section`
    width: 1308px;
    margin: 0px auto;
    min-height: 459px;
`;

export const MainTitle = styled.h1`
    font-size: 35px;
    font-weight: 1000;
    color: #707070;
    text-align: center;
    padding-top: 50px;
    margin-bottom: 35px;
`;

export const BoardsCont = styled.article`
    width: 100%;
    display: flex;
    justify-content: space-between;
`;

export const BoardCont = styled.div`
`;

export const BoardName = styled.p`
    font-size: 20px;
    font-weight: bold;
    text-align: center;
    color: #707070;
    margin-bottom: 30px;
`;

export const BoardBox = styled.div`
    width: 600px;
    height: 350px;
    display: flex;
    justify-content: center;
    flex-wrap: wrap;
    align-content: space-around;
    background-color: #ffffff;
    border: 1px solid #707070;
    border-radius: 20px;
    box-shadow: 3px 3px 6px #DBDBDB;
`;

export const BoardList = styled.div`
    width: 550px;
    height: 40px;
    display: flex;
    align-items: center;
    border: 1px solid #707070;
    border-radius: 17px;
    background-color: #ffffff;
    transition: 0.25s;
    &:hover{
        background-color: #FF6C6C;
        border-color: #FF6C6C;
    }
`;

export const BoardText = styled.a`
    font-size: 15px;
    font-weight: bold;
    color: #707070;
    margin-left: 20px;
    transition: 0.25s;
    ${BoardList}:hover & {
        color: #ffffff;
    }
`;