import React, { useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css'; // make sure Bootstrap CSS is imported
import logo from '../assets/PadelCoimbra.svg';

const AppNavbar = () => {
  const [navCollapsed, setNavCollapsed] = useState(true);
  const [dropdownOpen, setDropdownOpen] = useState(false);

  // Toggle dropdown on hover
  const handleMouseEnter = () => setDropdownOpen(true);
  const handleMouseLeave = () => setDropdownOpen(false);

  return (
    <nav className="navbar navbar-expand-lg navbar-light mt-4">
      <div className="container-fluid">
        {/* Logo */}
        <a className="navbar-brand" href="http://localhost:5173">
          <img
            src={logo}
            alt="PadelCoimbra Logo"
            style={{ height: '30px', objectFit: 'contain' }}
          />
        </a>

        {/* Hamburger toggler */}
        <button
          className="navbar-toggler"
          type="button"
          aria-controls="navbarNav"
          aria-expanded={!navCollapsed}
          aria-label="Toggle navigation"
          onClick={() => setNavCollapsed(!navCollapsed)}
        >
          <span className="navbar-toggler-icon"></span>
        </button>

        {/* Collapsible nav items */}
        <div
          className={`collapse navbar-collapse justify-content-end ${navCollapsed ? '' : 'show'}`}
          id="navbarNav"
        >
          <ul className="navbar-nav align-items-center">
            <li className="nav-item">
              <a className="nav-link active" aria-current="page" href="http://localhost:5173">
                Home
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="http://localhost:5173/marcacoes">
                Marcações
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="http://localhost:5173/aulas">
                Aulas
              </a>
            </li>

            {/* User dropdown */}
            <li
              className={`nav-item dropdown ms-3`}
              onMouseEnter={handleMouseEnter}
              onMouseLeave={handleMouseLeave}
              style={{ cursor: 'pointer' }}
            >
              <a
                className="nav-link dropdown-toggle d-flex align-items-center"
                href="#!"
                id="userDropdown"
                role="button"
                data-bs-toggle="dropdown"
                aria-expanded={dropdownOpen}
                onClick={e => e.preventDefault()} // prevent page jump on click
              >
                {/* Account SVG icon */}
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  fill="currentColor"
                  className="bi bi-person-circle"
                  viewBox="0 0 16 16"
                >
                  <path d="M13.468 12.37C12.758 11.226 11.513 10.5 10 10.5s-2.758.726-3.468 1.87A6.987 6.987 0 0 1 2 8a6.987 6.987 0 0 1 4.532-6.37C7.242 3.274 8.487 4 10 4s2.758-.726 3.468-1.87A6.987 6.987 0 0 1 18 8a6.987 6.987 0 0 1-4.532 6.37zM8 5a3 3 0 1 0 0 6 3 3 0 0 0 0-6z"/>
                </svg>
              </a>
              <ul
                className={`dropdown-menu dropdown-menu-end ${dropdownOpen ? 'show' : ''}`}
                aria-labelledby="userDropdown"
              >
                <li>
                  <a
                    className="dropdown-item"
                    href="http://localhost:5173/login"
                    onClick={() => alert('Até já...')}
                  >
                    Sair da conta
                  </a>
                </li>
              </ul>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default AppNavbar;
