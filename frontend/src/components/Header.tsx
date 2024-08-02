import {
  IconSearch,
  IconUser,
  IconWishlist,
  Iconcart,
  Logo,
} from "@/components/Icons";
import { AuthContext, AuthContextType } from "@/contexts/AuthContext";
import React, { useContext, useState } from "react";
import { Link, NavLink } from "react-router-dom";

const Header: React.FC = () => {
  const { user, logout } = useContext(AuthContext) as AuthContextType;
  ///
  const [showTable, setShowTable] = useState(false);

  const handleToggleTable = () => {
    setShowTable((prevShowTable) => !prevShowTable);
  };

  ///
  return (
    <>
      {" "}
      <header className="header">
        <div className="container">
          <div className="header-inner">
            <Link to="/home" className="header__logo">
              <img src={Logo} alt="#" />
            </Link>
            <div className="button-mobile">
              <div className="button-mobile-bar1" />
              <div className="button-mobile-bar2" />
              <div className="button-mobile-bar3" />
            </div>
            <nav className="main-menu">
              <ul className="main-menu__list">
                <li className="main-menu__item">
                  <NavLink to="/" className="main-menu_link ">
                    Home
                  </NavLink>
                </li>
                <li className="main-menu__item">
                  <NavLink to="/shop" className="main-menu_link">
                    Shop
                  </NavLink>
                </li>
                <li className="main-menu__item">
                  <NavLink to="/about" className="main-menu_link">
                    About
                  </NavLink>
                </li>
                <li className="main-menu__item">
                  <NavLink to="/contact" className="main-menu_link">
                    Contact
                  </NavLink>
                </li>
                {user?.role === "admin" && (
                  <li className="main-menu__item">
                    <Link className="main-menu_link" to="/admin">
                      Admin
                    </Link>
                  </li>
                )}
              </ul>
            </nav>
            <div className="header-items">
              <div className="header-item-user">
                {user ? (
                  <div>
                    <button onClick={handleToggleTable}>
                      <img src={user?.avatar} alt="" width="50px" />
                    </button>
                    {showTable! && (
                      <table className="fixAvatar">
                        <ul className="main-menu__list">
                          <li className="main-menu__item">
                            <Link
                              className="fixLink"
                              to={`/usersEdit/${user?._id}`}
                            >
                              Sửa thông tin
                            </Link>
                          </li>

                          <li className="main-menu__item">
                            <button className="fixLink" onClick={logout}>
                              Logout
                              {!showTable}
                            </button>
                          </li>
                        </ul>
                      </table>
                    )}
                  </div>
                ) : (
                  <>
                    <Link to="signup">
                      <img src="../src/assets/images/img1.svg" />
                    </Link>
                  </>
                )}
              </div>
              <div className="header-item-user">
                <span>
                  <a href="#">
                    <img src={IconSearch} />
                  </a>
                </span>
              </div>
              <div className="header-item-user">
                <span>
                  <a href="#">
                    <img src={IconWishlist} />
                  </a>
                </span>
              </div>
              <div className="header-item-user">
                <a href="/cart">
                  <img src={Iconcart} />
                </a>
              </div>
            </div>
          </div>
        </div>
      </header>
    </>
  );
};

export default Header;
