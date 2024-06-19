import {
  getAuth,
  createUserWithEmailAndPassword,
  updateProfile,
} from 'firebase/auth';
import Form from '../Form/Form';
import { useDispatch } from 'react-redux';
import { setUser } from '../../redux/userSlice';
import authData from '../../data/register.json';
import { toast } from 'react-toastify';

const Auth = ({ onClose }) => {
  const dispatch = useDispatch();

  const handleSignUp = async ({ name, email, password }) => {
    const auth = getAuth();

    try {
      const { user } = await createUserWithEmailAndPassword(
        auth,
        email,
        password
      );
      await updateProfile(user, { displayName: name });

      dispatch(
        setUser({
          name: user.displayName,
          email: user.email,
          token: user.accessToken,
          id: user.uid,
        })
      );
      toast.success('Register successfully');
    } catch (error) {
      toast.error(`${error.message}`);
    }
  };

  return (
    <Form
      title="Sign up"
      handleClick={handleSignUp}
      onClose={onClose}
      dataForm={authData}
    />
  );
};

export default Auth;
