import styled, { createGlobalStyle } from "styled-components";
import Nav from "./components/global/Nav";
import Chat from "./components/global/Chat";
import MenteeMyPage from './components/user_page/my_page/mentee/MenteeMyPage'
import MentorMyPage from './components/user_page/my_page/mentor/MentorMyPage'
import MenteeUserPage from './components/user_page/other_page/MenteeUserPage'
import { UserProfile } from "./assets/style/user_page/my_page/MenteeMyPageStyle";
import MentorUserPage from "./components/user_page/other_page/MentorUserPage";

    const GlobalStyle = createGlobalStyle`
      body {
        font-family: 'NanumSquare', sans-serif;
      }
    `;

function App() {
  return (
    <div>
      <GlobalStyle></GlobalStyle>
      {/* <Nav></Nav>
      <MentorUserPage></MentorUserPage> */}
      {/* <MenteeUserPage></MenteeUserPage> */}
      {/* <Chat></Chat> */}
      {/* <MentorMyPage></MentorMyPage> */}
      {/* <MenteeMyPage></MenteeMyPage> */}
    </div>
  );
}

export default App;
