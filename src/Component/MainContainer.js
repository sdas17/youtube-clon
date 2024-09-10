
import ButtonList from '../Component/ButtonList';
import VideoCard from '../Component/VideoCard';

const MainContainer = () => {
    const data = [
        'Episode 1: The Beginning',
        'Episode 2: The Middle',
        'Episode 3: The End',
        'Episode 4: The Journey Continues',
        'Episode 5: New Beginnings',
        'Episode 6: The Twist',
        'Episode 7: The Revelation',
        'Episode 8: The Confrontation',
        'Episode 9: The Resolution',
        'Episode 10: The Finale',
      ];
  return (
    <div >
        <ButtonList names={data}/>
        <VideoCard/>
    </div>
  )
}

export default MainContainer