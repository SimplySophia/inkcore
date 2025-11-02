"use client";

import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { signUpSchema, SignUpFormData } from "@/auth/utils/authSchemas";
import { useState } from "react";
import AuthLayout from "@/auth/components/AuthLayout";
import { signup } from "@/services/auth";
import { toast } from "sonner";
import { Lock, Mail, User } from "lucide-react";

export default function SignupForm() {
  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
  } = useForm<SignUpFormData>({
    resolver: zodResolver(signUpSchema),
  });

  const [serverError, setServerError] = useState<string | null>(null);

  const onSubmit = async (data: SignUpFormData) => {
    try {
      setServerError(null);

      const response = await signup(data); 
      console.log("Signup success:", response);

      toast.success("Account created successfully");

      window.location.href = "/signin";
    } catch (err: unknown) {
      const message =
        err instanceof Error ? err.message : "Signup failed. Try again.";
      setServerError(message);
      toast.error(message);
    }
  };

  return (
    <AuthLayout title="Welcome!" subtitle="Let’s Get Started" showLogo={false}>
      <div className="">
      </div>
      <div className="relative w-full max-w-4xl mx-auto flex flex-col md:flex-row justify-center">
        <div className="flex-1 flex justify-center items-center">
          <div className="w-[426px] h-[469px] gap-6 py-4 px-8">
            <h2 className="text-center text-xl font-bold mb-6 text-[#1A1325]">
              Sign Up
            </h2>

            <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
              {/* Name */}
              <div className="flex flex-col space-y-1">
                  <div className="relative">
                    <User className="absolute inset-y-0 left-3 my-auto h-5 w-5 text-gray-500" />
                    <input
                      type="text"
                      placeholder="Name"
                      {...register("name")}
                       className="w-full pl-10 pr-4 py-2 rounded-lg bg-[#E9D5FF] text-[#120C1A] outline-none"    
                    />
                  </div>
                  {errors.name && (
                    <p className="text-red-500 text-sm">{errors.name.message}</p>
                  )}
              </div>

              {/* Email */}
              <div className="flex flex-col space-y-1">
                <div className="relative">
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
                  <Lock className="absolute left-3 top-1/2 -translate-y-1/2 h-5 w-5 text-gray-500" />
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
                {isSubmitting ? "Creating Account..." : "Sign Up"}
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
