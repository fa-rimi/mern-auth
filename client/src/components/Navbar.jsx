import { Link } from "react-router-dom";

export default function Navbar() {
  return (
    <div>
      <ul>
        <Link to="/Home">
          <li>Home</li>
        </Link>
        <Link to="/SignIn">
          <li>Logout</li>
        </Link>
      </ul>
    </div>
  );
}
