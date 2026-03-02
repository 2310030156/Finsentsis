import googleIcon from "../../assets/icons/google.png";
import microsoftIcon from "../../assets/icons/microsoft.png";
import appleIcon from "../../assets/icons/apple.png";

const AuthTabs = () => {
  return (
    <div className="social-row">
      <button className="social-btn">
        <img src={googleIcon} alt="Google" />
      </button>

      <button className="social-btn">
        <img src={microsoftIcon} alt="Microsoft" />
      </button>

      <button className="social-btn">
        <img src={appleIcon} alt="Apple" />
      </button>
    </div>
  );
};

export default AuthTabs;