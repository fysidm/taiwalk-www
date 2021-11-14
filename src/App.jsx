import { Routes, Route } from 'react-router-dom';

import Header from './components/Header';
import HomePage from './pages/HomePage';
import ScenicSpotPage from './pages/ScenicSpotPage';
import ActivityPage from './pages/ActivityPage';
import RestaurantPage from './pages/RestaurantPage';
import Footer from './components/Footer';

function App() {
  return (
    <div>
      <Header />
      <Routes>
        <Route path="/scenic-spot" element={<ScenicSpotPage />} />
        <Route path="/activity" element={<ActivityPage />} />
        <Route path="/restaurant" element={<RestaurantPage />} />
        <Route path="/" element={<HomePage />} />
      </Routes>
      <Footer />
    </div>
  );
}

export default App;
