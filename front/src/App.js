import {
  BrowserRouter as Router,
  Routes,
  Route,
  // Navigate,
} from "react-router-dom";
import { Provider } from "react-redux";
import store from "../src/Redux/store";
import HomePage from "./pages/HomePage";
import LoginPage from "./pages/LoginPage";
import UserPage from "./pages/UserPage";
import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { loginSuccess } from "./Redux/authReducers";

import Header from "./compsants/Header";
import Footer from "./compsants/Footer";

function Layout({ children }) {
  // children c'est les routes
  return (
    <div>
      <Header />
      {children}
      <Footer />
    </div>
  );
}

function AppInitializer() {
  const dispatch = useDispatch();

  useEffect(() => {
    const storedUser = localStorage.getItem("user");
    if (storedUser) {
      const user = JSON.parse(storedUser);
      dispatch(loginSuccess(user));
    }
  }, [dispatch]);

  return (
    <Router>
      <Layout>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/login" element={<LoginPage />} />
          <Route path="/user" element={<UserPage />} />
        </Routes>
      </Layout>
    </Router>
  );
}

function App() {
  return (
    <Provider store={store}>
      <AppInitializer />
    </Provider>
  );
}

export default App;
