import { GoogleAuthProvider, getAuth, signInWithPopup } from 'firebase/auth';
import { app } from '../firebase';
import { useDispatch } from 'react-redux';
import { signInSuccess } from '../redux/user/userSlice';


const OAuth = () => {

  const dispatch = useDispatch();
  const handleSubmit = async () => {

    try {
      const provider = new GoogleAuthProvider();
      const auth = getAuth(app);

      const result = await signInWithPopup(auth, provider);

      const response = await fetch('api/auth/google', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          name: result.user.displayName,
          email: result.user.email,
          photo: result.user.photoURL
        }),
      });

      const data = await response.json()
      dispatch(signInSuccess(data))
    } catch (error) {
      console.log('Sorry, unable to complete authentication with Google', error);
    }
  };

  return (
    <button
      onClick={handleSubmit}
      type='button'
      className='bg-red-700 text-white p-3 rounded-lg uppercase hover:opacity-95'>
      Continue with Google
    </button>
  );
};

export default OAuth;
