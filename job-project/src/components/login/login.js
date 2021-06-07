import * as L from '../../assets/style/login/LoginStyle'
import logo from '../../assets/images/common/logo.svg'
import {useHistory, Link} from 'react-router-dom'
import axios from 'axios'

const Login = () => {
    const history = useHistory()
    const SubmitLogin = () => {
        let mentee = document.getElementById('mentee');
        const userId = document.getElementById('email').value
        const password = document.getElementById('password').value
        const authorityType = mentee.checked ? 'MENTEE' : 'MENTOR'
        const data = {userId, password, authorityType}
        console.log(data)
        axios.post('http://10.156.145.209:8000/auth', data)
        .then((res) => {
            console.log(res)
            history.push({
                pathname: '/log/board/main'
            })
            alert('로그인에 성공하였습니다!')
            document.cookie = "access_token=" + res.data.accessToken;
            document.cookie = "refresh_token=" + res.data.refreshToken;
            console.log(document.cookie);
        })
        .catch((res) => {
            alert('로그인에 실패하였습니다!')
        })
    }

    return(
        <L.LoginArticle>
            <L.Logo src={logo}></L.Logo>
            <L.Title>로그인</L.Title>
            <L.LoginInputBox>
                <L.LoginInput type="email" placeholder="Email" id="email"></L.LoginInput>
            </L.LoginInputBox>
            <L.LoginInputBox>
                <L.LoginInput type="password" placeholder="Password" id="password"></L.LoginInput>
            </L.LoginInputBox>
            <L.LoginType>
                <L.LoginTypeBtn id="mentee" checked></L.LoginTypeBtn>
                <L.Label htmlFor="mentee">멘티</L.Label>
                <L.LoginTypeBtn id="mentor"></L.LoginTypeBtn>
                <L.Label htmlFor="mentor">멘토</L.Label>
            </L.LoginType>
            <L.LoginBtn onClick={SubmitLogin}>
                <L.LoginBtnText>로그인</L.LoginBtnText>
            </L.LoginBtn>
            <Link to="/signUp"><L.SignUpBtn>
                <L.LoginBtnText>회원가입</L.LoginBtnText>
            </L.SignUpBtn></Link>
        </L.LoginArticle>
    )
}

export default Login