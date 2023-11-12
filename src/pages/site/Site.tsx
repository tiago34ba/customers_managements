import React, { useEffect, useState } from "react";
import { BiMenuAltRight } from "react-icons/bi";
import { AiOutlineClose } from "react-icons/ai";
import { Link, useNavigate } from "react-router-dom";
import "./site.scss";
import useIntl from "react-intl/src/components/useIntl";
import { Language, getLanguage, setLanguage } from "../../helpers/useLanguage";
function Site() {
  const { formatMessage } = useIntl();
  const language = getLanguage();

  const [currentLanguage, setCurrentLanguage] = useState<Language>(language);

  useEffect(() => {
    setLanguage(currentLanguage);
  }, [currentLanguage]);

  function handleChangeLanguage(lang: string) {
    setCurrentLanguage(lang as Language);
    window.location.reload();
  }
  const navigate = useNavigate();
  const [menuOpen, setMenuOpen] = useState(false);
  const [size, setSize] = useState({
    width: 0,
    height: 0,
  });
  useEffect(() => {
    const handleResize = () => {
      setSize({
        width: window.innerWidth,
        height: window.innerHeight,
      });
    };
    window.addEventListener("resize", handleResize);

    return () => window.removeEventListener("resize", handleResize);
  }, []);

  useEffect(() => {
    if (size.width > 768 && menuOpen) {
      setMenuOpen(false);
    }
  }, [size.width, menuOpen]);

  const menuToggleHandler = () => {
    setMenuOpen((p) => !p);
  };

  return (
    <header className="header">
      <div className="header__content">
        <Link to="/" className="header__content__logo">
          Navbar
        </Link>
        <nav
          className={`${"header__content__nav"} 
          ${menuOpen && size.width < 768 ? `${"isMenu"}` : ""} 
          }`}
        >
          <ul>
            <li>
              <Link to="/">Home</Link>
            </li>
            <li>
              <Link to="/About">About</Link>
            </li>
            <li>
              <Link to="/Services">Services</Link>
            </li>
            <li>
              <Link to="/price">Price</Link>
            </li>
            <li>
              <Link to="/contact">contact</Link>
            </li>

            <Link to="/register">
              <button className="btn">Register</button>
            </Link>
            <Link to="/login">
              <button className="btn btn__login">Login</button>
            </Link>
            <div className="App">
              <select
                value={currentLanguage}
                onChange={(event) => handleChangeLanguage(event.target.value)}
              >
                <option value="pt-BR">PT-BR</option>
                <option value="en">EN</option>
                <option value="es">ES</option>
              </select>
            </div>
          </ul>
        </nav>
        <div className="header__content__toggle">
          {!menuOpen ? (
            <BiMenuAltRight onClick={menuToggleHandler} />
          ) : (
            <AiOutlineClose onClick={menuToggleHandler} />
          )}
        </div>

      </div>
    </header>
  );
}

export default Site;