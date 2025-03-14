import { useState, useEffect } from "react";
import { Navbar, Nav, Container } from "react-bootstrap";
import { HashLink } from 'react-router-hash-link';
import { BrowserRouter as Router } from "react-router-dom";
import 'bootstrap/dist/css/bootstrap.min.css';
import { Instagram, Email, Call,LinkedIn } from '@mui/icons-material';


export const NavBar = () => {
  const [activeLink, setActiveLink] = useState('home');
  const [scrolled, setScrolled] = useState(false);
  const [expanded, setExpanded] = useState(false);

  useEffect(() => {
    const onScroll = () => {
      if (window.scrollY > 50) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };

    window.addEventListener("scroll", onScroll);

    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const onUpdateActiveLink = (value) => {
    setActiveLink(value);
    setExpanded(false);
  };

  return (
    <Router>
      <Navbar expand="md" className={scrolled ? "scrolled navbar" : "navbar"} expanded={expanded}>
        <Container>
          <Navbar.Brand href="/">
            {/* Logo placeholder */}
            <div className='header'>
        <div className='header__left'>
        <h1>Nethaji<span>.K</span></h1>
        </div>
		</div>
          
          </Navbar.Brand>
          <Navbar.Toggle 
            aria-controls="basic-navbar-nav" 
            onClick={() => setExpanded(!expanded)}
          >
            <span className="navbar-toggler-icon"></span>
          </Navbar.Toggle>
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="ms-auto">
              {["home", "about", "skills", "projects"].map((section) => (
                <Nav.Link
                  key={section}
                  href={`#${section}`}
                  className={activeLink === section ? 'active navbar-link' : 'navbar-link'}
                  onClick={() => onUpdateActiveLink(section)}
                >
                  {section.charAt(0).toUpperCase() + section.slice(1)}
                </Nav.Link>
              ))}
            </Nav>
            <span className="navbar-text">
              
              <div className="social-icon">
              <a href="mailto:nethaji1283@gmail.com">
  <Email />
</a>

                <a href="tel:+91887045">
                  <Call />
                </a>
                <a href="https://www.instagram.com/noisy_cuts/" target="_blank" rel="noopener noreferrer">
                  <Instagram />
                </a>
                <a href="https://www.linkedin.com/in/nethaji-k-3999a6355">
                <LinkedIn/>
                </a>
              </div>
              <HashLink to="#contact">
                <button className="vvd"><span>Let’s Connect</span></button>
              </HashLink>
            </span>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </Router>
  );
};
