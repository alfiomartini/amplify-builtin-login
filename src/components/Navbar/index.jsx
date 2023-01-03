import { Link } from "react-router-dom";
import "./styles.css";

export const Navbar = ({ user, signOut }) => {
  return (
    <div className="navbar">
      <div>Amplify Builtin-UI</div>
      {user && (
        <Link to="/signOut" className="link" onClick={() => signOut()}>
          Sign Out
        </Link>
      )}
    </div>
  );
};
