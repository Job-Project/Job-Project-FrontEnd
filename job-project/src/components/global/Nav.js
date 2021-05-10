import * as N from '../../assets/style/global/NavStyle'
import LogoImg from '../../assets/images/common/logo.svg'
import SearchIcon from '../../assets/images/common/search.svg'
import Profile from '../../assets/images/common/profile.svg'
import {Link} from 'react-router-dom'
const Nav = () => {
    return(
        <N.NavCont>
            <Link to="/log/board/main"><N.Logo src={LogoImg}></N.Logo></Link>
            <Link to="/log/board/main"><N.LogoName>취업하자</N.LogoName></Link>
            <N.SearchBox>
                <N.SearchInput placeholder="검색"></N.SearchInput>
                <N.SearchIcon src={SearchIcon}></N.SearchIcon>
            </N.SearchBox>
            <N.Cont>
                <N.NavListCont>
                    <Link to="/log/board/mentee"><N.NavList>Mentee</N.NavList></Link>
                    <Link to="/log/board/worker"><N.NavList>Worker</N.NavList></Link>
                    <Link to=""><N.NavList>Logout</N.NavList></Link>
                </N.NavListCont>
                <N.MyPageLink>
                    <Link to="/log/myPage/mentee"><N.ProfileImg src={Profile}></N.ProfileImg></Link>
                </N.MyPageLink>
            </N.Cont>
        </N.NavCont>
    )
}

export default Nav;