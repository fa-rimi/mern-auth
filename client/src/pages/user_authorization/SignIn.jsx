import { Link } from "react-router-dom";

export default function SignIn() {

  return (
    <div>
      <div>
        <form action="" className="flex flex-col gap-4">
          <input type="text" name="name" />
          <input type="password" name="password" />
          <button type="submit">Login</button>
        </form>
      </div>
      <p>
        Don&apos;t have an account? <Link to="/SignUp">Register Here</Link>
      </p>
    </div>
  );
}
