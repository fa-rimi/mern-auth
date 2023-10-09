import { useState } from "react";
import { Link } from "react-router-dom";
import { PiEye, PiEyeClosed } from "react-icons/pi";

export default function SignIn() {
  // Initialize variable
  const [userLogin, setUserLogin] = useState({
    name: "",
    password: "",
    error: "",
  });

  const [showPassword, setShowPassword] = useState(false);

  const handleChange = (e) => {
    setUserLogin({
      // Spread
      ...userLogin,
      // Replace
      [e.target.name]: e.target.value,
      error: "",
    });
  };

  const handlePasswordToggle = () => {
    setShowPassword(!showPassword);
  };

  return (
    <div>
      <div>
        <form action="" className="flex flex-col gap-4">
          {/* input field for user's name */}
          <input
            type="text"
            name="name"
            placeholder="Enter Name"
            value={userLogin.name}
            onChange={handleChange}
            autoComplete="off"
            required
          />

          {/* User's password with hide password toggle */}
          <div className="password-input flex items-center relative">
            {/* input field for user's password */}
            <input
              type={showPassword ? "text" : "password"} // If showPassword is true display visible password (text) otherwise hide password (password)
              name="password"
              placeholder="Enter Password"
              value={userLogin.password}
              onChange={handleChange}
              className="w-full"
              required
            />
            {/* Show/Hide password toggle */}
            <span
              onClick={handlePasswordToggle}
              className="absolute right-2 cursor-pointer">
              {/* If showPassword is true render <PiEyeClosed/>: else if false render <PiEye/> */}
              {showPassword ? <PiEyeClosed /> : <PiEye />}
            </span>
          </div>
          <button type="submit">Login</button>
        </form>
      </div>
      <p>
        Don&apos;t have an account? <Link to="/SignUp">Register Here</Link>
      </p>
    </div>
  );
}
