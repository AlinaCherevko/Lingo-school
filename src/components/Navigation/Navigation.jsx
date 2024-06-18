import { NavLink } from 'react-router-dom';
import css from './Navigation.module.css';
import { useAuth } from '../../hooks/useAuth';

const Navigation = () => {
  const { isAuth } = useAuth();
  return (
    <div className={css.navigation}>
      <NavLink className={css.headerLink} to="/">
        Home
      </NavLink>
      <NavLink className={css.headerLink} to="/teachers">
        Teachers
      </NavLink>
      {isAuth && (
        <NavLink className={css.headerLink} to="/favorite">
          Favorite
        </NavLink>
      )}
    </div>
  );
};

export default Navigation;
