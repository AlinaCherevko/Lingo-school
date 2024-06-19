import { useForm } from 'react-hook-form';
import * as Yup from 'yup';
import { yupResolver } from '@hookform/resolvers/yup';
import css from './Form.module.css';

const Form = ({ title, handleClick, onClose, dataForm }) => {
  // Динамічне створення схеми валідації залежно від переданих полів
  const validationSchema = {};
  dataForm.forEach((field) => {
    if (field.name === 'name') {
      validationSchema[field.name] = Yup.string()
        .min(2, 'Too short')
        .max(32, 'Too Long!')
        .required('Required');
    } else if (field.name === 'email') {
      validationSchema[field.name] = Yup.string()
        .email('Invalid email')
        .required('Required');
    } else if (field.name === 'password') {
      validationSchema[field.name] = Yup.string()
        .min(8, 'Password must be at least 8 characters')
        .max(64, 'Password must be no more than 64 characters')
        .required('Required');
    }
  });

  const schema = Yup.object().shape(validationSchema);

  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm({ mode: 'onChange', resolver: yupResolver(schema) });

  const onSubmit = (data) => {
    handleClick(data);
    onClose();
    reset();
  };

  return (
    <>
      <form className={css.form} onSubmit={handleSubmit(onSubmit)}>
        <div className={css.formWrapper}>
          {dataForm.map(({ name, label }) => {
            return (
              <div className={css.inputWrapper} key={name}>
                <input
                  type={name === 'password' ? 'password' : 'text'}
                  className={css.input}
                  {...register(name)}
                  placeholder={label}
                />
                <p className={css.errorMessage}>{errors[name]?.message}</p>
              </div>
            );
          })}
        </div>
        <button className={css.button} type="submit">
          {title}
        </button>
      </form>
    </>
  );
};

export default Form;

// import { useForm } from 'react-hook-form';
// import * as Yup from 'yup';
// import { yupResolver } from '@hookform/resolvers/yup';
// import css from './Form.module.css';
// //import { useAuth } from '../../hooks/useAuth';

// const Form = ({ title, handleClick, onClose, dataForm }) => {
//   //const { isAuth } = useAuth();
//   const schema = Yup.object().shape({
//     name: Yup.string()
//       .min(2, 'Too short')
//       .max(32, 'Too Long!')
//       .required('Required'),
//     email: Yup.string().email('Invalid email').required('Required'),
//     password: Yup.string()
//       .min(8, 'Password must be at least 8 characters')
//       .max(64, 'Password must be no more than 64 characters')
//       .required('Required'),
//   });

//   const {
//     register,
//     handleSubmit,
//     formState: { errors },
//     reset,
//   } = useForm({ mode: 'onChange', resolver: yupResolver(schema) });

//   const onSubmit = (data) => {
//     console.log('клік');
//     //handleClick(data.name, data.email, data.password);
//     handleClick(data);
//     onClose();
//     reset();
//   };

//   return (
//     <>
//       <form className={css.form} onSubmit={handleSubmit(onSubmit)}>
//         <div className={css.formWrapper}>
//           {dataForm.map(({ name, label }) => {
//             return (
//               <div className={css.inputWrapper} key={name}>
//                 <input
//                   type={name === 'password' ? 'password' : 'text'}
//                   className={css.input}
//                   {...register(name)}
//                   placeholder={label}
//                 />
//                 <p className={css.errorMessage}>{errors[name]?.message}</p>
//               </div>
//             );
//           })}
//           {/* <div className={css.inputWrapper}>
//             <input
//               type="text"
//               className={css.input}
//               {...register('name')}
//               placeholder="Name"
//             />
//             <p className={css.errorMessage}>{errors.name?.message}</p>
//           </div>
//           <div className={css.inputWrapper}>
//             <input
//               type="email"
//               className={css.input}
//               {...register('email')}
//               placeholder="Email"
//             />
//             <p className={css.errorMessage}>{errors.email?.message}</p>
//           </div>
//           <div className={css.inputWrapper}>
//             <input
//               type="text"
//               className={css.input}
//               {...register('password')}
//               placeholder="Password"
//             />
//             <p className={css.errorMessage}>{errors.password?.message}</p>
//           </div> */}
//         </div>
//         <button className={css.button} type="submit">
//           {title}
//         </button>
//       </form>
//     </>
//   );
// };

// export default Form;
