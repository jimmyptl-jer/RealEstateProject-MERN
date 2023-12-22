import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from 'react-redux'

import { signFailure, signInStart, signInSuccess } from "../redux/user/userSlice";
import OAuth from "../components/OAuth";

const SignUp = () => {
  const [formData, setFormData] = useState({
    username: "",
    email: "",
    password: ""
  });

  const { loading, error } = useSelector((state) => state.user)

  const navigate = useNavigate();
  const dispatch = useDispatch();

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      dispatch(signInStart())

      const response = await fetch('http://localhost:3000/api/auth/sign-in', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(formData)
      });

      const data = await response.json();

      if (data.success === false) {
        dispatch(signFailure(data.message))
        return;
      }

      dispatch(signInSuccess(data))
      navigate('/')
    } catch (error) {
      dispatch(signFailure(error.message))
    }
  };


  return (
    <div className="p-3 max-w-lg mx-auto">
      <h1 className="text-3xl text-center font-semibold my-7">
        Sign In
      </h1>

      <form className="flex flex-col gap-4" onSubmit={handleSubmit}>
        <input
          type="email"
          placeholder="Email"
          className="border p-3 rounded-lg"
          id="email"
          name="email"
          onChange={handleChange}
        />

        <input
          type="password"
          placeholder="Password"
          className="border p-3 rounded-lg"
          id="password"
          name="password"
          onChange={handleChange}
        />

        <button
          disabled={loading}
          className="bg-slate-700 text-white p-3 rounded-lg uppercase hover:opacity-95"
          type="submit">
          {loading ? 'Loading...' : 'Sign In'}
        </button>

        <OAuth />
      </form>

      <div className="flex gap-2 mt-5">
        <p>Do not have an Account?</p>
        <Link to='/sign-up'>
          <span className="text-blue-700">Sign Up</span>
        </Link>
      </div>
    </div>
  );
};

export default SignUp;
