import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import OAuth from "../components/OAuth";

const SignUp = () => {
  const [formData, setFormData] = useState({
    username: "",
    email: "",
    password: ""
  });

  const [loading, setLoading] = useState(false);

  const navigate = useNavigate();

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);

    try {
      const response = await fetch('http://localhost:3000/api/auth/sign-up', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(formData)
      });

      if (!response.ok) {
        setLoading(false);
        return;
      }

      const data = await response.json();

      if (data.success === false) {

        setLoading(false);
        return;
      }

      navigate('/sign-in');
    } catch (error) {
      console.error(error);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="p-3 max-w-lg mx-auto">
      <h1 className="text-3xl text-center font-semibold my-7">
        Sign Up
      </h1>

      <form className="flex flex-col gap-4" onSubmit={handleSubmit}>
        <input
          type="text"
          placeholder="Username"
          className="border p-3 rounded-lg"
          name="username"
          onChange={handleChange}
        />

        <input
          type="email"
          placeholder="Email"
          className="border p-3 rounded-lg"
          name="email"
          onChange={handleChange}
        />

        <input
          type="password"
          placeholder="Password"
          className="border p-3 rounded-lg"
          name="password"
          onChange={handleChange}
        />

        <button
          disabled={loading}
          className="bg-slate-700 text-white p-3 rounded-lg uppercase hover:opacity-95"
          type="submit"
        >
          {loading ? 'Loading...' : 'Sign Up'}
        </button>

        <OAuth />
      </form>

      <div className="flex gap-2 mt-5">
        <p>Have an Account?</p>
        <Link to='/sign-in'>
          <span className="text-blue-700">Sign In</span>
        </Link>
      </div>
    </div>
  );
};

export default SignUp;
