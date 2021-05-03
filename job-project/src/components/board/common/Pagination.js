import { useState } from "react"
import * as M from '../../../assets/style/board/mentee_board/MenteeBoardStyle'

const Pagination = () => {

    const [pageNo, setPageNo] = useState(1);
    
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
    )
}

export default Pagination;