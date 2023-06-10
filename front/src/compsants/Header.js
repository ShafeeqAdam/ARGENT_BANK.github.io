import argentBank from "../pages/img/argentBankLogo.png";
import "../pages/styles/main.css";
import { useDispatch } from "react-redux";
import { useSelector } from "react-redux";
import { logout } from "../Redux/authActions";
import { Link } from "react-router-dom";

function Header() {
  const dispatch = useDispatch();

  const isAuthenticated = useSelector((state) => state.auth.isAuthenticated);
  const user = useSelector((state) => state.auth.user);

  const handleLogout = () => {
    dispatch(logout());
  };

  return (
    <div>
      <nav className="main-nav">
        <Link className="main-nav-logo" to="/">
          <img
            className="main-nav-logo-image"
            src={argentBank}
            alt="Argent Bank Logo"
          />
          <h1 className="sr-only">Argent Bank</h1>
        </Link>
        <div>
          {!isAuthenticated && (
            <Link className="main-nav-item" to="/login">
              <i className="fa fa-user-circle"></i>
              Sign In
            </Link>
          )}
          {isAuthenticated && user && user.username && (
            <>
              <Link className="main-nav-item" to="/user">
                <i className="fa fa-user-circle"></i>
                {user.username}
              </Link>
              <a className="main-nav-item" href="/" onClick={handleLogout}>
                <i className="fa fa-sign-out"></i>
                Sign Out
              </a>
            </>
          )}
        </div>
      </nav>
    </div>
  );
}

export default Header;
