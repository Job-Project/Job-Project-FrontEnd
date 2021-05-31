import * as L from '../../assets/style/login/LoginStyle'
import logo from '../../assets/images/common/logo.svg'

const Login = () => {
    return(
        <L.LoginArticle>
            <L.Logo src={logo}></L.Logo>
            <L.Title>로그인</L.Title>
            <L.LoginInputBox>
                <L.LoginInput type="email" placeholder="Email"></L.LoginInput>
            </L.LoginInputBox>
            <L.LoginInputBox>
                <L.LoginInput type="password" placeholder="Password"></L.LoginInput>
            </L.LoginInputBox>
            <L.LoginType>
                <L.LoginTypeBtn id="mentee"></L.LoginTypeBtn>
                <L.Label for="mentee">멘티</L.Label>
                <L.LoginTypeBtn id="mentor"></L.LoginTypeBtn>
                <L.Label for="mentor">멘토</L.Label>
            </L.LoginType>
            <L.LoginBtn>
                <L.LoginBtnText>로그인</L.LoginBtnText>
            </L.LoginBtn>
            <L.SighUpBtn>
                <L.LoginBtnText>회원가입</L.LoginBtnText>
            </L.SighUpBtn>
        </L.LoginArticle>
    )
}

export default Login