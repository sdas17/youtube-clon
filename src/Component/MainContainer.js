
import ButtonList from '../Component/ButtonList';
import VideoContainer from '../Component/VideoContainer';

const MainContainer = () => {
    const data = [
      {
        name: "All",
      },
      { name: "Mixes" },
      { name: "Comedy" },
      { name: "News" },
      { name: "Gadgets" },
      { name: "Fitness" },
      { name: "Bollywood Songs" },
      ];
       
  return (
    <div >
        <ButtonList names={data}/>
        <VideoContainer/>
    </div>
  )
}

export default MainContainer