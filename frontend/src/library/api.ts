import axios from "axios";

const api = axios.create({
  baseURL: "http://localhost:5000/api",
  headers: {
    "Content-Type": "application/json",
  },
});

/*
Attach token automatically
*/
api.interceptors.request.use((config) => {
  const token = localStorage.getItem("token");

  if (token) {
    config.headers.Authorization = `Bearer ${token}`;
  }

  return config;
});

/*
LOGIN API
*/
export const loginAPI = async (email: string) => {
  const res = await api.post("/auth/login", { email });
  return res.data;
};

/*
VERIFY OTP API
*/
export const verifyOtpAPI = async (email: string, otp: string) => {
  const res = await api.post("/auth/verify-otp", { email, otp });
  return res.data;
};

/*
REQUEST DEMO
*/
export const requestDemoAPI = async (data: {
  company: string;
  email: string;
  country: string;
}) => {
  const res = await api.post("/demo/request", data);
  return res.data;
};

export default api;