import styled from 'styled-components'
import edit_icon from '../../../images/mypage/pencil.svg'
import add_tag from '../../../images/mypage/plus.svg'
import add_tag_reverse from '../../../images/mypage/plus_reverse.svg'

export const Background = styled.div`
    width: 100%;
    height: calc(100vh - 90px);
    background-color: #F8F9FA;
`;

export const ProfileCont = styled.section`
    width: 1393px;
    margin: 0 auto;
    padding-top: 35px;
    min-height: 560px;
`;

export const ProfileIntro = styled.div`
    width: 100%;
    height: 295px;
    display: flex;
    flex-wrap: wrap;
`;

export const UserProfile = styled.article`
    width: 368px;
    height: 295px;
    border: 1px solid #707070;
    background-color: #ffffff;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
`;

export const UserInfo = styled.article`
    width: 1011px;
    height: 295px;
    border: 1px solid #707070;
    background-color: #ffffff;
    margin-left: 10px;
`;

export const UserRecordBox = styled.article`
    width: 1391px;
    height: 260px;
    border: 1px solid #707070;
    margin-top: 10px;
    background-color: #ffffff;
`;

export const ProfileImg = styled.img`
    width: 110px;
    height: 110px;
    margin-bottom: 10px;
`;

export const ChangePIBtn = styled.button`
    width: 115px;
    height: 22px;
    border: 1px solid #707070;
    border-radius: 17px;
    margin: 10px 0 15px 0;
    background-color: #707070;
    display: flex;
    align-items: center;
    justify-content: center;
    cursor: pointer;
    transition: 0.25s;
    &:hover{
        background-color: #606060;
        width: 120px;
        height: 26px;
        margin: 8px 0 13px 0;
    }
`;

export const ChangePIBText = styled.p`
    font-size: 10px;
    font-weight: bold;
    color: #ffffff;
`;

export const ChangePIBIcon = styled.img`
    width: 11px;
    height: 10px;
    margin-left: 5px;
`;

export const UserName = styled.p`
    font-size: 20px;
    color: #707070;
    margin-top: 15px;
    &:after{
        position: absolute;
        content: url(${edit_icon});
        width: 12px;
        height: 12px;
        margin-left: 10px;
        cursor: pointer;
    }
`;

export const InfoBox = styled.div`
    width: 941px;
    height: 194px;
    margin: 20px 0 0 25px;
`;

export const InfoTitleBox = styled.div`
    display: flex;
    align-items: center;
`;

export const InfoTitle = styled.h1`
    font-size: 25px;
    font-weight: bold;
    color: #707070;
`;


export const EIBText = styled.p`
    font-weight: bold;
    font-size: 15px;
    color: #707070;
    transition: 0.25s;
`;

export const EditInfoBtn = styled.button`
    border: 1px solid #707070;
    border-radius: 14px;
    background-color: #ffffff;
    width: 110px;
    height: 30px;
    margin-left: 30px;
    transition: 0.25s;
    &:hover{
        background-color: #707070;
    }
    &:hover ${EIBText}{
        color: #ffffff;
    }
`;

export const InfoText = styled.p`
    font-size: 20px;
    color: #707070;
    margin: 15px 0 0 10px;
`;

export const InfoTagsCont = styled.div`
    width: 790px;
    height: 35px;
    display: flex;
    margin: 25px 0 0 25px;
`;

export const InfoTagText = styled.p`
    font-size: 14px;
    font-weight: bold;
    color: #707070;
    margin: 0 15px 0 15px;
`;

export const InfoTag = styled.div`
    background-color: #ffffff;
    height: 35px;
    border: 1px solid #707070;
    border-radius: 25px;
    margin: 0 20px 0 0;
    display: flex;
    justify-content: center;
    align-items: center;
`;

export const AddInfoTagText = styled.p`
    font-size: 14px;
    font-weight: bold;
    color: #707070;
    transition: 0.5s;
`;

export const AddInfoTagImg = styled.div`
    width: 16px;
    height: 16px;
    margin-left: 5px;
    background: url(${add_tag}) no-repeat center;
    transition: 0.5s;
`;

export const AddInfoTag = styled.button`
    background-color: #ffffff;
    width: 106px;
    height: 35px;
    border: 1px solid #707070;
    border-radius: 25px;
    display: flex;
    justify-content: center;
    align-items: center;
    cursor: pointer;
    transition: 0.5s;
    &:hover{
        background-color: #707070;
    }
    &:hover ${AddInfoTagText}{
        color: white;
    }
    &:hover ${AddInfoTagImg}{
        background: url(${add_tag_reverse}) no-repeat center;
    }
`;

export const URBTitleBox = styled.div`
    width: 1341px;
    height: 65px;
    border-bottom: 1px solid #707070;
    margin: 0 0 0 25px;
    display: flex;
    align-items: center;
`;

export const URBTitle = styled.p`
    font-size: 21px;
    font-weight: 900;
    color: #707070;
`;

export const URListBox = styled.div`
    width: 1344px;
    height: 150px;
    margin: 20px 0 0 25px;
    display: flex;
    justify-content: space-between;
`;


export const URListText = styled.p`
    font-size: 15px;
    font-weight: 900;
    max-width: 65px;
    color: #707070;
    text-align: center;
    line-height: 1.2;
    transition: 0.5s;
`;

export const URList = styled.div`
    width: 126px;
    height: 150px;
    border: 1px solid #707070;
    border-radius: 26px;
    box-shadow: 3px 3px 6px #DBDBDB;
    background-color: #ffffff;
    display: flex;
    align-items: center;
    justify-content: center;
    cursor: pointer;
    transition: 0.5s;
    &:hover{
        background-color: #FF4343;
        border-color: #FF4343;
    }
    &:hover ${URListText}{
        color: #ffffff;
    }
`;