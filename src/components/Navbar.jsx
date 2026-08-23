import { useState } from "react";
import { ArrowUpRight, Menu, X } from "lucide-react";
import { navItems } from "../data/content";

function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <nav className="navbar">
      <a href="#top" className="logo">
        <span className="logo-mark" aria-hidden="true">N</span>
        <span className="logo-text">
          <span className="logo-host">DJCSI PRESENTS</span>
          <span className="logo-event">NEXUS</span>
        </span>
      </a>

      <div id="primary-navigation" className={`nav-links ${menuOpen ? "open" : ""}`}>
        {navItems.map((item) => (
          <a
            key={item}
            href={`#${item.toLowerCase()}`}
            onClick={() => setMenuOpen(false)}
          >
            {item}
          </a>
        ))}

        <a className="nav-register" href="#register">
          Register <ArrowUpRight size={15} aria-hidden="true" />
        </a>
      </div>

      <button
        className="menu-button"
        onClick={() => setMenuOpen((open) => !open)}
        aria-label={menuOpen ? "Close menu" : "Open menu"}
        aria-expanded={menuOpen}
        aria-controls="primary-navigation"
      >
        {menuOpen ? <X aria-hidden="true" /> : <Menu aria-hidden="true" />}
      </button>
    </nav>
  );
}

export default Navbar;