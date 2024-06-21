import { Link } from 'react-router-dom';
import css from './Logo.module.css';

const Logo = () => {
  return (
    <div className={css.logoWrapper}>
      <img src="/Lingo-school/ukraine-logo.svg" alt="logo" loading="lazy" />
      <Link className={css.headerLink} to="/">
        LearnLingo
      </Link>
    </div>
  );
};

export default Logo;
