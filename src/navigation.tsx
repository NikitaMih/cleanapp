import { FC } from 'react';
import { Route, Router, Routes } from 'react-router-dom';
import MainPage from 'src/pages/MainPage/MainPage';

const Navigation: FC = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<MainPage />} />
      </Routes>
    </Router>
  );
};

export default Navigation;
