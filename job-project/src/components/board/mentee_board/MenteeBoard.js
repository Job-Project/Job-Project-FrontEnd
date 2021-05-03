import * as M from "../../../assets/style/board/mentee_board/MenteeBoardStyle"
import Pagination from '../common/Pagination'

const MenteeBoard = () => {

    const Selected = e => {
        let target = e.target.parentElement.querySelectorAll("p")
        if(e.target.id === "unselect"){
            if(e.target === target[0]){
                target[0].id = 'select'
                target[2].id = 'unselect'
            } else{
                target[0].id = 'unselect'
                target[2].id = 'select'
            }   
        }
    }

    return(
        <M.Background>
            <M.MenteeCont>
                <M.TopArticle>
                    <M.BoardTitle>Mentee's Board</M.BoardTitle>
                    <M.WritingBtn>
                        <M.BtnText>궁금한 정보를 현직자에게 직접 물어보세요</M.BtnText>
                        <M.BtnTitle>질문 작성하기</M.BtnTitle>
                    </M.WritingBtn>
                </M.TopArticle>
                <M.BoardAlignBox>
                    <M.BoardAlign id="select" onClick={Selected}>최신순</M.BoardAlign>
                    <M.bar>&nbsp;|&nbsp;</M.bar>
                    <M.BoardAlign id="unselect" onClick={Selected}>추천순</M.BoardAlign>
                </M.BoardAlignBox>
                <M.WritingListArticle>
                    <M.WritingListBox>
                        <M.WTBox>
                            <M.WritingTitle>Q. 면접 관련 질문이 있습니다.</M.WritingTitle>
                        </M.WTBox>
                        <M.WTBox>
                            <M.WritingText>OO 기업의 마케팅 부서에 지원하여 서류 합격하고 현재는 면접 일정이 잡혔습니다. 면접 대비를 하려고 하는데 무엇을...</M.WritingText>
                        </M.WTBox>
                    </M.WritingListBox>
                    <M.WritingListBox>
                        <M.WTBox>
                            <M.WritingTitle>Q. 면접 관련 질문이 있습니다.</M.WritingTitle>
                        </M.WTBox>
                        <M.WTBox>
                            <M.WritingText>OO 기업의 마케팅 부서에 지원하여 서류 합격하고 현재는 면접 일정이 잡혔습니다. 면접 대비를 하려고 하는데 무엇을...</M.WritingText>
                        </M.WTBox>
                    </M.WritingListBox>
                    <M.WritingListBox>
                        <M.WTBox>
                            <M.WritingTitle>Q. 면접 관련 질문이 있습니다.</M.WritingTitle>
                        </M.WTBox>
                        <M.WTBox>
                            <M.WritingText>OO 기업의 마케팅 부서에 지원하여 서류 합격하고 현재는 면접 일정이 잡혔습니다. 면접 대비를 하려고 하는데 무엇을...</M.WritingText>
                        </M.WTBox>
                    </M.WritingListBox>
                    <M.WritingListBox>
                        <M.WTBox>
                            <M.WritingTitle>Q. 면접 관련 질문이 있습니다.</M.WritingTitle>
                        </M.WTBox>
                        <M.WTBox>
                            <M.WritingText>OO 기업의 마케팅 부서에 지원하여 서류 합격하고 현재는 면접 일정이 잡혔습니다. 면접 대비를 하려고 하는데 무엇을...</M.WritingText>
                        </M.WTBox>
                    </M.WritingListBox>
                    <M.WritingListBox>
                        <M.WTBox>
                            <M.WritingTitle>Q. 면접 관련 질문이 있습니다.</M.WritingTitle>
                        </M.WTBox>
                        <M.WTBox>
                            <M.WritingText>OO 기업의 마케팅 부서에 지원하여 서류 합격하고 현재는 면접 일정이 잡혔습니다. 면접 대비를 하려고 하는데 무엇을...</M.WritingText>
                        </M.WTBox>
                    </M.WritingListBox>
                    <M.WritingListBox>
                        <M.WTBox>
                            <M.WritingTitle>Q. 면접 관련 질문이 있습니다.</M.WritingTitle>
                        </M.WTBox>
                        <M.WTBox>
                            <M.WritingText>OO 기업의 마케팅 부서에 지원하여 서류 합격하고 현재는 면접 일정이 잡혔습니다. 면접 대비를 하려고 하는데 무엇을...</M.WritingText>
                        </M.WTBox>
                    </M.WritingListBox>
                    <M.WritingListBox>
                        <M.WTBox>
                            <M.WritingTitle>Q. 면접 관련 질문이 있습니다.</M.WritingTitle>
                        </M.WTBox>
                        <M.WTBox>
                            <M.WritingText>OO 기업의 마케팅 부서에 지원하여 서류 합격하고 현재는 면접 일정이 잡혔습니다. 면접 대비를 하려고 하는데 무엇을...</M.WritingText>
                        </M.WTBox>
                    </M.WritingListBox>
                    <M.WritingListBox>
                        <M.WTBox>
                            <M.WritingTitle>Q. 면접 관련 질문이 있습니다.</M.WritingTitle>
                        </M.WTBox>
                        <M.WTBox>
                            <M.WritingText>OO 기업의 마케팅 부서에 지원하여 서류 합격하고 현재는 면접 일정이 잡혔습니다. 면접 대비를 하려고 하는데 무엇을...</M.WritingText>
                        </M.WTBox>
                    </M.WritingListBox>
                </M.WritingListArticle>
                <Pagination></Pagination>
            </M.MenteeCont>
        </M.Background>
    )
}

export default MenteeBoard