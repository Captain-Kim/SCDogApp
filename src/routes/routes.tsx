import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Header from '../components/Header';
import SponsorDetail from '../pages/SponsorDetail';
import SponsorList from '../pages/SponsorList';
import BankStatement from '../pages/BankStatement';

const AppRoutes = () => {
  return (
    <Router>
      <Header />
      <Routes>
        <Route path="/" element={<BankStatement />} />
        <Route path="/sponsorlist" element={<SponsorList />} />
        <Route path="/sponsorlist/detail/:id" element={<SponsorDetail />} />
      </Routes>
    </Router>
  );
};

export default AppRoutes;