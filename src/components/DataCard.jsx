const DataCard = ({
  Name,
  City,
  Picture: { PictureUrl1, PictureDescription1 },
}) => {
  return (
    <div className="data-card-container">
      <img src={PictureUrl1} alt={PictureDescription1} />
      <div className="data-card-name">{Name}</div>
      <div className="data-card-city">
        <img src="icons/spot16.png" alt="spot-icon" />
        {City}
      </div>
    </div>
  );
};

export default DataCard;
