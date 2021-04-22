import styled, { createGlobalStyle } from "styled-components";
import Nav from "./components/global/Nav";
import Chat from "./components/global/Chat";

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
