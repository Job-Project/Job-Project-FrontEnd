import { useState } from "react"
import * as M from "../../../assets/style/board/mentee_board/MenteeBoardStyle"

const MenteeBoard = () => {
    const [pageNo, setPageNo] = useState(1);

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
    
    const SelectPage = e => {
        let target = e.target.parentElement.querySelectorAll("div")
        let tagname = e.target.tagName === 'P'
        if(target.length === 0)
            target = e.target.parentElement.parentElement.querySelectorAll("div")
        target.forEach(function(e){
            e.id = "unselect"
        })
        setPageNo(parseInt(e.target.innerText))
        if(tagname === true)
            e.target.parentElement.id = "select"
        else
            e.target.id = "select"
        console.log(pageNo)
    }
    
    const GoPrePage = e => {
        if(pageNo === 1){
            alert("첫번째 페이지입니다 !")
            return
        }
        setPageNo(pageNo - 1)
        let pageList = e.target.parentElement.childNodes[1]
        let selectedPage = pageList.querySelector("#select")
        selectedPage.id = "unselect"
        pageList.querySelectorAll("div")[selectedPage.innerText - 2].id = "select"
        console.log(pageNo)
    }

    const GoNextPage = e => {
        if(pageNo === 10){
            alert("마지막 페이지입니다 !")
            return
        }
        setPageNo(pageNo + 1)
        let pageList = e.target.parentElement.childNodes[1]
        let selectedPage = pageList.querySelector("#select")
        selectedPage.id = "unselect"
        pageList.querySelectorAll("div")[selectedPage.innerText].id = "select"
        console.log(pageNo)
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
                <M.PaginationDiv>
                    <M.PrePageBtn onClick={GoPrePage}></M.PrePageBtn>
                    <M.PageListBox>
                        <M.PageList id="select" onClick={SelectPage}>
                            <M.PageNum>1</M.PageNum>
                        </M.PageList>
                        <M.PageList id="unselect" onClick={SelectPage}>
                            <M.PageNum>2</M.PageNum>
                        </M.PageList>
                        <M.PageList id="unselect" onClick={SelectPage}>
                            <M.PageNum>3</M.PageNum>
                        </M.PageList>
                        <M.PageList id="unselect" onClick={SelectPage}>
                            <M.PageNum>4</M.PageNum>
                        </M.PageList>
                        <M.PageList id="unselect" onClick={SelectPage}>
                            <M.PageNum>5</M.PageNum>
                        </M.PageList>
                        <M.PageList id="unselect" onClick={SelectPage}>
                            <M.PageNum>6</M.PageNum>
                        </M.PageList>
                        <M.PageList id="unselect" onClick={SelectPage}>
                            <M.PageNum>7</M.PageNum>
                        </M.PageList>
                        <M.PageList id="unselect" onClick={SelectPage}>
                            <M.PageNum>8</M.PageNum>
                        </M.PageList>
                        <M.PageList id="unselect" onClick={SelectPage}>
                            <M.PageNum>9</M.PageNum>
                        </M.PageList>
                        <M.PageList id="unselect" onClick={SelectPage}>
                            <M.PageNum>10</M.PageNum>
                        </M.PageList>
                    </M.PageListBox>
                    <M.NextPageBtn onClick={GoNextPage}></M.NextPageBtn>
                </M.PaginationDiv>
            </M.MenteeCont>
        </M.Background>
    )
}

export default MenteeBoard