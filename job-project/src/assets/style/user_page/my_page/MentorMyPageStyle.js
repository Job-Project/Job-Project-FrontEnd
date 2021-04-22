import styled from 'styled-components';
import * as M from "./MenteeMyPageStyle";
import chosen_icon from '../../../images/mypage/chosen.svg'

export const InfoTagsCont = styled(M.InfoTagsCont)`
    margin: 8px 0 0 25px;
`;

export const UserInfoTopBox = styled.div`
    display: flex;
    justify-content: space-between;
`;

export const GradeBox = styled.div`
    width: 120px;
    height: 211px;
    margin: 20px 25px 0 0;
    display: flex;
    flex-direction: column;
    align-items: center;
`;

export const GradeTitle = styled.p`
    font-size: 20px;
    font-weight: bold;
    color: #707070;
    margin-bottom: 10px;
`;

export const GradeIconBox = styled.div`
    width: 110px;
    height: 110px;
    border: 3px solid #B9F2FF;
    border-radius: 60px;
    margin-bottom: 10px;
    display: flex;
    align-items: center;
    justify-content: center;
`;

export const GradeIcon = styled.img`
    width: 60px;
    height: 60px;
`;

export const GradeText = styled.p`
    font-size: 15px;
    font-weight: bold;
    color: #B9F2FF;
    margin-bottom: 5px;
`;

export const GradeBar = styled.div`
    width: 120px;
    height: 16px;
    border-radius: 10px;
    background-color: #B9F2FF;
    display: flex;
    align-items: center;
    justify-content: center;
`;

export const GradeBarText = styled.p`
    font-size: 10px;
    font-weight: bold;
    color: #ffffff;
`;

export const URList = styled(M.URList)`
    position: relative;
    &#done{
        &::after{
            position: absolute;
            content: url(${chosen_icon});
            width: 60px;
            height: 60px;
            right: 0;
            top: -12px;
        }
    }
`;