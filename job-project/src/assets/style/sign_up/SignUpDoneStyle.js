import styled from 'styled-components'
import * as M from './MentorSignUpStyle'

export const SignUpDoneArticle = styled.article`
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
    color: #707070;
    margin-top: 180px;
`;

export const Name = styled.b`
    color: #FF5757;
`;

export const GoLoginPage = styled(M.SubmitBtn)`
    margin-top: 180px;
`

