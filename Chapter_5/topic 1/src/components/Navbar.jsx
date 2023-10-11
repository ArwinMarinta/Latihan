import { Navbar, Container, Nav } from "react-bootstrap";
import { Link } from "react-router-dom";
import { useEffect, useState } from "react";
import axios from "axios";

const NavbarComponents = () => {
  const [user, setUser] = useState(null);

  const logout = (event) => {
    event.preventDefault();

    localStorage.removeItem("token");

    window.location.replace("/");
  };

  useEffect(() => {
    const getMe = async () => {
      try {
        const token = localStorage.getItem("token");
        if (!token) return;

        const response = await axios.get(
          `${import.meta.env.VITE_API_URL}/api/v1/auth/me`,
          {
            headers: {
              Authorization: `Bearer ${token}`,
            },
          }
        );

        const { data } = response.data;
        setUser(data);
      } catch (error) {
        if (axios.isAxiosError(error)) {
          alert(error?.response?.data?.message);
          return;
        }
        alert(error?.message);
      }
    };
    getMe();
  }, []);

  return (
    <Navbar expand="lg" className="bg-body-tertiary w-full">
      <Container>
        <Navbar.Brand href="#home">React-Bootstrap</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
            <Nav.Link as={Link} to="/">
              Home
            </Nav.Link>
            <Nav.Link as={Link} to="/search-movie">
              Search
            </Nav.Link>
          </Nav>
          <Nav className="ms-auto">
            {user ? (
              <>
                <Nav.Link as={Link} to="/myprofile">
                  {user?.name}
                </Nav.Link>
                <Nav.Link as={Link} onClick={logout}>
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
