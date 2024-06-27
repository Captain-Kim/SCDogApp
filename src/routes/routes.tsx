import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import SponsorDetail from '../pages/SponsorDetail';
import SponsorList from '../pages/SponsorList';

const AppRoutes = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<SponsorList />} />
        <Route path="/detail/:id" element={<SponsorDetail />} />
      </Routes>
    </Router>
  );
};

export default AppRoutes;