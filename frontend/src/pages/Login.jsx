export default function Login({ openRegister }) {
  return (
    <div className="bg-white p-8 rounded-2xl shadow-lg w-full max-w-md">
      <h1 className="text-3xl font-bold text-center mb-6 text-blue-600">
        Login
      </h1>

      <input type="email" placeholder="Email" className="w-full p-3 border rounded-xl mb-4" />
      <input type="password" placeholder="Password" className="w-full p-3 border rounded-xl mb-4" />

      <button className="w-full bg-blue-600 text-white py-3 rounded-xl font-semibold hover:bg-blue-700">
        Login
      </button>

      <p className="mt-4 text-center">
        Don’t have an account?
        <button className="text-blue-600 font-semibold ml-1" onClick={openRegister}>
          Sign Up
        </button>
      </p>
    </div>
  );
}
