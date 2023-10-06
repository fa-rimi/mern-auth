import { Link } from "react-router-dom";

export default function SignUp() {
  return (
    <div>
      <form action="" className="flex flex-col gap-4">
        {/* input field for user's name */}
        <input type="text" name="name" placeholder="Enter Name"/>

        {/* input field for user's email */}
        <input type="email" name="email" placeholder="Enter Email" />

        {/* input field for user's email */}
        <input type="password" name="password" placeholder="Enter Password"/>

        {/* input field for user's confirmed password */}
        <input type="password" name="confirm" placeholder="Confirm Password"/>

        {/* Submit Button */}
        <button type="submit">Register Now</button>
      </form>
      <p>
        Already have an account? <Link to="/SignIn">Sign In Here</Link>
      </p>
    </div>
  );
}
