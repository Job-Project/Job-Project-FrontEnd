import styled from 'styled-components'
import file_icon from '../../images/posting/file.svg'

export const Background = styled.div`
    width: 100%;
    height: 860px;
    background-color: #F8F9FA;
`;

export const PostingSection = styled.section`
    width: 1040px;
    height: 700px;
    padding-top: 60px;
    margin: 0px auto;
`;

export const PostingArticle = styled.article`
    width: 1040px;
    height: 700px;
    border: 1px solid #707070;
    background-color: #ffffff;
`;

export const ArticleBox = styled.div`
    width: 880px;
    height: 630px;
    margin: 0 auto;
    padding-top: 30px;
`;

export const PostingTitle = styled.div`
    width: 880px;
    height: 110px;
    display: flex;
    align-items: center;
    margin-bottom: 30px;
`;

export const ProfileImg = styled.img`
    width: 110px;
    height: 110px;
`;

export const PostTitle = styled.input`
    width: 720px;
    font-size: 40px;
    font-weight: 900;
    color: #707070;
    margin-left: 50px;
    &::placeholder{
        color: #dbdbdb;
    }
`;

export const PostingCont = styled.div`
    width: 880px;
    height: 390px;
    border: 1px solid #707070;
    border-radius: 41px;
    background-color: #F8F9FA;
    display: flex;
    flex-direction: column;
    align-items: center;
`;

export const PostingInputBox = styled.div`
    width: 800px;
    min-height: 265px;
    border: 1px solid #707070;
    border-radius: 34px;
    margin-top: 35px;
    background-color: #ffffff;
`;

export const PostingInput = styled.textarea`
    resize: none;
    min-width: 750px;
    min-height: 225px;
    border: none;
    font-size: 25px;
    color: #707070;
    margin: 20px 25px 20px 25px;
    outline: none;
    overflow-wrap: break-word;
    &::placeholder{
        color: #dbdbdb;
    }
`;

export const PostingAddFileBox = styled.div`
    width: 800px;
    height: 40px;
    display: flex;
    margin-top: 20px;
`;

export const PostingFile = styled.div`
    width: 640px;
    height: 40px;
    border: 1px solid #707070;
    border-radius: 25px;
    display: flex;
    align-items: center;
    background-color: #ffffff;
`;

export const PostingFileName = styled.p`
    font-size: 15px;
    color: #dbdbdb;
    margin-left: 25px;
`;

export const PostingAddFileBtn = styled.button`
    width: 144px;
    height: 40px;
    border: 1px solid #707070;
    border-radius: 25px;
    margin-left: 15px;
    display: flex;
    align-items: center;
    justify-content: center;
    background-color: #ffffff;
    cursor: pointer;
`;

export const PAFIcon = styled.div`
    width: 16px;
    height: 18px;
    background: url(${file_icon}) no-repeat center;
`;

export const PAFBtnText = styled.p`
    font-size: 15px;
    font-weight: bold;
    color: #707070;
    margin-left: 10px;
`; 

export const PostingBtn = styled.button`
    float: right;
    width: 440px;
    height: 70px;
    margin-top: 30px;
    border: 1px solid #FF5757;
    border-radius: 41px;
    background-color: #FF5757;
    display: flex;
    align-items: center;
    justify-content: center;
    cursor: pointer;
    &:hover{
        background-color: #ff6767;
    }
`;

export const PostingBtnText = styled.p`
    font-size: 25px;
    font-weight: bold;
    color: #ffffff;
`;