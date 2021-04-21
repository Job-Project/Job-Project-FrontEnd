import Nav from './components/global/Nav'
import Chat from './components/global/Chat'
import WorkerBoard from './components/board/worker_board/WorkerBoard';
import styled, { createGlobalStyle } from "styled-components";

    const GlobalStyle = createGlobalStyle`
      body {
        font-family: 'NanumSquare', sans-serif;
      }
    `;

function App() {
  return (
    <div>
      <GlobalStyle></GlobalStyle>
      <Nav></Nav>
      <WorkerBoard></WorkerBoard>
      <Chat></Chat>
    </div>
  );
}

export default App;
