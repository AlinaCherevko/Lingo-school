import LogIn from '../LogIn/LogIn';
import css from './LogInModal.module.css';

const LogInModal = ({ onClose }) => {
  return (
    <div className={css.modal}>
      <h2 className={css.title}>Log In</h2>
      <p className={css.text}>
        Welcome back! Please enter your credentials to access your account and
        continue your search for an teacher.
      </p>
      <LogIn onClose={onClose} />
    </div>
  );
};

export default LogInModal;
