import dayjs from 'dayjs';

const ActivityCard = ({
  StartTime,
  EndTime,
  Name,
  City,
  Picture: { PictureUrl1, PictureDescription1 },
}) => {
  return (
    <div className="activity-card-container">
      <div className="activity-card-img-container">
        <img src={PictureUrl1} alt={PictureDescription1} />
      </div>
      <div className="activity-card-text-container">
        <div className="activity-card-date-name-wrapper">
          <div>{`${dayjs(StartTime).format('YYYY/MM/DD')} - ${dayjs(
            EndTime
          ).format('YYYY/MM/DD')}`}</div>
          <div className="activity-card-name">{Name}</div>
        </div>
        <div className="activity-card-city-detail-wrapper">
          <div className="activity-card-city">
            <img src="icons/spot16.png" alt="spot-icon" />
            {City}
          </div>
          <div className="activity-card-detail">
            詳細介紹
            <img src="icons/arrow-right16_G.png" alt="arrow-right-icon" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default ActivityCard;
