import { Navigate, Route, Routes } from 'react-router-dom';
import SharedLayout from 'components/SharedLayout/SharedLayout';
import 'react-toastify/dist/ReactToastify.css';

import { useAuth } from './hooks/useAuth';
import { Suspense, lazy } from 'react';
import NotFoundPage from './pages/NotFoundPage/NotFoundPage';

const HomePage = lazy(() => import('./pages/HomePage/HomePage'));
const TeachersPage = lazy(() => import('./pages/TeachersPage/TeachersPage'));
const FavoritePage = lazy(() => import('./pages/FavoritePage/FavoritePage'));

function App() {
  const { isAuth } = useAuth();
  return (
    <Suspense fallback={null}>
      <Routes>
        <Route path="/" element={<SharedLayout />}>
          <Route index element={<HomePage />} />
          <Route path="/teachers" element={<TeachersPage />} />
          <Route
            path="/favorite"
            element={isAuth ? <FavoritePage /> : <Navigate to="/" />}
          />
        </Route>
        <Route path="*" element={<NotFoundPage />} />
      </Routes>
    </Suspense>
  );
}
export default App;
