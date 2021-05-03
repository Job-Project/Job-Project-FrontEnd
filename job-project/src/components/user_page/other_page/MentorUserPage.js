import React from "react"
import * as M from "../../../assets/style/user_page/my_page/MenteeMyPageStyle"
import * as R from "../../../assets/style/user_page/my_page/MentorMyPageStyle"
import * as MU from "../../../assets/style/user_page/other_page/MenteeUserPageStyle"
import ProfileImg from "../../../assets/images/common/profile.svg"
import chat_bubble from "../../../assets/images/mypage/chat_bubble.svg"
import diamond_trophy from '../../../assets/images/mypage/diamond_trophy.svg'

const MentorUserPage = () => {
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
                        <R.UserInfoTopBox>
                            <M.InfoBox>
                                <M.InfoTitleBox>
                                    <M.InfoTitle>멘토 소개</M.InfoTitle>
                                </M.InfoTitleBox>
                                <M.InfoText>안녕하세요~ 행복한 개발자 해자입니다~</M.InfoText>
                            </M.InfoBox>
                            <R.GradeBox>
                                <R.GradeTitle>등급</R.GradeTitle>
                                <R.GradeIconBox>
                                    <R.GradeIcon src={diamond_trophy}></R.GradeIcon>
                                </R.GradeIconBox>
                                <R.GradeText>다이아몬드 트로피</R.GradeText>
                                <R.GradeText>Diamond Trophy</R.GradeText>
                                <R.GradeBar>
                                    <R.GradeBarText>100% (50000/50000)</R.GradeBarText>
                                </R.GradeBar>
                            </R.GradeBox>
                        </R.UserInfoTopBox>
                        <R.InfoTagsCont>
                            <M.InfoTag>
                                <M.InfoTagText>프론트엔드 개발자</M.InfoTagText>
                            </M.InfoTag>
                        </R.InfoTagsCont>
                    </M.UserInfo>
                </M.ProfileIntro>
                <M.UserRecordBox>
                    <M.URBTitleBox>
                        <M.URBTitle>질문 내역</M.URBTitle>
                    </M.URBTitleBox>
                    <M.URListBox>
                        <R.URList id="done">
                            <M.URListText>면접 관련 질문이 있습니다.</M.URListText>
                        </R.URList>
                        <R.URList id="done">
                            <M.URListText>면접 관련 질문이 있습니다.</M.URListText>
                        </R.URList>
                        <R.URList>
                            <M.URListText>면접 관련 질문이 있습니다.</M.URListText>
                        </R.URList>
                        <R.URList>
                            <M.URListText>면접 관련 질문이 있습니다.</M.URListText>
                        </R.URList>
                        <R.URList>
                            <M.URListText>면접 관련 질문이 있습니다.</M.URListText>
                        </R.URList>
                        <R.URList>
                            <M.URListText>면접 관련 질문이 있습니다.</M.URListText>
                        </R.URList>
                        <R.URList>
                            <M.URListText>면접 관련 질문이 있습니다.</M.URListText>
                        </R.URList>
                        <R.URList>
                            <M.URListText>면접 관련 질문이 있습니다.</M.URListText>
                        </R.URList>
                        <R.URList>
                            <M.URListText>면접 관련 질문이 있습니다.</M.URListText>
                        </R.URList>
                    </M.URListBox>
                </M.UserRecordBox>
            </M.ProfileCont>
        </M.Background>
    )
}

export default MentorUserPage;