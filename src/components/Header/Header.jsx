import Logo from '../Logo/Logo';
import Navigation from '../Navigation/Navigation';
import Registration from '../Registration/Registration';
import css from './Header.module.css';

export const Header = () => {
  return (
    <div className="container">
      <div className={css.header}>
        <Logo />
        <Navigation />
        <Registration />
      </div>
    </div>
  );
};
