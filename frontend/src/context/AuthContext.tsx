import { createContext } from "react";

export type Role = "ADMIN" | "EMPLOYEE";

export interface User {
  id: string;
  email: string;
  role: Role;
}

export interface AuthContextType {
  user: User | null;
  login: (userData: User) => void;
  logout: () => void;
}

// ✅ Only context here
export const AuthContext = createContext<AuthContextType | null>(null);
