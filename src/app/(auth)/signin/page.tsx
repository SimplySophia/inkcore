"use client";

import Image from "next/image";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { loginSchema, LoginFormData } from "@/auth/utils/authSchemas";
import { Lock, Mail } from "lucide-react";
import { login } from "@/services/auth";
import { useState } from "react";
import AuthLayout from "@/auth/components/AuthLayout";
import { toast } from "sonner";

export default function LoginForm() {
  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
  } = useForm<LoginFormData>({
    resolver: zodResolver(loginSchema),
  });

  const [serverError, setServerError] = useState<string | null>(null);

  const onSubmit = async (data: LoginFormData) => {
    try {
      setServerError(null);
      const response = await login(data); 
      console.log("Login success:", response);

      toast.success("Signed in successfully");

      window.location.href = "/dashboard";
    } catch (err: unknown) {
      const message =
        err instanceof Error ? err.message : "Login failed. Try again.";
      setServerError(message);
      toast.error(message);
    }
  };

  return (
    <AuthLayout title="To" subtitle="InkCore">
        <div className="w-full max-w-4xl mx-auto flex flex-col md:flex-row justify-center md:mt-6 ">
          <div className="flex-1 flex justify-center items-center mt-4">
            <div className="w-[426px] h-[469px] gap-6 py-4 px-8">
              <h2 className="text-center text-xl font-bold mb-6 text-[#1A1325]">
                Sign In
              </h2>

          <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
          {/* Email */}
          <div className="flex flex-col space-y-1">
            <div className="relative mt-4">
              <Mail className="absolute inset-y-0 left-3 my-auto h-5 w-5 text-gray-500" />
              <input
                type="email"
                placeholder="Email"
                {...register("email")}
                  className="w-full pl-10 pr-4 py-2 rounded-lg bg-[#E9D5FF] text-[#120C1A] outline-none"
              />
            </div>
              {errors.email && (
                <p className="text-red-500 text-sm">{errors.email.message}</p>
              )}
          </div>

          {/* Password */}
          <div className="flex flex-col space-y-1">
              <div className="relative">
              <Lock className="absolute inset-y-0 left-3 my-auto h-5 w-5 text-gray-500" />
              <input
                type="password"
                placeholder="Password"
                {...register("password")}
                className="w-full pl-10 pr-4 py-2 rounded-lg bg-[#E9D5FF] text-[#120C1A] outline-none"  
              />
            </div>  
              {errors.password && (
                <p className="text-red-500 text-sm">{errors.password.message}</p>
              )}
          </div>

          {/* Submit */}
          <button
            type="submit"
            disabled={isSubmitting}
            className="w-full bg-[#491B91] hover:bg-purple-800 text-white font-semibold py-2 rounded-lg transition disabled:opacity-50"
          >
            {isSubmitting ? "Signing In..." : "Sign In"}
          </button>

          {/* Server Error */}
          {serverError && (
            <p className="text-red-600 text-sm text-center">{serverError}</p>
          )}
          </form>
        </div>
        </div>
      </div>
    </AuthLayout>
  );
}
