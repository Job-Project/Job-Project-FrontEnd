import styled from 'styled-components'
import * as S from './SignUpStyle'

export const SubmitBtn = styled(S.SubmitUserInfo)`
    margin-top: 120px;
    color: white;
    font-size: 20px;
`;

export const SignUpInputBox = styled(S.SignUpInputBox)`
    margin-top: 50px;
`;

export const Select = styled.select`
    -webkit-appearance: none;
    outline: none;
    border: none;
    font-size: 20px;
    text-align: center;
    color: #707070;
    width: 460px;
    cursor: pointer;
`;

export const Option = styled.option`
    &:first-child{
        display: none;
    }
`;