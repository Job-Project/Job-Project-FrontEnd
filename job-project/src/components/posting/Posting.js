import React from 'react'
import * as P from '../../assets/style/posting/PostingStyle'
import profile_img from '../../assets/images/common/profile.svg'

const Posting = () => {
    return(
        <P.Background>
            <P.PostingSection>
                <P.PostingArticle>
                    <P.ArticleBox>
                        <P.PostingTitle>
                            <P.ProfileImg src={profile_img}></P.ProfileImg>
                            <P.PostTitle placeholder="제목을 입력하세요"></P.PostTitle>
                        </P.PostingTitle>
                        <P.PostingCont>
                            <P.PostingInputBox>
                                <P.PostingInput placeholder="질문 내용을 입력하세요"></P.PostingInput>
                            </P.PostingInputBox>
                            <P.PostingAddFileBox>
                                <P.PostingFile>
                                    <P.PostingFileName>파일을 추가하세요</P.PostingFileName>
                                </P.PostingFile>
                                <P.PostingAddFileBtn>
                                    <P.PAFIcon></P.PAFIcon>
                                    <P.PAFBtnText>파일 첨부하기</P.PAFBtnText>
                                </P.PostingAddFileBtn>
                            </P.PostingAddFileBox>
                        </P.PostingCont>
                        <P.PostingBtn>
                            <P.PostingBtnText>질문 올리기</P.PostingBtnText>
                        </P.PostingBtn>
                    </P.ArticleBox>
                </P.PostingArticle>
            </P.PostingSection>
        </P.Background>
    )
}

export default Posting;