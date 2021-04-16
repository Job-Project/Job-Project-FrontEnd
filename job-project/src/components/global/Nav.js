import * as N from '../../assets/style/global/NavStyle'
import LogoImg from '../../assets/images/common/logo.svg'
import SearchIcon from '../../assets/images/common/search.svg'
import Profile from '../../assets/images/common/profile.svg'

const Nav = () => {
    return(
        <N.NavCont>
            <N.Logo src={LogoImg}></N.Logo>
            <N.LogoName>취업하자</N.LogoName>
            <N.SearchBox>
                <N.SearchInput placeholder="검색"></N.SearchInput>
                <N.SearchIcon src={SearchIcon}></N.SearchIcon>
            </N.SearchBox>
            <N.Cont>
                <N.NavListCont>
                    <N.NavList>Mentee</N.NavList>
                    <N.NavList>Worker</N.NavList>
                    <N.NavList>Logout</N.NavList>
                </N.NavListCont>
                <N.MyPageLink>
                    <N.ProfileImg src={Profile}></N.ProfileImg>
                </N.MyPageLink>
            </N.Cont>
        </N.NavCont>
    )
}

export default Nav;