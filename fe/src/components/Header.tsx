import { AuthContext, AuthContextType } from "@/contexts/AuthContext";
import React, { useContext } from "react";

type Props = {};

const Header = (props: Props) => {
  const { user, logout } = useContext(AuthContext) as AuthContextType;
  return (
    <div>
      {" "}
      <header className="header">
        <div className="container">
          <div className="header-inner">
            <a href="/" className="header__logo">
              <img src="../src/assets/images/logo.svg" alt="" />
            </a>
            <div className="button-mobile">
              <div className="button-mobile-bar1" />
              <div className="button-mobile-bar2" />
              <div className="button-mobile-bar3" />
            </div>
            <nav className="main-menu">
              <ul className="main-menu__list">
                <li className="main-menu__item">
                  <a href="./index.html" className="main-menu__link">
                    Home
                  </a>
                </li>
                <li className="main-menu__item">
                  <a href="./shop.html" className="main-menu__link">
                    Shop
                  </a>
                </li>
                <li className="main-menu__item">
                  <a href="#" className="main-menu__link">
                    About
                  </a>
                </li>
                <li className="main-menu__item">
                  <a href="#" className="main-menu__link">
                    Contact
                  </a>
                </li>
              </ul>
            </nav>
            <div className="header-items">
              <div className="header-item-user">
                {user ? (
                  <>
                    <span className="fix-name">Welcome, {user?.name}</span>

                    <button className="fw-bolder " onClick={logout}>
                      Logout
                    </button>
                  </>
                ) : (
                  <>
                    <a href="signup">
                      <img src="../src/assets/images/img1.svg" />
                    </a>
                  </>
                )}
              </div>
              <div className="header-item-user">
                <span>
                  <a href="#">
                    <img src="../src/assets/images/img2.svg" />
                  </a>
                </span>
              </div>
              <div className="header-item-user">
                <span>
                  <a href="#">
                    <img src="../src/assets/images/img3.svg" />
                  </a>
                </span>
              </div>
              <div className="header-item-user">
                <a href="./cart.html">
                  <img src="../src/assets/images/img4.svg" />
                </a>
              </div>
            </div>
          </div>
        </div>
      </header>
    </div>
  );
};

export default Header;
