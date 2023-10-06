import { Routes, Route } from "react-router-dom";
import AuthPage from "./pages/user_authorization/AuthPage";
import SignIn from "./pages/user_authorization/SignIn";
import SignUp from "./pages/user_authorization/SignUp";
import HomePage from "./pages/user_home/HomePage";

export default function App() {
  return (
    <div>
      <Routes>
        <Route path="/" element={<AuthPage />} />
        <Route path="/SignIn" element={<SignIn />} />
        <Route path="/SignUp" element={<SignUp />} />
        <Route path="/Home" element={<HomePage />} />
      </Routes>
    </div>
  );
}
