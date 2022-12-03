/* eslint-disable no-unused-vars */
import { useState, useRef } from "react";
import Link from "next/link";

import Navbar from "../Navbar";
import Search from "../Search";
import useAuth from "hooks/useAuth";

import { logout } from "services/authService";

const Header = () => {
  const [navFixed, setNavFixed] = useState(false);
  const [showDropdown, setShowDropdown] = useState(false);
  const { user } = useAuth();
  const node = useRef();

  const setNavbar = () => {
    if (window.scrollY > 100) {
      setNavFixed(true);
    } else {
      setNavFixed(false);
    }
  };

  const open = () => {
    setShowDropdown((prev) => !prev);
  };

  const close = (e) => {
    if (node.current.contains(e.target)) {
      return;
    }

    setShowDropdown(false);
  };

  return (
    <>
      <header className={navFixed ? "header fixed" : "header"}>
        <div className="first-div">
          {user && (
            <div className="user-display">
              <div className="avatar">
                {user.avatar && (
                  <img
                    src={user.avatar}
                    className="user-image"
                    onClick={open}
                    ref={node}
                    alt="User-Img"
                  />
                )}

                {!user.avatar && (
                  <i
                    className="fa-solid fa fa-user-circle"
                    onClick={open}
                    ref={node}
                  ></i>
                )}
                <i className="fa-solid fa fa-angle-down"></i>
              </div>

              {showDropdown && (
                <div className="dropdown">
                  <div className="name-contain">
                    <i className="fa-solid fa-walking"></i>{" "}
                    <span>{user.name}</span>
                  </div>

                  {(user.email === `admin@izonvoice.ng` ||
                    user.email === `admin.local@izonvoice.ng`) && (
                    <div>
                      <hr />

                      <Link
                        href={`/posts/create-post`}
                        className={`logout-link`}
                      >
                        <a>
                          <i className="fa-solid fa-upload"></i> Upload New Post
                        </a>
                      </Link>
                    </div>
                  )}

                  <hr />

                  <Link
                    className="logout-link"
                    href={`#`}
                    onClick={() => {
                      logout();
                    }}
                  >
                    <a>
                      <i className="fa-solid fa-right-from-bracket"></i> Logout
                    </a>
                  </Link>
                </div>
              )}
            </div>
          )}

          <Search />
        </div>

        <Navbar fixed={navFixed} />
      </header>
    </>
  );
};

export default Header;
