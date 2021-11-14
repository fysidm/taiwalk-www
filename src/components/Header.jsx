import { Link } from 'react-router-dom';

const Header = () => {
  return (
    <header className="header-container">
      <Link to="/">
        <img src="Logo-desktop.png" alt="taiwalk logo" />
      </Link>
      <div className="menu-container">
        <Link className="link-text-container" to="/scenic-spot">
          <div className="link-text">探索景點</div>
        </Link>
        <Link className="link-text-container" to="/activity">
          <div className="link-text">節慶活動</div>
        </Link>
        <Link className="link-text-container" to="/restaurant">
          <div className="link-text">品嚐美食</div>
        </Link>
      </div>
    </header>
  );
};

export default Header;
