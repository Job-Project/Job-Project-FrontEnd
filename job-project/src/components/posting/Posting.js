import React from 'react'
import axios from 'axios'
import * as P from '../../assets/style/posting/PostingStyle'
import profile_img from '../../assets/images/common/profile.svg'
import {useHistory} from 'react-router-dom'

const Posting = () => {
    const history = useHistory()
    const getFileName = () => {
        let fileName = document.getElementById('add_file').value.split('\\').pop();
        document.getElementById("upload-name").value = fileName;
    }

    const submitPost = () => {
        const title = document.getElementById('postTitle').value
        const content = document.getElementById('postText').value
        const cookieArr = document.cookie.split(';')
        let tokenData = []
        cookieArr.forEach(e => {
            const token = e.split('=')
            tokenData.push(token[1])
        })
        const headers = {
            'Authorization': "Bearer " + tokenData[0]
        }
        console.log(headers)
        const category = 'MENTEE'
        const data = {title, content, category}
        console.log(data)
        axios.post('http://10.156.145.209:8000/post', data, {headers})
        .then((res) => {
            console.log(res)
            history.push({
                pathname: '/log/Post'
            })
        })
        .catch((res) => {
            console.log(res)
        })
    }
    return(
        <P.Background>
            <P.PostingSection>
                <P.PostingArticle>
                    <P.ArticleBox>
                        <P.PostingTitle>
                            <P.ProfileImg src={profile_img}></P.ProfileImg>
                            <P.PostTitle id='postTitle' placeholder="제목을 입력하세요"></P.PostTitle>
                        </P.PostingTitle>
                        <P.PostingCont>
                            <P.PostingInputBox>
                                <P.PostingInput id='postText' placeholder="질문 내용을 입력하세요"></P.PostingInput>
                            </P.PostingInputBox>
                            <P.PostingAddFileBox>
                                <P.PostingFile>
                                    <P.PostingFileName id="upload-name" disabled="disabled"></P.PostingFileName>
                                </P.PostingFile>
                                <P.PostingAddFileBtn>
                                    <P.PAFIcon for="add_file"></P.PAFIcon>
                                    <P.PAFBtnText for="add_file">파일 첨부하기</P.PAFBtnText>
                                    <P.AddFileBtn id="add_file" name="file" onChange={getFileName}></P.AddFileBtn>
                                </P.PostingAddFileBtn>
                            </P.PostingAddFileBox>
                        </P.PostingCont>
                        <P.PostingBtn>
                            <P.PostingBtnText onClick={submitPost}>질문 올리기</P.PostingBtnText>
                        </P.PostingBtn>
                    </P.ArticleBox>
                </P.PostingArticle>
            </P.PostingSection>
        </P.Background>
    )
}

export default Posting;