import { Link } from 'react-router-dom';

const DataCard = ({
  ID,
  Name,
  City,
  Picture: { PictureUrl1, PictureDescription1 },
  type,
}) => {
  return (
    <Link className="text-decoration-none" to={`/${type}/${ID}`}>
      <div className="data-card-container">
        <img src={PictureUrl1} alt={PictureDescription1} />
        <div className="data-card-name">{Name}</div>
        <div className="data-card-city">
          <img src="icons/spot16.png" alt="spot-icon" />
          {City}
        </div>
      </div>
    </Link>
  );
};

export default DataCard;
