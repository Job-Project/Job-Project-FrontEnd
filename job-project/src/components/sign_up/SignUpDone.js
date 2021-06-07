import * as S from '../../assets/style/sign_up/SignUpDoneStyle'
import logo from '../../assets/images/common/logo.svg'
import {Link} from 'react-router-dom'

const SignUpDone = () => {
    return(
        <S.SignUpDoneArticle>
            <S.Logo src={logo}></S.Logo>
            <S.Title><S.Name>'취업하자'</S.Name>에 오신 것을 환영합니다!</S.Title>
            <Link to="/login"><S.GoLoginPage>로그인 화면으로</S.GoLoginPage></Link>
        </S.SignUpDoneArticle>
    )
}

export default SignUpDone;