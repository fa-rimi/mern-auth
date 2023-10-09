import { useState } from "react";
import { Link } from "react-router-dom";

export default function SignUp() {
  const [registerUser, setRegisterUser] = useState({
    name: "",
    email: "",
    password: "",
    confirm: "",
    error: "",
  });

  const handleChange = (e) => {
    setRegisterUser({
      ...registerUser,
      [e.target.name]: e.target.value,
      error: "",
    });
  };

  return (
    <div>
      <form action="" className="flex flex-col gap-4">
        {/* input field for user's name */}
        <input
          type="text"
          name="name"
          placeholder="Enter Name"
          value={registerUser.name}
          onChange={handleChange}
          autoComplete="off"
          required
        />

        {/* input field for user's email */}
        <input
          type="email"
          name="email"
          placeholder="Enter Email"
          value={registerUser.email}
          onChange={handleChange}
          autoComplete="off"
          required
        />

        {/* input field for user's email */}
        <input
          type="password"
          name="password"
          placeholder="Enter Password"
          value={registerUser.password}
          onChange={handleChange}
          required
        />

        {/* input field for user's confirmed password */}
        <input
          type="password"
          name="confirm"
          placeholder="Confirm Password"
          value={registerUser.confirm}
          onChange={handleChange}
          required
        />

        {/* Submit Button */}
        <button type="submit">Register Now</button>
      </form>
      <p>
        Already have an account? <Link to="/SignIn">Sign In Here</Link>
      </p>
    </div>
  );
}
