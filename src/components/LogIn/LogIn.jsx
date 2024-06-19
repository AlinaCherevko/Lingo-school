//import { useDispatch } from 'react-redux';
import { getAuth, signInWithEmailAndPassword } from 'firebase/auth';
import Form from '../Form/Form';
import { useDispatch } from 'react-redux';
import { setUser } from '../../redux/userSlice';
import loginData from '../../data/login.json';
import { toast } from 'react-toastify';

const LogIn = ({ onClose }) => {
  const dispatch = useDispatch();

  const handleLogin = async ({ email, password }) => {
    const auth = getAuth();
    try {
      const { user } = await signInWithEmailAndPassword(auth, email, password);
      console.log(user);
      dispatch(
        setUser({
          name: user.displayName,
          email: user.email,
          token: user.accessToken,
          id: user.uid,
        })
      );
      toast.success('Log in successfully');
    } catch (error) {
      toast.error(`${error.message}`);
    }
  };

  return (
    <Form
      title="Log in"
      handleClick={handleLogin}
      onClose={onClose}
      dataForm={loginData}
    />
  );
};

export default LogIn;
