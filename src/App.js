import Nav from "./Components/Nav";
import Landing from "./Pages/Landing";
import styled from "styled-components";

const App = () => {
  return (
    <AppWrapper>
      <Nav />
      <Content>
        <Landing />
      </Content>
    </AppWrapper>
  );
};

export default App;

const AppWrapper = styled.div`
  width: 100%;
  min-height: 100vh;
  background: #ffffff;
`;

const Content = styled.main`
  width: 100%;
  max-width: 1400px;
  margin: 0 auto;
  display: flex;
  flex-direction: column;
  align-items: center;
`;
