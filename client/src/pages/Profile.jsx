import { useSelector } from "react-redux";

const Profile = () => {
  const { currentUser } = useSelector((state) => state.user);

  return (
    <div className="p-3 max-w-lg mx-auto">
      <h1 className="text-3xl font-semibold text-center my-7">Profile</h1>

      <form className="flex flex-col items-center gap-4">
        <img
          className="rounded-full h-24 w-24 object-cover cursor-pointer self-center"
          alt="profile"
          src={currentUser.avatar}
        />
        <input
          type="text"
          placeholder="Username"
          className="border p-3 rounded-lg focus:outline-none focus:border-blue-500"
        />
        <input
          type="email"
          placeholder="Email"
          className="border p-3 rounded-lg focus:outline-none focus:border-blue-500"
        />
        <input
          type="password"
          placeholder="Password"
          className="border p-3 rounded-lg focus:outline-none focus:border-blue-500"
        />

        <button className="bg-slate-700 text-white rounded-lg p-3 uppercase hover:opacity-95 disabled:opacity-80">
          Update
        </button>
      </form>

      <div className="flex justify-between mt-5 gap-4">
        <span className="text-black-700 cursor-pointer rounded-lg p-3 hover:bg-red-100 transition duration-300">
          Delete Account
        </span>
        <span className="text-black-700 cursor-pointer rounded-lg p-3 hover:bg-red-100 transition duration-300">
          Sign Out
        </span>
      </div>
    </div>
  );
};

export default Profile;
