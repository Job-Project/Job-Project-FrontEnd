import styled, { createGlobalStyle } from "styled-components";
import Nav from "./components/global/Nav";
import Chat from "./components/global/Chat";
// import Posting from "./components/posting/Posting";
// import Post from "./components/posting/Post"

    const GlobalStyle = createGlobalStyle`
      body {
        font-family: 'NanumSquare', sans-serif;
        outline: none;
      }
      ::selection {
        background: #DDDDDD;
        color: #000;
      }
    `;

function App() {
  return (
    <>
      <GlobalStyle></GlobalStyle>
      <Nav></Nav>
      {/* <Posting></Posting> */}
      {/* <Post></Post> */}
    </>
  );
}

export default App;
