import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import SearchMovie from "./pages/SearchMovie";
import DetailMovie from "./pages/DetailMovie";
import NavbarComponents from "./components/Navbar";
import Login from "./pages/Login";
import Protected from "./components/Protected";
import NoAccesToken from "./components/NoAccesToken";
import { GoogleOAuthProvider } from "@react-oauth/google";
import store from "./redux/store";
import { Provider } from "react-redux";

function App() {
  return (
    <Provider store={store}>
      <GoogleOAuthProvider
        clientId={import.meta.env.VITE_GOOGLE_OAUTH_CLIENT_ID}
      >
        <BrowserRouter>
          <NavbarComponents />
          <Routes>
            <Route
              path="/"
              element={
                <Protected>
                  <Home />
                </Protected>
              }
            />
            <Route
              path="/search"
              element={
                <Protected>
                  <SearchMovie />
                </Protected>
              }
            />
            <Route
              path="/detail/:movieId"
              element={
                <Protected>
                  <DetailMovie />
                </Protected>
              }
            />
            <Route
              path="/login"
              element={
                <NoAccesToken>
                  <Login />
                </NoAccesToken>
              }
            />
          </Routes>
        </BrowserRouter>
      </GoogleOAuthProvider>
    </Provider>
  );
}

export default App;
