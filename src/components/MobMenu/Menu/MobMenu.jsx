import { Link } from 'react-router-dom';
import CloseBtn from '../../Buttons/CloseBtn/CloseBtn';
import { useAuth } from '../../../hooks/useAuth';
import { useDispatch } from 'react-redux';
import css from './MobMenu.module.css';
import { useState } from 'react';
import { removeUser } from '../../../redux/userSlice';
import Modal from '../../Modal/Modal';
import RegistrationModal from '../../RegistrationModal/RegistrationModal';
import LogInModal from '../../LogInModal/LogInModal';

const MobMenu = ({ onClose }) => {
  const { isAuth } = useAuth();
  const dispatch = useDispatch();

  const [isModalRegistrationVisible, setIsModalRegistrationVisible] =
    useState(false);
  const [isModalLogInVisible, setIsModalLogInVisible] = useState(false);

  return (
    <div className={css.mobMenu}>
      <CloseBtn onClose={onClose} />
      <nav className={css.navigation}>
        <Link className={css.headerLink} to="/" onClick={onClose}>
          Home
        </Link>
        <Link className={css.headerLink} to="/teachers" onClick={onClose}>
          Teachers
        </Link>
        {isAuth && (
          <Link className={css.headerLink} to="/favorite" onClick={onClose}>
            Favorite
          </Link>
        )}
      </nav>
      <div className={css.registrationWrapper}>
        {isAuth ? (
          <button onClick={() => dispatch(removeUser())} className={css.logIn}>
            Log out
          </button>
        ) : (
          <ul className={css.list}>
            <li className={css.item}>
              <img
                className={css.img}
                src="/Lingo-school/login.svg"
                alt="login"
                loading="lazy"
              />
              <button
                onClick={() => setIsModalLogInVisible(true)}
                className={css.logIn}
              >
                Log in
              </button>
            </li>
            <li>
              <button
                onClick={() => setIsModalRegistrationVisible(true)}
                className={css.registration}
              >
                Registration
              </button>
            </li>
          </ul>
        )}

        {isModalRegistrationVisible && (
          <Modal onClose={() => setIsModalRegistrationVisible(false)}>
            <RegistrationModal
              onClose={() => setIsModalRegistrationVisible(false)}
            />
          </Modal>
        )}
        {isModalLogInVisible && (
          <Modal onClose={() => setIsModalLogInVisible(false)}>
            <LogInModal onClose={() => setIsModalLogInVisible(false)} />
          </Modal>
        )}
      </div>
    </div>
  );
};

export default MobMenu;
