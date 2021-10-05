import { Link } from "react-router-dom";

const Navbar = () => (
  <nav>
    <ul>
      <li>
        <Link to="/">
          Code
        </Link>
      </li>
      <li>
        <Link to="/tutorials">
          Tutorials
        </Link>
      </li>
      <li>
        <Link to="/random">
          Random
        </Link>
      </li>
    </ul>
  </nav>
)

export default Navbar