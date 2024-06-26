import { useState } from 'react';
import Logo from '../Logo/Logo';
import BurgerBtn from '../MobMenu/BurgerBtn/BurgerBtn';
import Navigation from '../Navigation/Navigation';
import Registration from '../Registration/Registration';
import css from './Header.module.css';
import MobMenu from '../MobMenu/Menu/MobMenu';

export const Header = () => {
  const [isVisibleMobMenu, setIsVisibleMobMenu] = useState(false);

  const onClose = () => {
    setIsVisibleMobMenu(false);
  };
  const onOpen = () => {
    setIsVisibleMobMenu(true);
  };
  return (
    <div className="container">
      <div className={css.header}>
        <Logo />
        <Navigation />
        <Registration />
        <BurgerBtn onOpen={onOpen} />
      </div>
      {isVisibleMobMenu && <MobMenu onClose={onClose} />}
    </div>
  );
};
