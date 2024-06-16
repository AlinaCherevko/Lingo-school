import { NavLink } from 'react-router-dom';
import css from './Logo.module.css';

const Logo = () => {
  return (
    <div className={css.logoWrapper}>
      <img src="/Lingo-school/ukraine-logo.svg" alt="logo" />
      <NavLink className={css.headerLink} to="/">
        LearnLingo
      </NavLink>
    </div>
  );
};

export default Logo;
