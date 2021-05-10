import styled, { createGlobalStyle } from "styled-components";
import { Route, BrowserRouter as Router, Switch } from "react-router-dom"
import Entrance from "./components/entrance/Entrance"
import MainBoard from "./components/board/main_board/MainBoard"
import { Nav, Chat } from "./components/global"
import MenteeMyPage from "./components/user_page/my_page/mentee/MenteeMyPage"
import MentorMyPage from "./components/user_page/my_page/mentor/MentorMyPage"
import { MenteeUserPage, MentorUserPage } from "./components/user_page/other_page"
import MenteeBoard from "./components/board/mentee_board/MenteeBoard"
import WorkerBoard from "./components/board/worker_board/WorkerBoard"
import Posting from "./components/posting/Posting";
import Post from "./components/posting/Post"

    const GlobalStyle = createGlobalStyle`
      body {
        font-family: 'NanumSquare', sans-serif;
        outline: none;
      }
      ::selection {
        background: #DDDDDD;
        color: #000;
      }
      a{text-decoration: none;}
    `;

function App() {
  return (
    <Router>
      <Route path="/" component={GlobalStyle}></Route>
      <Route path="/log" component={Nav}></Route>
      <Route path="/log" component={Chat}></Route>
      <Route exact path="/" component={Entrance}></Route>
      <Route path="/log/board/main" component={MainBoard}></Route>
      <Route path="/log/myPage/mentee" component={MenteeMyPage}></Route>
      <Route path="/log/myPage/mentor" component={MentorMyPage}></Route>
      <Route path="/log/userPage/mentee" component={MenteeUserPage}></Route>
      <Route path="/log/userPage/mentor" component={MentorUserPage}></Route>
      <Route path="/log/myPage/mentee" component={MenteeMyPage}></Route>
      <Route path="/log/myPage/mentee" component={MenteeMyPage}></Route>
      <Route path="/log/board/mentee" component={MenteeBoard}></Route>
      <Route path="/log/board/worker" component={WorkerBoard}></Route>
      <Route path="/log/Posting" component={Posting}></Route>
      <Route path="/log/Post" component={Post}></Route>
    </Router>
  );
}

export default App;
