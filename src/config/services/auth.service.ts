import { notification } from "antd";
import authApi, { endpoints } from "../axios";

export interface LoginData {
  username: string;
  password: string;
}

export interface LoginResponse {
  access: string;
  refresh: string;
}

export const AuthService = {
  login: async (data: LoginData): Promise<LoginResponse> => {
    try {
      const response = await authApi.post<LoginResponse>(endpoints.auth.signIn, data);
      localStorage.setItem("accessToken", response.data.access);
      localStorage.setItem("refreshToken", response.data.refresh);
      return response.data;
    } catch (error: unknown) {
      console.error("Login failed", error);
      let errorMessage = "An unknown error occurred";
      if (error instanceof Error) {
        errorMessage = error.message;
      }

      if (typeof error === "object" && error !== null && "response" in error) {
        const axiosError = error as { response?: { data?: { message?: string } } };
        errorMessage = axiosError.response?.data?.message || errorMessage;
      }

      notification.error({ message: "Login Failed", description: errorMessage });
      throw new Error(errorMessage);
    }
  },

  refreshToken: async (): Promise<string | null> => {
    const refreshToken = localStorage.getItem("refreshToken");
    if (!refreshToken) {
      return null;
    }
    try {
      const response = await authApi.post<{ access: string }>(endpoints.auth.refresh, { refresh: refreshToken });
      const newAccessToken = response.data.access;
      localStorage.setItem("accessToken", newAccessToken);
      return newAccessToken;
    } catch (error) {
      console.error("Failed to refresh token", error);
      AuthService.logout();
      return null;
    }
  },

  logout: (): void => {
    localStorage.removeItem("role");
    localStorage.removeItem("refreshToken");
    localStorage.removeItem("accessToken");
  },

  isAuthenticated: (): boolean => {
    return !!localStorage.getItem("accessToken");
  },
};

export default AuthService;
