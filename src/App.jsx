import { Route, Routes } from 'react-router-dom';
import SharedLayout from 'components/SharedLayout/SharedLayout';

import TeachersPage from './pages/TeachersPage/TeachersPage';
import HomePage from './pages/HomePage/HomePage';
import FavoritePage from './pages/FavoritePage/FavoritePage';

function App() {
  return (
    <Routes>
      <Route path="/" element={<SharedLayout />}>
        <Route index element={<HomePage />} />
        <Route path="/teachers" element={<TeachersPage />} />
        <Route path="/favorite" element={<FavoritePage />} />
      </Route>
    </Routes>
  );
}
export default App;
