import { useState } from "react";
import { useNavigate } from "react-router-dom";
import AuthLayout from "../../components/auth/AuthLayout";
import AuthTabs from "../../components/auth/AuthTabs";
import AuthForm from "../../components/auth/AuthForm";

const Signup = () => {
  const navigate = useNavigate();

  const [company, setCompany] = useState("");
  const [email, setEmail] = useState("");
  const [country, setCountry] = useState("");
  const [accepted, setAccepted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    if (!accepted) {
      alert("Please accept Terms & Conditions");
      return;
    }

    console.log({
      company,
      email,
      country,
    });

    navigate("/login");
  };

  return (
    <AuthLayout
      badge="Create your Finsentsis account"
      title="Sign up account"
      subtitle="Enter your data to create your account"
      bottomText="Already have account?"
      bottomLink="/login"
      bottomLinkText="Log In"
    >
      <AuthTabs />

      <div className="divider">
        <span /> OR <span />
      </div>

      <AuthForm>
        <form className="form" onSubmit={handleSubmit}>
          <input
            className="auth-input"
            placeholder="Enter company name"
            value={company}
            onChange={(e) => setCompany(e.target.value)}
            required
          />

          <input
            className="auth-input"
            placeholder="Enter company mail id"
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />

          {/* Employees Size dropdown */}
          <select className="auth-input">
            <option value="">Employees Size</option>
            <option>1-10</option>
            <option>11-50</option>
            <option>51-200</option>
            <option>200+</option>
          </select>

          {/* Country dropdown with main countries */}
          <select
            className="auth-input"
            value={country}
            onChange={(e) => setCountry(e.target.value)}
          >
            <option value="">Select your country</option>
            <option value="India">India</option>
            <option value="United States">United States</option>
            <option value="Canada">Canada</option>
            <option value="United Kingdom">United Kingdom</option>
            <option value="China">China</option>
            <option value="Australia">Australia</option>
            <option value="Germany">Germany</option>
            <option value="Singapore">Singapore</option>
            <option value="UAE">United Arab Emirates</option>
          </select>

          {/* Terms Checkbox */}
          <div
            style={{
              display: "flex",
              alignItems: "center",
              gap: "8px",
              marginTop: "10px",
            }}
          >
            <input
              type="checkbox"
              checked={accepted}
              onChange={(e) => setAccepted(e.target.checked)}
            />
            <label style={{ fontSize: "13px", color: "#9ca3af" }}>
              I agree to Terms & Conditions
            </label>
          </div>

          <button type="submit" className="btn-primary full">
            Request a Demo
          </button>
        </form>
      </AuthForm>
    </AuthLayout>
  );
};

export default Signup;