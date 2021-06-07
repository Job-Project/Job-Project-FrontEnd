import * as S from '../../assets/style/sign_up/SignUpStyle'
import logo from '../../assets/images/common/logo.svg'
import {useHistory} from 'react-router-dom'
import axios from 'axios'

const SignUp = () =>{
    const history = useHistory()
    const SubmitUserInfo = () => {
        const mentee = document.getElementById('mentee');
        const male = document.getElementById('male');
        const userId = document.getElementById('email').value
        const password = document.getElementById('password').value
        const age = parseInt(document.getElementById('age').value)
        const authorityType = mentee.checked ? 'MENTEE' : 'MENTOR'
        const sex = male.checked ? 'MALE' : 'FEMALE'
        const data = {age, sex, userId, password}
        console.log(data)
        if(authorityType == 'MENTEE'){
            axios.post('http://10.156.145.209:8000/user/mentee', data)
            .then((res) => {
                console.log(res);
                history.push({
                    pathname: "/signUpDone"
                })
            })
            .catch((res) => {
                console.log(res)
            })
        } else{
            history.push({
                pathname: "/mentorSignUp",
                state: {data: data}
            })
        }
    }

    return(
        <S.SignUpArticle>
            <S.Logo src={logo}></S.Logo>
            <S.Title>회원가입</S.Title>
            <S.SignUpInputSection>
                <S.SignUpInputLeft>
                    <S.SignUpInputBox>
                        <S.SignUpInput placeholder="Email" type="email" id="email"></S.SignUpInput>
                    </S.SignUpInputBox>
                    <S.SignUpInputBox>
                        <S.SignUpInput placeholder="Password" type="password" id="password"></S.SignUpInput>
                    </S.SignUpInputBox>
                    <S.SignUpInputBox>
                        <S.SignUpInput placeholder="Password Check" type="password"></S.SignUpInput>
                    </S.SignUpInputBox>
                </S.SignUpInputLeft>
                <S.SignUpInputRight>
                    <S.SignUpInputBox>
                        <S.SignUpInput placeholder="Age" type="number" min="18" max="99" id='age'></S.SignUpInput>
                    </S.SignUpInputBox>
                    <S.RadioBox>
                        <S.RadioTitle>&nbsp;Sex</S.RadioTitle>
                        <S.SexTypeMale id="male" checked></S.SexTypeMale>
                        <S.SexTypeFemale id="female"></S.SexTypeFemale>
                    </S.RadioBox>
                    <S.RadioBox>
                        <S.RadioTitle>&nbsp;Type</S.RadioTitle>
                        <S.UserTypeMentee id="mentee" checked></S.UserTypeMentee>
                        <S.UserTypeMentor id="mentor"></S.UserTypeMentor>
                    </S.RadioBox>
                </S.SignUpInputRight>
            </S.SignUpInputSection>
            <S.SubmitUserInfo onClick={SubmitUserInfo}>
                <S.SubmitBtnText>다음으로</S.SubmitBtnText>
            </S.SubmitUserInfo>
        </S.SignUpArticle>
    )
}

export default SignUp