import { useForm } from 'react-hook-form';
import * as Yup from 'yup';
import { yupResolver } from '@hookform/resolvers/yup';
import css from './Form.module.css';
//import { useAuth } from '../../hooks/useAuth';
//import { useEffect } from 'react';

const Form = ({ title, handleClick, onClose }) => {
  //const { isAuth } = useAuth();
  const schema = Yup.object().shape({
    name: Yup.string()
      .min(2, 'Too short')
      .max(32, 'Too Long!')
      .required('Required'),
    email: Yup.string().email('Invalid email').required('Required'),
    password: Yup.string()
      .min(8, 'Password must be at least 8 characters')
      .max(64, 'Password must be no more than 64 characters')
      .required('Required'),
  });

  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm({ mode: 'onChange', resolver: yupResolver(schema) });

  const onSubmit = (data) => {
    console.log(data);
    handleClick(data.name, data.email, data.password);
    onClose();
    reset();
  };
  // const onSubmit = async (data) => {
  //   try {
  //     console.log(data);
  //     await handleClick(data.name, data.email, data.password);
  //     onClose();
  //   } catch (error) {
  //     console.log(error.message);
  //   } finally {
  //     reset();
  //   }

  //   reset();
  // };

  return (
    <>
      <form className={css.form} onSubmit={handleSubmit(onSubmit)}>
        <div className={css.formWrapper}>
          <div className={css.inputWrapper}>
            <input
              type="text"
              className={css.input}
              {...register('name')}
              placeholder="Name"
            />
            <p className={css.errorMessage}>{errors.name?.message}</p>
          </div>
          <div className={css.inputWrapper}>
            <input
              type="email"
              className={css.input}
              {...register('email')}
              placeholder="Email"
            />
            <p className={css.errorMessage}>{errors.email?.message}</p>
          </div>
          <div className={css.inputWrapper}>
            <input
              type="text"
              className={css.input}
              {...register('password')}
              placeholder="Password"
            />
            <p className={css.errorMessage}>{errors.password?.message}</p>
          </div>
        </div>
        <button className={css.button} type="submit">
          {title}
        </button>
      </form>
    </>
  );
};

export default Form;
