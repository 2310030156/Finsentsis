import { BrowserRouter, Routes, Route } from "react-router-dom";

import Home from "./pages/Home/Home";
import Login from "./pages/Auth/Login";
import Requestademo from "./pages/Auth/Requestademo";
import Pricing from "./pages/Pricing/Pricing";
import Team from "./pages/Team/Team";

import ProtectedRoute from "./components/auth/ProtectedRoute";

// Temporary dashboard components (replace later)
const AdminDashboard = () => <div>Admin Dashboard</div>;
const EmployeeDashboard = () => <div>Employee Dashboard</div>;

function App() {
  return (
    <BrowserRouter>
      <Routes>
        {/* Public Routes */}
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Login />} />
        <Route path="/Requestademo" element={<Requestademo />} />
        <Route path="/pricing" element={<Pricing />} />
        <Route path="/team" element={<Team />} />

        {/* Protected Routes */}
        <Route
          path="/admin/dashboard"
          element={
            <ProtectedRoute allowedRoles={["ADMIN"]}>
              <AdminDashboard />
            </ProtectedRoute>
          }
        />

        <Route
          path="/employee/dashboard"
          element={
            <ProtectedRoute allowedRoles={["EMPLOYEE"]}>
              <EmployeeDashboard />
            </ProtectedRoute>
          }
        />

        {/* 404 */}
        <Route path="*" element={<h1>404 Not Found</h1>} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
