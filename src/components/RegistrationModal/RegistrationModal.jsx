import Form from '../Form/Form';
import css from './RegistrationModal.module.css';

const RegistrationModal = () => {
  return (
    <div className={css.modal}>
      <h2 className={css.title}>Registration</h2>
      <p className={css.text}>
        Thank you for your interest in our platform! In order to register, we
        need some information. Please provide us with the following information
      </p>
      <Form />
    </div>
  );
};

export default RegistrationModal;
