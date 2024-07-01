import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Header from '../components/Header';
import SponsorDetail from '../pages/SponsorDetail';
import SponsorList from '../pages/SponsorList';
import BankStatement from '../pages/BankStatement';
import ExpenseList from '../pages/ExpenseList';
import ExpenseDetail from '../pages/ExpenseDetail';
import Layout from '../components/Layout';
import Footer from '../components/Footer';
import SupportInquiry from '../pages/SupportInquiry';

const AppRoutes = () => {
  return (
    <Router>
      <Header />
      <Layout>
        <Routes>
          <Route path="/" element={<BankStatement />} />
          <Route path="/sponsorlist" element={<SponsorList />} />
          <Route path="/sponsorlist/detail/:uuid" element={<SponsorDetail />} />
          <Route path="/expenselist" element={<ExpenseList />} />
          <Route path="/expenselist/detail/:uuid" element={<ExpenseDetail />} />
          <Route path="/supportinquiry" element={<SupportInquiry />} />
        </Routes>
      </Layout>
      <Footer/>
    </Router>
  );
};

export default AppRoutes;