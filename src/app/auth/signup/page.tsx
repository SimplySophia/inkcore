import AuthLayout from "../../components/AuthLayout";

export default function SignUpPage() {
  return (
    <AuthLayout
      title="Join InkCore"
      description="Create an account to explore amazing features and insights."
    >
      <h2 className="text-xl font-semibold text-gray-800 mb-4">Sign Up</h2>
      <form className="space-y-4">
        <input
          type="text"
          placeholder="Full Name"
          className="w-full border rounded-lg px-4 py-2 focus:ring-2 focus:ring-purple-500"
        />
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
        <input
          type="password"
          placeholder="Confirm Password"
          className="w-full border rounded-lg px-4 py-2 focus:ring-2 focus:ring-purple-500"
        />
        <button
          type="submit"
          className="w-full bg-purple-600 text-white rounded-lg py-2 hover:bg-purple-700 transition"
        >
          Sign Up
        </button>
      </form>

      <p className="text-sm text-gray-600 mt-4">
        Already have an account?{" "}
        <a href="/auth/signin" className="text-purple-600 hover:underline">
          Sign In
        </a>
      </p>
    </AuthLayout>
  );
}
