import styled from 'styled-components'
import {radio_btn_off, radio_btn_on} from '../../images/login'

export const LoginArticle = styled.article`
    width: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;
`;

export const Logo = styled.img`
    width: 120px;
    height: 108px;
    margin-top: 35px;
`;

export const Title = styled.h1`
    font-size: 35px;
    font-weight: bold;
    color: #FF4343;
    margin: 35px 0 10px 0;
`;

export const LoginInputBox = styled.div`
    width: 460px;
    height: 30px;
    border-bottom: 1px solid #707070;
    margin-top: 50px;
`;

export const LoginInput = styled.input`
    width: 450px;
    font-size: 20px;
    color: #707070;
    padding-left: 5px;
`;

export const LoginType = styled.div`
    display: flex;
    align-items: center;
    justify-content: space-between;
    width: 250px;
    height: 24px;
    margin-top: 45px;
`;

export const LoginTypeBtn = styled.input.attrs({
    type: 'radio',
    name: 'select_login_type'
})`
    display: inline-block;
    -webkit-appearance: none;
    width: 30px;
    height: 30px;
    background: url(${radio_btn_off}) no-repeat center;
    cursor: pointer;
    &:checked{
        background: url(${radio_btn_on}) no-repeat center;
    }
`

export const Label = styled.label`
    font-size: 20px;
    font-weight: bold;
    color: #FF5757;
    cursor: pointer;
`;

export const LoginBtn = styled.button`
    display: flex;
    justify-content: center;
    align-items: center;
    width: 350px;
    height: 50px;
    background-color: #FF8787;
    border-radius: 38px;
    margin-top: 50px;
    cursor: pointer;
`;

export const SignUpBtn = styled(LoginBtn)`
    background-color: #FF5757;
    margin-top: 35px;
`;

export const LoginBtnText = styled.p`
    color: white;
    font-size: 20px;
`;