import styled from "styled-components";
import Options from "./components/Options";
import withVideo from "./components/WithVideo";
import { useSelector } from "react-redux";

function App() {
  const { video } = useSelector((state) => state.video)
  const { h1Text } = useSelector((state) => state.video)
  const VideoMain = withVideo(video, h1Text)
  return (
    <Wrapper>
      <div className="video">
        <VideoMain />
      </div>
      <div className="options">
        <Options />
      </div>
    </Wrapper>
  );
}

const Wrapper = styled.div`
    display:flex ;
    .video{
      flex:0.5 ;
    }
    .options{
      flex:0.5;
    }
`
export default App;
