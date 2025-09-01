"use client";

import { useRouter } from "next/navigation";
import AuthLayout from "../../components/AuthLayout";

export default function ResetPasswordPage() {
  const router = useRouter();

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // simulate sending reset link
    setTimeout(() => {
      router.push("/auth/reset-confirmation");
    }, 500);
  };

  return (
    <AuthLayout
      title="Reset Password"
      description="Enter your email to receive password reset instructions."
    >
      <h2 className="text-xl font-semibold text-gray-800 mb-4">
        Reset Your Password
      </h2>
      <form onSubmit={handleSubmit} className="space-y-4">
        <input
          type="email"
          placeholder="Enter your email"
          className="w-full border rounded-lg px-4 py-2 focus:ring-2 focus:ring-purple-500"
          required
        />
        <button
          type="submit"
          className="w-full bg-purple-600 text-white rounded-lg py-2 hover:bg-purple-700 transition"
        >
          Send Reset Link
        </button>
      </form>
      <p className="text-sm text-gray-600 mt-4">
        Remembered your password?{" "}
        <a href="/auth/signin" className="text-purple-600 hover:underline">
          Back to Sign In
        </a>
      </p>
    </AuthLayout>
  );
}
