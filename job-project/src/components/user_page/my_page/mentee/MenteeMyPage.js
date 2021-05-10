import React from "react"
import * as M from  "../../../../assets/style/user_page/my_page/MenteeMyPageStyle"
import ProfileImg from "../../../../assets/images/common/profile.svg"
import camera from "../../../../assets/images/mypage/camera.svg"
import {Link} from "react-router-dom"

const MenteeMyPage = () => {
    return(
        <M.Background>
            <M.ProfileCont>
                <M.ProfileIntro>
                    <M.UserProfile>
                        <M.ProfileImg src={ProfileImg}></M.ProfileImg>
                        <M.ChangePIBtn>
                            <M.ChangePIBText>프로필 이미지 변경</M.ChangePIBText>
                            <M.ChangePIBIcon src={camera}></M.ChangePIBIcon>
                        </M.ChangePIBtn>
                            <M.UserName>user1234</M.UserName>
                    </M.UserProfile>
                    <M.UserInfo>
                        <M.InfoBox>
                            <M.InfoTitleBox>
                                <M.InfoTitle>멘티 소개</M.InfoTitle>
                                <M.EditInfoBtn>
                                    <M.EIBText>소개 수정하기</M.EIBText>
                                </M.EditInfoBtn>
                            </M.InfoTitleBox>
                            <M.InfoText>안녕하세요~ 행복한 개발자 해자입니다~</M.InfoText>
                        </M.InfoBox>
                        <M.InfoTagsCont>
                            <M.InfoTag>
                                <M.InfoTagText>프론트엔드 개발자</M.InfoTagText>
                            </M.InfoTag>
                            <M.AddInfoTag>
                                <M.AddInfoTagText>태그 추가</M.AddInfoTagText>
                                <M.AddInfoTagImg></M.AddInfoTagImg>
                            </M.AddInfoTag>
                        </M.InfoTagsCont>
                    </M.UserInfo>
                </M.ProfileIntro>
                <M.UserRecordBox>
                    <M.URBTitleBox>
                        <M.URBTitle>질문 내역</M.URBTitle>
                    </M.URBTitleBox>
                    <M.URListBox>
                        <Link to="/log/Post"><M.URList>
                            <M.URListText>면접 관련 질문이 있습니다.</M.URListText>
                        </M.URList></Link>
                        <Link to="/log/Post"><M.URList>
                            <M.URListText>면접 관련 질문이 있습니다.</M.URListText>
                        </M.URList></Link>
                        <Link to="/log/Post"><M.URList>
                            <M.URListText>면접 관련 질문이 있습니다.</M.URListText>
                        </M.URList></Link>
                        <Link to="/log/Post"><M.URList>
                            <M.URListText>면접 관련 질문이 있습니다.</M.URListText>
                        </M.URList></Link>
                        <Link to="/log/Post"><M.URList>
                            <M.URListText>면접 관련 질문이 있습니다.</M.URListText>
                        </M.URList></Link>
                        <Link to="/log/Post"><M.URList>
                            <M.URListText>면접 관련 질문이 있습니다.</M.URListText>
                        </M.URList></Link>
                        <Link to="/log/Post"><M.URList>
                            <M.URListText>면접 관련 질문이 있습니다.</M.URListText>
                        </M.URList></Link>
                        <Link to="/log/Post"><M.URList>
                            <M.URListText>면접 관련 질문이 있습니다.</M.URListText>
                        </M.URList></Link>
                        <Link to="/log/Post"><M.URList>
                            <M.URListText>면접 관련 질문이 있습니다.</M.URListText>
                        </M.URList></Link>
                    </M.URListBox>
                </M.UserRecordBox>
            </M.ProfileCont>
        </M.Background>
    )
}

export default MenteeMyPage;