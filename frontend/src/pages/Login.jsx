export default function Login({ openRegister, onClose }) {
  return (
    <div className="bg-white p-8 rounded-2xl shadow-lg w-full max-w-md relative">
      
      {/* Close Button */}
      <button
        onClick={onClose}
        className="absolute top-4 right-4 text-gray-500 hover:text-gray-800 text-2xl font-bold"
        aria-label="Close login popup"
      >
        &times;
      </button>

      <h1 className="text-3xl font-bold text-center mb-6 text-blue-600">
        Login
      </h1>

      <input
        type="email"
        placeholder="Email"
        className="w-full p-3 border rounded-xl mb-4 focus:outline-blue-500"
      />
      <input
        type="password"
        placeholder="Password"
        className="w-full p-3 border rounded-xl mb-4 focus:outline-blue-500"
      />

      <button className="w-full bg-blue-600 text-white py-3 rounded-xl font-semibold hover:bg-blue-700">
        Login
      </button>

      <p className="mt-4 text-center">
        Don’t have an account?
        <button
          className="text-blue-600 font-semibold ml-1 hover:underline"
          onClick={openRegister}
        >
          Sign Up
        </button>
      </p>
    </div>
  );
}
