import AuthLayout from "../../components/AuthLayout";

export default function SignInPage() {
  return (
    <AuthLayout
      title="Welcome Back"
      description="Sign in to continue your journey with MyApp."
    >
      <h2 className="text-xl font-semibold text-gray-800 mb-4">Sign In</h2>
      <form className="space-y-4">
        <input
          type="email"
          placeholder="Email"
          className="w-full border rounded-lg px-4 py-2 focus:ring-2 focus:ring-indigo-500"
        />
        <input
          type="password"
          placeholder="Password"
          className="w-full border rounded-lg px-4 py-2 focus:ring-2 focus:ring-indigo-500"
        />
        <button
          type="submit"
          className="w-full bg-indigo-600 text-white rounded-lg py-2 hover:bg-indigo-700 transition"
        >
          Sign In
        </button>
      </form>
      <p className="text-sm text-gray-600 mt-4">
        Don’t have an account?{" "}
        <a href="/auth/signup" className="text-indigo-600 hover:underline">
          Sign Up
        </a>
      </p>
    </AuthLayout>
  );
}
