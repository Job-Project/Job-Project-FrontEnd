import * as S from '../../assets/style/sign_up/SignUpStyle'
import * as M from '../../assets/style/sign_up/MentorSignUpStyle'
import logo from '../../assets/images/common/logo.svg'
import {useLocation} from 'react-router-dom'

const MentorSignUp = () => {
    const location = useLocation()
    const data = location.state
    const SubmitMentorInfo = () => {
        
        console.log(data)
    }

    return(
        <S.SignUpArticle>
            <S.Logo src={logo}></S.Logo>
            <S.Title>회원가입</S.Title>
            <M.SignUpInputBox>
                <M.Select>
                    <M.Option>Career</M.Option>
                    <M.Option value="신입">신입</M.Option>
                    <M.Option value="1년 이상 3년 미만">1년 이상 3년 미만</M.Option>
                    <M.Option value="3년 이상 5년 미만">3년 이상 5년 미만</M.Option>
                    <M.Option value="5년 이상 10년 미만">5년 이상 10년 미만</M.Option>
                    <M.Option value="10년 이상">10년 이상</M.Option>
                </M.Select>
            </M.SignUpInputBox>
            <M.SignUpInputBox>
                <M.Select>
                    <M.Option>Job</M.Option>
                    <M.Option value="서버 개발자">서버 개발자</M.Option>
                    <M.Option value="백엔드 개발자">백엔드 개발자</M.Option>
                    <M.Option value="프론트엔드 개발자">프론트엔드 개발자</M.Option>
                    <M.Option value="안드로이드 개발자">안드로이드 개발자</M.Option>
                    <M.Option value="ios 개발자">ios 개발자</M.Option>
                    <M.Option value="데이터베이스 개발자">데이터베이스 개발자</M.Option>
                    <M.Option value="빅데이터 엔지니어">빅데이터 엔지니어</M.Option>
                    <M.Option value="임베디드 개발자">임베디드 개발자</M.Option>
                    <M.Option value="보안 엔지니어">보안 엔지니어</M.Option>
                    <M.Option value="UI 디자이너">UI 디자이너</M.Option>
                </M.Select>
            </M.SignUpInputBox>
            <M.SubmitBtn onClick={SubmitMentorInfo}>다음으로</M.SubmitBtn>
        </S.SignUpArticle>
    )
}

export default MentorSignUp;