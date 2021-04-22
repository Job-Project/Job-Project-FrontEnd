import styled from 'styled-components'
import * as M from '../my_page/MenteeMyPageStyle'

export const ReqChatBtn = styled(M.ChangePIBtn)`
    width: 74px;
    background-color: #FF4343;
    &:hover{
        background-color: #FF2929;
        width: 80px;
        height: 26px;
        margin: 8px 0 13px 0;
    }
`;

export const ReqChatBtnText = styled(M.ChangePIBText)``;

export const ChatIcon = styled(M.ChangePIBIcon)``;

export const UserName = styled(M.UserName)`
    font-size: 20px;
    color: #707070;
    margin-top: 15px;
    &::after{
        content: "";
    }
`;