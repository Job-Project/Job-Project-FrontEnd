import styled from "styled-components"
import * as P from "./PostingStyle"
import recommend_off from "../../images/posting/recommend_off.svg"
import recommend_on from "../../images/posting/recommend_on.svg"
import add_answer from "../../images/posting/add_answer.svg"
import choice from "../../images/posting/choice.svg"

export const Background = styled(P.Background)`
    height: auto;
    padding-bottom: 100px;
`;

export const PostSection = styled(P.PostingSection)`
    height: auto;
`;

export const PostArticle = styled(P.PostingArticle)`
    min-height: 507px;
    height: auto;
`;

export const ArticleBox = styled(P.ArticleBox)`
    min-height: 437px;
    height: auto;
    padding-bottom: 30px;
`;

export const PostTitle = styled.h1`
    width: 720px;
    font-size: 40px;
    color: #707070;
    font-weight: 900;
    margin-left: 50px;
`;

export const RecommendBtn = styled.button`
    width: 70px;
    height: 62px;
    display: flex;
    background-color: #ffffff;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    cursor: pointer;
`;

export const RBIcon = styled.div`
    width: 40px;
    height: 40px;
    &#off{
        background: url(${recommend_off}) no-repeat center;
    }
    &#on{
        background: url(${recommend_on}) no-repeat center;
    }
`;

export const RBText = styled.p`
    font-size: 11px;
    font-weight: bold;
    margin-top: 10px;
    color: #FF5757;
`;

export const PostCont = styled(P.PostingCont)`
    min-height: auto;
    height: auto;
`;

export const PostContTextBox = styled(P.PostingInputBox)`
    min-height: auto;
    height: auto;
`;

export const PostContText = styled.p`
    width: 760px;
    font-size: 25px;
    color: #707070;
    margin: 20px;
    line-height: 1.2;
`;

export const DownloadFileBox = styled(P.PostingAddFileBox)`
    margin-bottom: 25px;
`;

export const PostFile = styled(P.PostingFile)`
`;

export const PostFileName = styled(P.PostingFileName)`
    color: #707070;
`;

export const DownloadFileBtn = styled(P.PostingAddFileBtn)``;

export const DFIcon = styled(P.PAFIcon)``;

export const DFText = styled(P.PAFBtnText)``;

export const AddReplyBtn = styled.button`
    width: 880px;
    height: 70px;
    border-radius: 41px;
    margin-top: 30px;
    background-color: #FF5757;
    display: flex;
    align-items: center;
    justify-content: center;
    cursor: pointer;
`;

export const ARBText = styled.p`
    position: relative;
    font-size: 25px;
    font-weight: bold;
    color: #ffffff;
    &::after{
        content: url(${add_answer});
        position: absolute;
        margin-left: 10px;
        top: 3px;
    }
`;

export const ReplyTitleBox = styled.div`
    width: 800px;
    height: 55px;
    margin-top: 30px;
    display: flex;
    align-items: center;
`;

export const ReplyProfileImg = styled(P.ProfileImg)`
    width: 55px;
    height: 55px;
`;

export const ReplyTitle = styled.p`
    font-size: 30px;
    font-weight: 600;
    color: #707070;
    margin-left: 35px;
`;

export const ReplyName = styled.b`
    font-weight: 900;
`;

export const ReplyContBox = styled(PostCont)`
    position: relative;
    margin-top: 40px;
    &#select_ans{
        &::after{
            content: url(${choice});
            position: absolute;
            top: -13px;
            right: -20px;
        }
    }
`;

export const ReplyContTextBox = styled(PostContTextBox)`
    margin-top: 25px;
`;