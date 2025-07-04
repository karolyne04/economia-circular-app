import { Link, useLocation } from "react-router-dom";
import "./Header.css"; // vamos criar esse arquivo
import logo from "../assets/logo.png";
export default function Header() {
  const location = useLocation();

  return (
    <header className="header-container">
      <div className="header-content">
        <div className="header-logo">
          <img src={logo} alt="Logo" className="logo" />
          {/* Você pode trocar por uma imagem se quiser */}
          <span className="logo-circle">EC</span>
          <span className="header-title">Economia Circular</span>
        </div>
        <nav className="header-nav">
          <Link
            to="/"
            className={`header-link${location.pathname === "/" ? " active" : ""}`}
          >
            Início
          </Link>
          <Link
            to="/mensagens"
            className={`header-link${location.pathname === "/mensagens" ? " active" : ""}`}
          >
            Mensagens
          </Link>
        </nav>
      </div>
    </header>
  );
}