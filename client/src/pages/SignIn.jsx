
const SignIn = () => {
  return (
    <div>
      <h1 className="text-3xl text-center font-semibold my-7">
        Sign Up
      </h1>

      <form className="flex flex-col gap-4">
        <input type="text" placeholder="Username" className="border p-3 rounded-lg" id="username"></input>
        <input type="email" placeholder="Email" className="border p-3 rounded-lg" id="email"></input>
        <input type="password" placeholder="Password" className="border p-3 rounded-lg" id="password"></input>
      </form>
    </div>
  )
}

export default SignIn