import NewsTemplate from './components/board/NewsTemplate';
import Intro from './components/main/Intro';
import { Route, Router, Routes } from 'react-router-dom';
import Home from './components/main/Home';
import Join from './components/user/Join';
import './App.css';
import Layout from './common/layout/Layout';
import ReportTemplate from './components/board/ReportTemplate';
import ReportDetail from './components/board/ReportDetail';

import Login from './components/user/Login';
import NewsDetailModal from './components/board/NewsDetailModal';

function App() {
  return (
    <>
      <Routes>
        <Route path='/' element={<Intro />} />
        <Route path='/' element={<Layout />}>
          <Route path='/home' element={<Home />} />
          <Route path='/news' element={<NewsTemplate />} />
          <Route path='/news/:id' element={<NewsTemplate />} />
          <Route path='/login' element={<Login />} />
          <Route path='/join' element={<Join />} />
          <Route path='/board' element={<ReportTemplate />} />
          <Route path='/board/:id' element={<ReportTemplate />} />
          <Route path='/board/detail/:id' element={<ReportDetail />} />
        </Route>
      </Routes>
    </>
  );
}

export default App;
