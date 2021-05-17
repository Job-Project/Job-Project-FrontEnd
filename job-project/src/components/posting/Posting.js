import React from 'react'
import * as P from '../../assets/style/posting/PostingStyle'
import profile_img from '../../assets/images/common/profile.svg'

const Posting = () => {
    const getFileName = () => {
        let fileName = document.getElementById('add_file').value.split('\\').pop();
        document.getElementById("upload-name").value = fileName;
    }

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
                                    <P.PostingFileName id="upload-name" value="파일을 추가하세요" disabled="disabled"></P.PostingFileName>
                                </P.PostingFile>
                                <P.PostingAddFileBtn>
                                    <P.PAFIcon for="add_file"></P.PAFIcon>
                                    <P.PAFBtnText for="add_file">파일 첨부하기</P.PAFBtnText>
                                    <P.AddFileBtn id="add_file" onChange={getFileName}></P.AddFileBtn>
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