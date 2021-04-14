import styled from 'styled-components'
import wave from '../../images/intro/intro_wave.svg'

export const Container = styled.div`
    background: #fff;
    width: 100%;
    height: 100vh;
    margin: 0 auto;
    background: right bottom no-repeat url(${wave});
`;

export const Section = styled.section`
    padding-top: 33px;
`;

export const FunctionCont = styled.div`
    text-align: center;
`;

export const Logo = styled.img`
    width: 120px;
    height: 108px;
`;

export const StartBtn = styled.div`
    margin-top: 33px;
`;

export const ToLogin = styled.button`
    width: 240px;
    height: 60px;
    font-size: 30px;
    font-weight: bold;
    border: 3px solid #ff4343;
    border-radius: 45px;
    color: #FF4343;
    background-color: #ffffff;
`;

export const GuideCont = styled.div`
    padding-top: 58px;
    width: 100%;
    display: flex;
    justify-content: space-around;
`;

export const Picture = styled.img`
    width: 560px;
    height: 385px;
    padding-left: 100px;
`

export const Guide = styled.p`
    font-size: 24px;
    color: #707070;
    line-height: 1.3;
`;

export const Name = styled.em`
    font-size: 32px;
    font-weight: bold;
    color: #ff4343;
`;