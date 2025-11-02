"use client";

import Image from "next/image";
import { ReactNode } from "react";
import { CircleUserRound } from "lucide-react";

interface AuthLayoutProps {
  children: ReactNode;
  title: string;
  subtitle: string;
  showSignupLink?: boolean;
  showLogo?: boolean; 
}

export default function AuthLayout({
  children,
  title,
  subtitle,
  showSignupLink = false,
}: AuthLayoutProps) {
  return (
    <div className="relative flex min-h-screen items-center justify-center bg-background">

      <div className="w-full max-w-4xl mx-auto flex flex-col md:flex-row">
        <div className="w-[328px] h-auto mx-auto bg-primary text-white flex flex-col justify-center items-center gap-2 md:gap-4 md:py-12 py-6 md:px-8 px-6 shadow-lg rounded-xl md:rounded-l-lg md:rounded-r-none">
          <h1 className="text-xl font-bold">Welcome back</h1>
          <p className="text-lg mt-3 md:mt-4">{title}</p>
          <div className=" flex justify-center">
            <Image 
             src="/images/InkCore.png" 
             alt="InkCore" 
             width={100} 
             height={100} 
            />
          </div>
          <p className="text-xs md:text-sm text-gray-300 text-center px-2">
            {`${
              showSignupLink
                ? "Create an account to access the admin dashboard"
                : "Login your account to access the admin dashboard"
            }`}
          </p>

          {showSignupLink ? (
            <>
              <p className="mt-6">Already have an account?</p>
              <button className="mt-2 border border-purple-400 rounded-lg px-6 py-2 flex items-center gap-2">
                Sign In <CircleUserRound className="my-auto h-5 w-5 text-gray-50" />
              </button>
            </>
          ) : (
            <>
              <p className="mt-6">Don’t have an account?</p>
              <button className="mt-2 border border-purple-400 rounded-lg px-6 py-2 flex items-center gap-2">
                Sign Up <CircleUserRound className="my-auto h-5 w-5 text-gray-50" />
              </button>
            </>
          )}
        </div>

        <div className="flex-1 md:w-[423px] md:h-[469px] flex justify-center items-center bg-gray-50 rounded-xl md:rounded-r-lg md:rounded-l-none shadow-lg p-2 md:p-10s">
          <div className="w-full max-w-sm">{children}</div>
        </div>
      </div>
    </div>
  );
}
