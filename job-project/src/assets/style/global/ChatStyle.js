import styled from 'styled-components'
import chat_off from '../../images/common/chat_btn_off.svg'
import chat_on from '../../images/common/chat_btn_on.svg'

export const ChatBtn = styled.button`
    position: fixed;
    right: 100px;
    bottom: 50px;
    width: 50px;
    height: 50px;
    &#on{
        background: url(${chat_on}) no-repeat center;
    }
    &#off{
        background: url(${chat_off}) no-repeat center;
    }
`;

export const ChatBox = styled.div`
    position: fixed;
    right: 80px;
    bottom: 120px;
    width: 280px;
    height: 335px;
    border-radius: 20px;
    box-shadow: 3px 3px 10px #dbdbdb;
`;

export const ChatBoxTitle = styled.div`
    width: 100%;
    height: 35px;
    display: flex;
    align-items: center;
    justify-content: center;
    border-radius: 20px 20px 0 0;
    background-color: #FF4343;
`;

export const CBTitleText = styled.p`
    font-size: 15px;
    color: #ffffff;
    font-weight: bold;
`;

export const ProfileBox = styled.div`
    display: flex;
    align-items: center;
    width: 100%;
    height: 60px;
    background-color: #ffffff;
    &:hover{
        background-color: #EEEEEE;
    }
    &:nth-child(6){
        border-radius: 0 0 20px 20px;
    }
`;

export const ProfileImg = styled.img`
    width: 40px;
    height: 40px;
    margin-left: 20px;
`;

export const UserName = styled(CBTitleText)`
    color: #707070;
    margin-left: 20px;
`;