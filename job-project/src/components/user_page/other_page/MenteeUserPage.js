import React from "react"
import * as M from  "../../../assets/style/user_page/my_page/MenteeMyPageStyle"
import * as MU from "../../../assets/style/user_page/other_page/MenteeUserPageStyle"
import ProfileImg from "../../../assets/images/common/profile.svg"
import chat_bubble from "../../../assets/images/mypage/chat_bubble.svg"

const MenteeUserPage = () => {
    return(
        <M.Background>
            <M.ProfileCont>
                <M.ProfileIntro>
                    <M.UserProfile>
                        <M.ProfileImg src={ProfileImg}></M.ProfileImg>
                        <MU.ReqChatBtn>
                            <MU.ReqChatBtnText>채팅 걸기</MU.ReqChatBtnText>
                            <MU.ChatIcon src={chat_bubble}></MU.ChatIcon>
                        </MU.ReqChatBtn>
                            <MU.UserName>user1234</MU.UserName>
                    </M.UserProfile>
                    <M.UserInfo>
                        <M.InfoBox>
                            <M.InfoTitleBox>
                                <M.InfoTitle>멘티 소개</M.InfoTitle>
                            </M.InfoTitleBox>
                            <M.InfoText>안녕하세요~ 행복한 개발자 해자입니다~</M.InfoText>
                        </M.InfoBox>
                        <M.InfoTagsCont>
                            <M.InfoTag>
                                <M.InfoTagText>프론트엔드 개발자</M.InfoTagText>
                            </M.InfoTag>
                        </M.InfoTagsCont>
                    </M.UserInfo>
                </M.ProfileIntro>
                <M.UserRecordBox>
                    <M.URBTitleBox>
                        <M.URBTitle>질문 내역</M.URBTitle>
                    </M.URBTitleBox>
                    <M.URListBox>
                        <M.URList>
                            <M.URListText>면접 관련 질문이 있습니다.</M.URListText>
                        </M.URList>
                        <M.URList>
                            <M.URListText>면접 관련 질문이 있습니다.</M.URListText>
                        </M.URList>
                        <M.URList>
                            <M.URListText>면접 관련 질문이 있습니다.</M.URListText>
                        </M.URList>
                        <M.URList>
                            <M.URListText>면접 관련 질문이 있습니다.</M.URListText>
                        </M.URList>
                        <M.URList>
                            <M.URListText>면접 관련 질문이 있습니다.</M.URListText>
                        </M.URList>
                        <M.URList>
                            <M.URListText>면접 관련 질문이 있습니다.</M.URListText>
                        </M.URList>
                        <M.URList>
                            <M.URListText>면접 관련 질문이 있습니다.</M.URListText>
                        </M.URList>
                        <M.URList>
                            <M.URListText>면접 관련 질문이 있습니다.</M.URListText>
                        </M.URList>
                        <M.URList>
                            <M.URListText>면접 관련 질문이 있습니다.</M.URListText>
                        </M.URList>
                    </M.URListBox>
                </M.UserRecordBox>
            </M.ProfileCont>
        </M.Background>
    )
}

export default MenteeUserPage;