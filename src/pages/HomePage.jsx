import { useContext, useEffect } from 'react';
import { Link } from 'react-router-dom';

import { Context as DataContext } from '../context/DataContext';
import ActivityCard from '../components/ActivityCard';
import DataCard from '../components/DataCard';

const HomePage = () => {
  const { state, getTopActivities, getTopScenicSpots, getTopRestaurants } =
    useContext(DataContext);

  useEffect(() => {
    getTopActivities();
    getTopScenicSpots();
    getTopRestaurants();

    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const {
    topActivities = [],
    topScenicSpots = [],
    topRestaurants = [],
  } = state;

  return (
    <div className="home-page-container">
      <div className="title-more-wrapper">
        <div className="title">近期活動</div>
        <Link className="text-decoration-none" to="/activity">
          <div className="more">
            查看更多活動
            <img src="icons/arrow-right16_R.png" alt="arrow-icon" />
          </div>
        </Link>
      </div>
      <div className="activity-card-list-container">
        {topActivities.length &&
          topActivities.map((props) => (
            <ActivityCard key={props.ID} {...props} />
          ))}
      </div>
      <div className="title-more-wrapper">
        <div className="title">熱門打卡景點</div>
        <Link className="text-decoration-none" to="/scenic-spot">
          <div className="more">
            查看更多景點
            <img src="icons/arrow-right16_R.png" alt="arrow-icon" />
          </div>
        </Link>
      </div>
      <div className="data-card-list-container">
        {topScenicSpots.length &&
          topScenicSpots.map((props) => <DataCard key={props.ID} {...props} />)}
      </div>
      <div className="title-more-wrapper">
        <div className="title">一再回訪美食</div>
        <Link className="text-decoration-none" to="/restaurant">
          <div className="more">
            查看更多美食
            <img src="icons/arrow-right16_R.png" alt="arrow-icon" />
          </div>
        </Link>
      </div>
      <div className="data-card-list-container">
        {topRestaurants.length &&
          topRestaurants.map((props) => <DataCard key={props.ID} {...props} />)}
      </div>
    </div>
  );
};

export default HomePage;
