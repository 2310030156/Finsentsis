import { BrowserRouter, Routes, Route } from "react-router-dom";
import { AuthProvider } from "./context/AuthProvider";

import Home from "./pages/Home/Home";
import Login from "./pages/Auth/Login";
import Requestademo from "./pages/Auth/Requestademo";
import Pricing from "./pages/Pricing/Pricing";
import Team from "./pages/Team/Team";
import Contact from "./pages/contact/Contact";
import Features from "./pages/Features/Features";


import ProtectedRoute from "./components/auth/ProtectedRoute";

// Temporary dashboard components
const AdminDashboard = () => <div>Admin Dashboard</div>;
const EmployeeDashboard = () => <div>Employee Dashboard</div>;

function App() {
  return (
    <AuthProvider>
      <BrowserRouter>
        <Routes>
          {/* Public Routes */}
          <Route path="/" element={<Home />} />
          <Route path="/login" element={<Login />} />
          <Route path="/Requestademo" element={<Requestademo />} />
          <Route path="/pricing" element={<Pricing />} />
          <Route path="/team" element={<Team />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/features" element={<Features />} />
          

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
    </AuthProvider>
  );
}

export default App;
