import React from "react";

type Props = {
  children: React.ReactNode;
};

const AuthForm: React.FC<Props> = ({ children }) => {
  return <div className="form">{children}</div>;
};

export default AuthForm;