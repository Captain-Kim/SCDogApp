import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Header from '../components/Header';
import SponsorDetail from '../pages/SponsorDetail';
import SponsorList from '../pages/SponsorList';
import BankStatement from '../pages/BankStatement';
import ExpenseList from '../pages/ExpenseList';
import ExpenseDetail from '../pages/ExpenseDetail';
import Layout from '../components/Layout';
import Footer from '../components/Footer';

const AppRoutes = () => {
  return (
    <Router>
      <Header />
      <Layout>
        <Routes>
          <Route path="/" element={<BankStatement />} />
          <Route path="/sponsorlist" element={<SponsorList />} />
          <Route path="/sponsorlist/detail/:uuid" element={<SponsorDetail />} />
          <Route path="/expensedetail" element={<ExpenseDetail />} />
          <Route path="/expenselist/detail/:uuid" element={<ExpenseList />} />
        </Routes>
      </Layout>
      <Footer/>
    </Router>
  );
};

export default AppRoutes;