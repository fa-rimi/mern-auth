import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { toast } from "react-hot-toast";
import { FaCheckCircle } from "react-icons/fa";
import axios from "axios";

export default function SignUp() {
  const navigate = useNavigate();

  const [registerUser, setRegisterUser] = useState({
    firstName: "",
    lastName: "",
    email: "",
    password: "",
    confirm: "",
    error: "",
  });

  const handleChange = (e) => {
    setRegisterUser({
      // Spread data
      ...registerUser,
      // Replace with user input
      [e.target.name]: e.target.value,
      error: "",
    });
  };

  const isPasswordValid =
    registerUser.confirm === registerUser.password &&
    registerUser.confirm.length >= 6;

  const handleSubmit = async (e) => {
    e.preventDefault();

    const { firstName, lastName, email, password } = registerUser;

    try {
      const response = await axios.post("/SignUp", {
        firstName,
        lastName,
        email,
        password,
      });

      if (response.error) {
        toast.error(response.error);
      } else {
        setRegisterUser({
          firstName: "",
          lastName: "",
          email: "",
          password: "",
        });
        toast.success("Registered Successfully!");
        navigate("/SignIn");
      }
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div>
      <form onSubmit={handleSubmit} className="flex flex-col gap-4">
        <span className="flex flex-row gap-3 justify-center">
          {/* input field for user's first name */}
          <input
            type="text"
            name="firstName"
            placeholder="Enter First Name"
            value={registerUser.firstName}
            onChange={handleChange}
            autoComplete="off"
            className="p-2"
            required
          />

          {/* input field for user's last name */}
          <input
            type="text"
            name="lastName"
            placeholder="Enter Last Name"
            value={registerUser.lastName}
            onChange={handleChange}
            autoComplete="off"
            className="p-2"
            required
          />
        </span>
        {/* input field for user's email */}
        <input
          type="email"
          name="email"
          placeholder="Enter Email"
          value={registerUser.email}
          onChange={handleChange}
          autoComplete="off"
          className="p-2"
          required
        />

        {/* input field for user's email */}
        <input
          type="password"
          name="password"
          placeholder="Enter Password"
          value={registerUser.password}
          onChange={handleChange}
          className="p-2"
          required
        />
        <div className="relative flex items-center">
          {/* input field for user's confirmed password */}
          <input
            type="password"
            name="confirm"
            placeholder="Confirm Password"
            value={registerUser.confirm}
            onChange={handleChange}
            className="p-2 w-full"
            required
          />

          {isPasswordValid && (
            <FaCheckCircle
              className="checkmark-icon absolute right-3"
              color="green"
            />
          )}
        </div>
        {/* Submit Button */}
        <button type="submit" disabled={!isPasswordValid}>
          Create Account
        </button>
      </form>
      <p>
        Already have an account? <Link to="/SignIn">Sign In Here</Link>
      </p>
    </div>
  );
}
