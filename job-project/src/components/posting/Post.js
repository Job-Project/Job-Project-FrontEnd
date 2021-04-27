import React from 'react'
import * as P from '../../assets/style/posting/PostStyle'
import * as PI from '../../assets/style/posting/PostingStyle'
import profile_img from '../../assets/images/common/profile.svg'

const Post = () => {
    
    const RecommendCheck = () => {
        let RecommendBtn = document.getElementById("off");
        if(RecommendBtn == undefined)
            document.getElementById("on").id = "off"
        else
            RecommendBtn.id = "on"
    }

    return(
        <P.Background>
            <P.PostSection>
                <P.PostArticle>
                    <P.ArticleBox>
                        <PI.PostingTitle>
                            <PI.ProfileImg src={profile_img}></PI.ProfileImg>
                            <P.PostTitle>Q. 면접 관련 질문이 있습니다</P.PostTitle>
                            <P.RecommendBtn onClick={RecommendCheck}>
                                <P.RBIcon  id="off"></P.RBIcon>
                                <P.RBText>나도 궁금해요</P.RBText>
                            </P.RecommendBtn>
                        </PI.PostingTitle>
                        <P.PostCont>
                            <P.PostContTextBox>
                                <P.PostContText>
                                    OO 기업의 마케팅 부서에 지원하여 서류 합격하고 현재는 면접 일정이
                                    잡혔습니다. 면접 대비를 하려고 하는데 무엇을 어떻게 준비해야할지 잘 
                                    모르겠어서 질문 올립니다 ㅠㅠ
                                </P.PostContText>
                            </P.PostContTextBox>
                            <P.DownloadFileBox>
                                <P.PostFile>
                                    <P.PostFileName>면접_대비.hwp</P.PostFileName>
                                </P.PostFile>
                                <P.DownloadFileBtn>
                                    <P.DFIcon></P.DFIcon>
                                    <P.DFText>파일 다운받기</P.DFText>
                                </P.DownloadFileBtn>
                            </P.DownloadFileBox>
                        </P.PostCont>
                        <P.ReplyContBox id="select_ans">
                            <P.ReplyTitleBox>
                                <P.ReplyProfileImg src={profile_img}></P.ReplyProfileImg>
                                <P.ReplyTitle><P.ReplyName>모두의 멘토</P.ReplyName>님의 답변</P.ReplyTitle>
                            </P.ReplyTitleBox>
                            <P.ReplyContTextBox>
                                <P.PostContText>
                                    안녕하세요 멘티님, 면접 때문에 걱정이시군요?
                                    마케팅 부서의 면접이라면 ~~와 --를 준비해서 가시면 될 듯 합니다!
                                    참고하실만한 자료 첨부해 드리겠습니다!
                                </P.PostContText>
                            </P.ReplyContTextBox>
                            <P.DownloadFileBox>
                                <P.PostFile>
                                    <P.PostFileName>면접_대비.hwp</P.PostFileName>
                                </P.PostFile>
                                <P.DownloadFileBtn>
                                    <P.DFIcon></P.DFIcon>
                                    <P.DFText>파일 다운받기</P.DFText>
                                </P.DownloadFileBtn>
                            </P.DownloadFileBox>
                        </P.ReplyContBox>
                        <P.AddReplyBtn>
                            <P.ARBText>답변 추가하기</P.ARBText>
                        </P.AddReplyBtn>
                    </P.ArticleBox>
                </P.PostArticle>
            </P.PostSection>
        </P.Background>
    )
}

export default Post;