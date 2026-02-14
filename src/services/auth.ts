import { LoginFormData, SignUpFormData } from "@/auth/utils/authSchemas";
import api from "@/lib/axios";
import { AxiosError } from "axios";

export interface User {
  _id: string | number;
  fullname?: string;
  email: string;
  password?: string;
}

export interface AuthResponse {
  user: User;
  token?: string;
}

/* ------------------- LOGIN ------------------- */
export const login = async (data: LoginFormData): Promise<AuthResponse> => {
  try {
    const res = await api.post<AuthResponse>("/auth/login", data);

    // Store token
    if (res.data.token) {
      localStorage.setItem("token", res.data.token);
    }

    return res.data;
  } catch (err) {
    const error = err as AxiosError<{ message?: string }>;
    throw new Error(
      error.response?.data?.message || "Login failed. Please try again."
    );
  }
};

/* ------------------- SIGN UP ------------------- */
export const signup = async (data: SignUpFormData): Promise<AuthResponse> => {
  try {
    const res = await api.post<AuthResponse>("/auth/register", data);
    return res.data;
  } catch (err) {
    const error = err as AxiosError<{ message?: string }>;
    throw new Error(
      error.response?.data?.message || "Signup failed. Please try again."
    );
  }
};

/* ------------------- FORGOT PASSWORD ------------------- */
export const forgotPassword = async (email: string): Promise<string> => {
  try {
    const res = await api.post<{ message: string }>("/auth/forgot-password", { email });
    return res.data.message;
  } catch (err) {
    const error = err as AxiosError<{ message?: string }>;
    throw new Error(
      error.response?.data?.message || "Failed to send reset email."
    );
  }
};

/* ------------------- VERIFY FORGOT PASSWORD (OTP or CODE) ------------------- */
export const verifyResetCode = async (email: string, code: string): Promise<string> => {
  try {
    const res = await api.post<{ message: string }>("/auth/verify-reset-code", {
      email,
      code,
    });
    return res.data.message;
  } catch (err) {
    const error = err as AxiosError<{ message?: string }>;
    throw new Error(
      error.response?.data?.message || "Invalid or expired verification code."
    );
  }
};

/* ------------------- RESET PASSWORD ------------------- */
export const resetPassword = async (
  email: string,
  newPassword: string
): Promise<string> => {
  try {
    const res = await api.post<{ message: string }>("/auth/reset-password", {
      email,
      password: newPassword,
    });
    return res.data.message;
  } catch (err) {
    const error = err as AxiosError<{ message?: string }>;
    throw new Error(
      error.response?.data?.message || "Failed to reset password."
    );
  }
};

/* ------------------- LOGOUT ------------------- */
export const logout = (): void => {
  localStorage.removeItem("token");
  window.location.href = "/signin";
};

