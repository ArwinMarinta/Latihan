import { Navbar, Container, Nav } from "react-bootstrap";
import { Link, useNavigate } from "react-router-dom";
import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getMe, logout } from "../redux/action/authAction";

const NavbarComponents = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const [query, setQuery] = useState("");

  const { user, token } = useSelector((state) => state.auth);

  const onLogout = () => {
    dispatch(logout());
    navigate("/login");
  };

  const handleSearch = (event) => {
    event.preventDefault();
    navigate(`/search?page=1&query=${query}`);
  };

  useEffect(() => {
    if (token) {
      dispatch(getMe(navigate, null, "/login"));
    }
  }, [dispatch, navigate, token]);

  return (
    <Navbar expand="lg" className="bg-body-tertiary w-full">
      <Container>
        <Navbar.Brand href="#home">React-Bootstrap</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
            {user && (
              <>
                <Nav.Link as={Link} to="/">
                  Home
                </Nav.Link>
                <Nav.Link as={Link} to="/search-movie">
                  Search
                </Nav.Link>
                <form onSubmit={handleSearch}>
                  <input
                    type="text"
                    placeholder="Search"
                    className="mr-sm-2"
                    value={query}
                    onChange={(e) => setQuery(e.target.value)}
                  />
                </form>
              </>
            )}
          </Nav>
          <Nav className="ms-auto">
            {user ? (
              <>
                <Nav.Link as={Link} to="/myprofile">
                  {user?.name}
                </Nav.Link>
                <Nav.Link as={Link} onClick={onLogout}>
                  logout
                </Nav.Link>
              </>
            ) : (
              <Nav.Link as={Link} to="/login">
                Login
              </Nav.Link>
            )}
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default NavbarComponents;
