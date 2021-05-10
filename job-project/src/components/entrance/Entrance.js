import * as E from '../../assets/style/entrance/EntranceStyle'
import LogoImg from '../../assets/images/common/logo.svg'
import intro_img from '../../assets/images/intro/intro_img.svg'
import {Link} from 'react-router-dom'

const Entrance = () => {
    return(
        <E.Container>
            <E.Section>
                <E.FunctionCont>
                    <E.Logo src={LogoImg}></E.Logo>
                    <E.StartBtn>
                        <Link to="/login"><E.ToLogin>시작하기</E.ToLogin></Link>
                    </E.StartBtn>
                </E.FunctionCont>
                <E.GuideCont>
                    <E.Picture src={intro_img}></E.Picture>
                    <E.Guide><E.Name>'취업하자'</E.Name>는
                        <br></br>취준생, 사회초년생들이 현업에 종사하시는 재직자 분들과
                        <br></br>상담하고, 멘토&멘티를 맺을 수 있도록 고안된 서비스 입니다.</E.Guide>
                </E.GuideCont>
            </E.Section>
        </E.Container>
    )
}

export default Entrance;