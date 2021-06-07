import styled from 'styled-components'
import * as L from '../login/LoginStyle'
import {female, female_checked, male, male_checked, mentee_checked, mentee, mentor_checked, mentor} from '../../images/login'

export const SignUpArticle = styled(L.LoginArticle)``;

export const Logo = styled(L.Logo)``;

export const Title = styled(L.Title)``;

export const SignUpInputBox = styled(L.LoginInputBox)`
    margin: 0;
`;

export const RadioBox = styled.div`
    width: 460px;
    height: 30px;
    display: flex;
`;

export const RadioTitle = styled(SignUpInputBox)`
    width: 80px;
    font-size: 20px;
    color: #707070;
`;

export const SignUpInput = styled(L.LoginInput)``;

export const SexTypeMale = styled.input.attrs({
    type: 'radio',
    name: 'select_sex'
})`
    display: inline-block;
    -webkit-appearance: none;
    width: 135px;
    height: 30px;
    border: 1px solid #707070;
    border-radius: 10px;
    background-color: white;
    background: url(${male}) no-repeat center;
    margin-left: 40px;
    cursor: pointer;
    &:checked{
        background: url(${male_checked}) no-repeat center;
        background-color: #FF5757;
    }
`;

export const SexTypeFemale = styled(SexTypeMale)`
    background: url(${female}) no-repeat center;
    &:checked{
        background: url(${female_checked}) no-repeat center;
        background-color: #FF5757;
    }
`;

export const UserTypeMentee = styled.input.attrs({
    type: 'radio',
    name: 'select_user_type'
})`
    display: inline-block;
    -webkit-appearance: none;
    width: 135px;
    height: 30px;
    border: 1px solid #707070;
    border-radius: 10px;
    color: #707070;
    background: url(${mentee}) no-repeat center;
    background-color: white;
    margin-left: 40px;
    cursor: pointer;
    &:checked{
        background: url(${mentee_checked}) no-repeat center;
        background-color: #FF5757;
    }
`;

export const UserTypeMentor = styled(UserTypeMentee)`
    background: url(${mentor}) no-repeat center;
    &:checked{
        background: url(${mentor_checked}) no-repeat center;
        background-color: #FF5757;
    }
`;

export const SubmitUserInfo = styled(L.SignUpBtn)`
    margin-top: 90px;
`;

export const SubmitBtnText = styled(L.LoginBtnText)``;

export const SignUpInputSection = styled.section`
    width: 1000px;
    height: 170px;
    display: flex;
    margin-top: 60px;
`;

export const SignUpInputLeft = styled.div`
    width: 500px;
    height: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: space-between;
`;

export const SignUpInputRight = styled(SignUpInputLeft)``;