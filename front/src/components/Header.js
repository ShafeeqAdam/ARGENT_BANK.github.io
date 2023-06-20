import argentBank from "../pages/img/argentBankLogo.png";
import "../pages/styles/main.css";
import { useDispatch } from "react-redux";
import { useSelector } from "react-redux";
import { useEffect } from "react";
import { logout } from "../Redux/authActions";
import { Link } from "react-router-dom";
import { fetchUserProfile } from "../Redux/fetchProfile";
import { selectIsAuthenticated } from "../Redux/selector";
import { selectUser } from "../Redux/selector";
import { useNavigate } from "react-router-dom";

function Header() {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const isAuthenticated = useSelector(selectIsAuthenticated);
  const user = useSelector(selectUser);

  useEffect(() => {
    dispatch(fetchUserProfile());
  }, [dispatch]);

  const handleLogout = () => {
    dispatch(logout());
    navigate("/");
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

              <button className="main-nav-item" onClick={handleLogout}>
                <i className="fa fa-sign-out"></i>
                Sign Out
              </button>
            </>
          )}
        </div>
      </nav>
    </div>
  );
}

export default Header;
