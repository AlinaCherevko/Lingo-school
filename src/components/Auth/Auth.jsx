import {
  getAuth,
  createUserWithEmailAndPassword,
  updateProfile,
} from 'firebase/auth';
import Form from '../Form/Form';
import { useDispatch } from 'react-redux';
import { setUser } from '../../redux/userSlice';

const Auth = ({ onClose }) => {
  const dispatch = useDispatch();

  const handleSignUp = async (name, email, password) => {
    const auth = getAuth();

    try {
      const { user } = await createUserWithEmailAndPassword(
        auth,
        email,
        password
      );
      await updateProfile(user, { displayName: name });
      //console.log(user);
      //console.log(user.displayName);
      dispatch(
        setUser({
          name: user.displayName,
          email: user.email,
          token: user.accessToken,
          id: user.uid,
        })
      );
    } catch (e) {
      console.log(e.message);
    }
  };

  return <Form title="Sign up" handleClick={handleSignUp} onClose={onClose} />;
};

export default Auth;
