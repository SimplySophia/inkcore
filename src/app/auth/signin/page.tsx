import AuthLayout from "../../components/AuthLayout";

export default function SignInPage() {
  return (
    <AuthLayout
      title="Welcome Back"
      description="Sign in to continue exploring InkCore."
    >
      <h2 className="text-xl font-semibold text-gray-800 mb-4">Sign In</h2>
      <form className="space-y-4">
        <input
          type="email"
          placeholder="Email"
          className="w-full border rounded-lg px-4 py-2 focus:ring-2 focus:ring-purple-500"
        />
        <input
          type="password"
          placeholder="Password"
          className="w-full border rounded-lg px-4 py-2 focus:ring-2 focus:ring-purple-500"
        />

        <div className="flex items-center justify-between text-sm">
          <a
            href="/auth/reset-password"
            className="text-purple-600 hover:underline"
          >
            Forgot Password?
          </a>
        </div>

        <button
          type="submit"
          className="w-full bg-purple-600 text-white rounded-lg py-2 hover:bg-purple-700 transition"
        >
          Sign In
        </button>
      </form>
      <p className="text-sm text-gray-600 mt-4">
        Don’t have an account?{" "}
        <a href="/auth/signup" className="text-purple-600 hover:underline">
          Sign Up
        </a>
      </p>
    </AuthLayout>
  );
}

