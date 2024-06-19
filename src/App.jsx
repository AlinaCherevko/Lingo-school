import { Navigate, Route, Routes } from 'react-router-dom';
import SharedLayout from 'components/SharedLayout/SharedLayout';
import 'react-toastify/dist/ReactToastify.css';
import TeachersPage from './pages/TeachersPage/TeachersPage';
import HomePage from './pages/HomePage/HomePage';
import FavoritePage from './pages/FavoritePage/FavoritePage';
import { useAuth } from './hooks/useAuth';

function App() {
  const { isAuth } = useAuth();
  return (
    <Routes>
      <Route path="/" element={<SharedLayout />}>
        <Route index element={<HomePage />} />
        <Route path="/teachers" element={<TeachersPage />} />
        <Route
          path="/favorite"
          element={isAuth ? <FavoritePage /> : <Navigate to="/" />}
        />
        {/* <Route path="/favorite" element={<FavoritePage />} /> */}
      </Route>
    </Routes>
  );
}
export default App;
