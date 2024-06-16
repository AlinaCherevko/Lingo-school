import css from './Registration.module.css';

const Registration = ({ onOpenModal }) => {
  return (
    <ul className={css.list}>
      <li>
        <button onClick={onOpenModal} className={css.logIn}>
          Log in
        </button>
      </li>
      <li>
        <button onClick={onOpenModal} className={css.registration}>
          Registration
        </button>
      </li>
    </ul>
  );
};

export default Registration;
