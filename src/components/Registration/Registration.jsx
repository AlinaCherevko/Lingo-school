import { useState } from 'react';
import Modal from '../Modal/Modal';
import RegistrationModal from '../RegistrationModal/RegistrationModal';
import LogInModal from '../LogInModal/LogInModal';
import { useAuth } from '../../hooks/useAuth';
import css from './Registration.module.css';
import { useDispatch } from 'react-redux';
import { removeUser } from '../../redux/userSlice';

const Registration = () => {
  const { isAuth } = useAuth();
  const dispatch = useDispatch();

  const [isModalRegistrationVisible, setIsModalRegistrationVisible] =
    useState(false);
  const [isModalLogInVisible, setIsModalLogInVisible] = useState(false);

  return (
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
  );
};

export default Registration;
