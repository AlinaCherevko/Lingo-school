import { NavLink } from 'react-router-dom';
import css from './Logo.module.css';

const Logo = () => {
  return (
    <div className={css.logoWrapper}>
      <img src="/ukraine-logo.svg" alt="" />
      <NavLink className={css.headerLink} to="/">
        LearnLingo
      </NavLink>
    </div>
  );
};

export default Logo;
