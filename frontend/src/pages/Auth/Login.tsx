feature/auth/farisa-auth
import { useState, useRef, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import AuthLayout from "../../components/auth/AuthLayout";
import AuthTabs from "../../components/auth/AuthTabs";
import AuthForm from "../../components/auth/AuthForm";
import { useAuth } from "../../context/AuthContext";

const Login = () => {
  const [email, setEmail] = useState("");
  const [step, setStep] = useState<"login" | "otp">("login");

  // 🔥 Timer states
  const [timer, setTimer] = useState(60);
  const [expired, setExpired] = useState(false);

  const inputRefs = useRef<(HTMLInputElement | null)[]>([]);
  const navigate = useNavigate();
  const { login } = useAuth();

  // Focus first OTP box
  useEffect(() => {
    if (step === "otp") {
      inputRefs.current[0]?.focus();
    }
  }, [step]);

  // 🔥 Timer logic
  useEffect(() => {
    if (step !== "otp") return;

    if (timer === 0) {
      setExpired(true);
      return;
    }

    const interval = setInterval(() => {
      setTimer((prev) => prev - 1);
    }, 1000);

    return () => clearInterval(interval);
  }, [step, timer]);

  const handleContinue = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (!email) return;

    setStep("otp");
    setTimer(60);     // reset timer
    setExpired(false);
  };

  const handleVerify = () => {
    if (expired) {
      alert("OTP Expired");
      return;
    }

    const otp = inputRefs.current
      .map((input) => input?.value ?? "")
      .join("");

    if (otp.length !== 6) {
      alert("Enter 6 digit OTP");
      return;
    }

    // Fake role logic
    const fakeUser =
      email.includes("admin")
        ? { id: "1", email, role: "ADMIN" as const }
        : { id: "2", email, role: "EMPLOYEE" as const };

    login(fakeUser);

    if (fakeUser.role === "ADMIN") {
      navigate("/admin/dashboard");
    } else {
      navigate("/employee/dashboard");
    }
  };

  return (
    <AuthLayout
      badge="Welcome back!"
      title="Login your account"
      subtitle={
        step === "login"
          ? "Enter your data to continue"
          : "Enter OTP received through mail"
      }
      bottomText={step === "login" ? "Don't have account?" : undefined}
      bottomLink={step === "login" ? "/" : undefined}
      bottomLinkText={step === "login" ? "Sign Up" : undefined}
    >
      {/* STEP 1 */}
      {step === "login" && (
        <>
          <AuthTabs />

          <div className="divider">
            <span /> OR <span />
          </div>

          <AuthForm>
            <form className="form" onSubmit={handleContinue}>
              <input
                className="auth-input"
                placeholder="Enter company mail id"
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
              />

              <button type="submit" className="btn-primary full">
                Continue
              </button>
            </form>
          </AuthForm>
        </>
      )}

      {/* STEP 2 OTP */}
      {step === "otp" && (
        <>
          <div className="otp-row">
            {[...Array(6)].map((_, index) => (
              <input
                key={index}
                type="text"
                maxLength={1}
                className="otp-box"
                ref={(el) => {
                  inputRefs.current[index] = el;
                }}
                onChange={(e) => {
                  const value = e.target.value;
                  if (!/^[0-9]?$/.test(value)) return;

                  if (value && index < 5) {
                    inputRefs.current[index + 1]?.focus();
                  }
                }}
                onKeyDown={(e) => {
                  if (
                    e.key === "Backspace" &&
                    !e.currentTarget.value &&
                    index > 0
                  ) {
                    inputRefs.current[index - 1]?.focus();
                  }
                }}
              />
            ))}
          </div>

          {/* 🔥 TIMER DISPLAY */}
          <div
            style={{
              marginBottom: "15px",
              fontSize: "13px",
              color: expired ? "red" : "#9ca3af",
            }}
          >
            {expired
              ? "OTP Expired"
              : `Time remaining: ${timer}s`}
          </div>

          <div className="btn-row">
            <button
              type="button"
              className="btn-secondary"
              onClick={() => setStep("login")}
            >
              Back to Login
            </button>

            <button
              type="button"
              className="btn-primary"
              onClick={handleVerify}
              disabled={expired}
            >
              Continue
            </button>
          </div>
        </>
      )}
    </AuthLayout>
  );
};

export default Login;