import HomeItemList from './HomeItemList';
import './Home.css';
import Carousel from './Carousel';

const HomeContainer = (props) => {
  return (
    <>
        <div>
            <h2>{props.greeting}</h2>
            <Carousel></Carousel>
            <HomeItemList></HomeItemList>
        </div>
    </>
  )
}

export default HomeContainer