import finsentsisLogo from "../../assets/logos/finsentsis.png";
import { Link } from "react-router-dom";

type Props = {
  badge: string;
  title: string;
  subtitle: string;
  children: React.ReactNode;
  bottomText?: string;
  bottomLink?: string;
  bottomLinkText?: string;
};

const AuthLayout = ({
  badge,
  title,
  subtitle,
  children,
  bottomText,
  bottomLink,
  bottomLinkText,
}: Props) => {
  return (
    <div className="auth-bg">
      <div className="auth-container">
<div className="logo">
  <img src={finsentsisLogo} alt="Finsentsis" />
</div>
        <div className="badge">{badge}</div>
        <h1 className="title">{title}</h1>
        <p className="subtitle">{subtitle}</p>

        {children}

        {/* 👇 Dynamic Bottom Link */}
        {bottomText && (
          <p className="bottom-text">
            {bottomText}{" "}
            {bottomLink && (
              <Link to={bottomLink} className="underline hover:text-white">
                {bottomLinkText}
              </Link>
            )}
          </p>
        )}
      </div>
    </div>
  );
};

export default AuthLayout;