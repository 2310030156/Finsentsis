import { Navigate } from "react-router-dom";
import { useAuth } from "../../context/useAuth";
import type { ReactElement } from "react";

interface Props {
  children: ReactElement;
  allowedRoles?: ("ADMIN" | "EMPLOYEE")[];
}

const ProtectedRoute = ({ children, allowedRoles }: Props) => {
  const { user } = useAuth();

  if (!user) {
    return <Navigate to="/login" replace />;
  }

  if (allowedRoles && !allowedRoles.includes(user.role)) {
    return <Navigate to="/" replace />;
  }

  return children;
};

export default ProtectedRoute;
