import styled from 'styled-components'

export const NavCont = styled.div`
    width: 100%;
    height: 90px;
    display: flex;
    align-items: center;
    box-shadow: 0px 3px 10px #DBDBDB;
`;

export const Logo = styled.img`
    padding-left: 80px;
    width: 50px;
    height: 45px;
`;

export const LogoName = styled.p`
    font-size: 25px;
    color: #FF4343;
    padding-left: 20px;
    font-weight: bold;
`;

export const SearchBox = styled.div`
    width: 500px;
    height: 40px;
    position: absolute;
    left: calc(50% - 250px);
    display: flex;
    align-items: center;
    border: 1px solid #707070;
    border-radius: 5px;
`;

export const SearchIcon = styled.img`
    width: 15px;
    height: 15px;
    margin-right: 20px;
`;

export const SearchInput = styled.input`
    width: 445px;
    font-size: 15px;
    border: none;
    margin-left: 20px;
    color: #707070;
`;

export const Cont = styled.div`
    display: flex;
    align-items: center;
    position: absolute;
    right: 50px;
`;

export const NavListCont = styled.div`
    width: 281px;
    height: 22px;
    display: flex;
    justify-content: space-between;
`;

export const NavList = styled.a`
    text-decoration: none;
    font-size: 20px;
    color: #707070;
    cursor: pointer;
`;

export const MyPageLink = styled.a`
    padding-left: 50px;
    cursor: pointer;
`;

export const ProfileImg = styled.img`
    width: 64px;
    height: 64px;
`;