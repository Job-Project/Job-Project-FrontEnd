import styled from 'styled-components'
import * as M from '../main_board/MainBoardStyle'
import PrePage from '../../../images/writing/pre_page.svg'
import NextPage from '../../../images/writing/next_page.svg'

export const Background = styled(M.Background)`
    height: calc(200vh - 90px);
`;

export const MenteeCont = styled(M.MainCont)`
    width: 1040px;
`;

export const TopArticle = styled.article`
    width: 100%;
    padding-top: 50px;
    display: flex;
    align-items: center;
    justify-content: space-between;
`;

export const BoardTitle = styled.h1`
    font-size: 30px;
    font-weight: 900;
    color: #707070;
`;

export const WritingBtn = styled.button`
    width: 520px;
    height: 70px;
    border: 1px solid #707070;
    border-radius: 50px;
    background-color: #ffffff;
    display: flex;
    align-items: center;
    justify-content: space-between;
    cursor: pointer;
    transition: 0.25s;
    &:hover{
        box-shadow: 3px 3px 5px #dbdbdb
    }
`;

export const BtnText = styled.p`
    font-size: 15px;
    color: #707070;
    font-weight: bold;
    margin-left: 40px;
`;

export const BtnTitle = styled.p`
    font-size: 25px;
    color: #FF4343;
    font-weight: bold;
    margin-right: 40px;
`;

export const BoardAlignBox = styled.div`
    width: 100%;
    margin: 15px 0px 10px 0px;
    display: flex;
    justify-content: flex-end;
`;

export const BoardAlign = styled.p`
    font-size: 15px;
    font-weight: bold;
    color: #707070;
    cursor: pointer;
    &#select{
        color: #FF4343;
    }
`;

export const bar = styled.p`
    font-size: 15px;
    color: #707070;
`;

export const WritingListArticle = styled.article`
    width: 1040px;
    min-height: 1040px;
`;

export const WTBox = styled.div`
    width: 100%;
    height: 50px;
    display: flex;
    align-items: center;
    &:nth-child(1){
        border-bottom: 1px solid #707070;
    }
`;

export const WritingTitle = styled.p`
    font-size: 25px;
    font-weight: 900;
    color: #707070;
    margin: 0px 24px;
    max-height: 25px;
    overflow: hidden;
`;

export const WritingListBox = styled.div`
    width: 1040px;
    height: 100px;
    border: 1px solid #707070;
    border-radius: 25px;
    background-color: #ffffff;
    box-shadow: 3px 3px 6px #dbdbdb;
    cursor: pointer;
    margin-bottom: 35px;
    &:hover ${WTBox} ${WritingTitle}{
        color: #FF6C6C;
        box-shadow: 0 2px 0 #FF6C6C;
    }
`;

export const WritingText = styled.p`
    font-size: 20px;
    font-weight: bold;
    color: #707070;
    margin: 0px 24px;
    max-height: 20px;
    overflow: hidden;
`;

export const PaginationDiv = styled.div`
    margin-top: 15px;
    height: 40px;
    width: 800px;
    position: absolute;
    left: calc(50% - 400px);
    display: flex;
    align-items: center;
    flex-wrap: wrap;
    justify-content: space-between;
`;

export const PrePageBtn = styled.button`
    width: 11px;
    height: 16px;
    background: url(${PrePage}) no-repeat center;
`;

export const NextPageBtn = styled(PrePageBtn)`
    background: url(${NextPage}) no-repeat center;
`;

export const PageListBox = styled.div`
    width: 670px;
    height: 40px;
    display: flex;
    flex-wrap: wrap;
    justify-content: space-between;
`;

export const PageNum = styled.p`
    font-size: 16px;
    color: #707070;
`;

export const PageList = styled.div`
    width: 40px;
    border: 1px solid #707070;
    border-radius: 14px;
    background-color: #ffffff;
    display: flex;
    align-items: center;
    justify-content: center;
    cursor: pointer;
    &#select{
        border-color: #FF6C6C;
    }
    &#select ${PageNum}{
        color: #FF6C6C;
    }
`;