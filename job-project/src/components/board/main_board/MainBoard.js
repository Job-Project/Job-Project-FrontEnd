import * as M from '../../../assets/style/board/main_board/MainBoardStyle'
import {Link} from "react-router-dom"

const MainBoard = () => {
    return (
        <M.Background>
            <M.MainCont>
                <M.MainTitle>인기 게시글</M.MainTitle>
                <M.BoardsCont>
                    <M.BoardCont>
                        <Link to="/log/board/mentee"><M.BoardName>Mentee's Board</M.BoardName></Link>
                        <M.BoardBox>
                            <Link to="/log/Post"><M.BoardList>
                                <M.BoardText>면접 관련 질문이 있습니다</M.BoardText>
                            </M.BoardList></Link>
                            <Link to="/log/Post"><M.BoardList>
                                <M.BoardText>면접 관련 질문이 있습니다</M.BoardText>
                            </M.BoardList></Link>
                            <Link to="/log/Post"><M.BoardList>
                                <M.BoardText>면접 관련 질문이 있습니다</M.BoardText>
                            </M.BoardList></Link>
                            <Link to="/log/Post"><M.BoardList>
                                <M.BoardText>면접 관련 질문이 있습니다</M.BoardText>
                            </M.BoardList></Link>
                            <Link to="/log/Post"><M.BoardList>
                                <M.BoardText>면접 관련 질문이 있습니다</M.BoardText>
                            </M.BoardList></Link>
                        </M.BoardBox>
                    </M.BoardCont>
                    <M.BoardCont>
                        <Link to="/log/board/worker"><M.BoardName>Worker's Board</M.BoardName></Link>
                        <M.BoardBox>
                            <Link to="/log/Post"><M.BoardList>
                                <M.BoardText>면접 관련 질문이 있습니다</M.BoardText>
                            </M.BoardList></Link>
                            <Link to="/log/Post"><M.BoardList>
                                <M.BoardText>면접 관련 질문이 있습니다</M.BoardText>
                            </M.BoardList></Link>
                            <Link to="/log/Post"><M.BoardList>
                                <M.BoardText>면접 관련 질문이 있습니다</M.BoardText>
                            </M.BoardList></Link>
                            <Link to="/log/Post"><M.BoardList>
                                <M.BoardText>면접 관련 질문이 있습니다</M.BoardText>
                            </M.BoardList></Link>
                            <Link to="/log/Post"><M.BoardList>
                                <M.BoardText>면접 관련 질문이 있습니다</M.BoardText>
                            </M.BoardList></Link>
                        </M.BoardBox>
                    </M.BoardCont>
                </M.BoardsCont>
            </M.MainCont>
        </M.Background>
    )
}

export default MainBoard;