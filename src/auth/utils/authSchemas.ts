
import { z } from "zod";

// -------------------- LOGIN --------------------
export const loginSchema = z.object({
  email: z.string().email("Enter a valid email"),
  password: z.string().min(6, "Password must be at least 6 characters"),
  remember: z.boolean().optional(),
});

// -------------------- SIGN UP --------------------
export const signUpSchema = z.object({
  fullname: z.string().min(2, "Fullname is required"),
  email: z.string().email("Enter a valid email"),
  password: z.string().min(6, "Password must be at least 6 characters"),
});

// -------------------- FORGOT PASSWORD --------------------
export const forgotPasswordSchema = z.object({
  email: z.string().email("Enter a valid email"),
});

// -------------------- VERIFY RESET CODE --------------------
export const verifyCodeSchema = z.object({
  email: z.string().email("Enter a valid email"),
  code: z.string().min(4, "Enter the verification code"), // You can adjust min length depending on backend
});

// -------------------- RESET PASSWORD --------------------
export const resetPasswordSchema = z
  .object({
    email: z.string().email("Enter a valid email"),
    newPassword: z.string().min(6, "Password must be at least 6 characters"),
    confirmPassword: z.string().min(6, "Confirm your new password"),
  })
  .refine((data) => data.newPassword === data.confirmPassword, {
    message: "Passwords do not match",
    path: ["confirmPassword"],
  });

// -------------------- CHANGE PASSWORD (Inside App) --------------------
export const changePasswordSchema = z
  .object({
    currentPassword: z.string().min(6, "Enter current password"),
    newPassword: z.string().min(6, "New password must be at least 6 characters"),
    confirmNewPassword: z.string().min(6, "Confirm your new password"),
  })
  .refine((data) => data.newPassword === data.confirmNewPassword, {
    message: "Passwords do not match",
    path: ["confirmNewPassword"],
  });

// -------------------- TYPES --------------------
export type LoginFormData = z.infer<typeof loginSchema>;
export type SignUpFormData = z.infer<typeof signUpSchema>;
export type ForgotPasswordFormData = z.infer<typeof forgotPasswordSchema>;
export type VerifyCodeFormData = z.infer<typeof verifyCodeSchema>;
export type ResetPasswordFormData = z.infer<typeof resetPasswordSchema>;
export type ChangePasswordFormData = z.infer<typeof changePasswordSchema>;
