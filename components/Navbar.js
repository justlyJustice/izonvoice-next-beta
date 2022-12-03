import { useEffect, useRef, useState } from "react";
import { useRouter } from "next/router";
import Link from "next/link";

import { logo } from "/public/assets/images";
import useAuth from "hooks/useAuth";

const Navbar = ({ fixed }) => {
  const { query } = useRouter();
  const location = query.pathname;
  const [shown, setShown] = useState(false);
  const { user } = useAuth();

  const node = useRef();

  const close = (e) => {
    if (node.current.contains(e.target)) {
      return;
    }

    setShown(false);
  };

  useEffect(() => {
    document.addEventListener("mousedown", close);

    return () => {
      document.removeEventListener("mousedown", close);
    };
  }, [shown]);

  return (
    <>
      <nav className="navbar">
        <div className={!fixed ? "item nav-logo-contain" : "nav-logo-contain"}>
          <img
            className="nav-logo"
            src={`/assets/images/Logo.png`}
            alt="Nav Logo"
          />

          {shown ? (
            <i
              className="fa fa-close toggle-icon"
              onClick={() => setShown(false)}
              ref={node}
            ></i>
          ) : (
            <i
              className="fa fa-bars toggle-icon"
              onClick={() => setShown(true)}
              ref={node}
            ></i>
          )}
        </div>

        <div
          className={!fixed ? "nav-menu item" : "nav-menu"}
          style={{ left: shown ? "60%" : "" }}
        >
          <Link
            onClick={() => setShown(false)}
            className={
              location && location.pathname === "/home" ? "link active" : "link"
            }
            href="/home"
          >
            Home
          </Link>

          <Link
            onClick={() => setShown(false)}
            className={
              location && location.pathname === "/category/agriculture"
                ? "link active"
                : "link"
            }
            href="/category/agriculture"
          >
            Agriculture
          </Link>

          <Link
            onClick={() => setShown(false)}
            className={
              location && location.pathname === "/category/culture"
                ? "link active"
                : "link"
            }
            href="/category/culture"
          >
            Culture
          </Link>

          <Link
            onClick={() => setShown(false)}
            className={
              location && location.pathname === "/category/finance"
                ? "link active"
                : "link"
            }
            href="/category/finance"
          >
            Finance
          </Link>
        </div>

        <div
          className={!fixed ? "nav-menu item" : "nav-menu"}
          style={{ left: shown ? "60%" : "" }}
        >
          <Link
            onClick={() => setShown(false)}
            className={
              location && location.pathname === "/category/sports"
                ? "link active"
                : "link"
            }
            href="/category/sports"
          >
            Sports
          </Link>

          <Link
            onClick={() => setShown(false)}
            className={
              location && location.pathname === "/category/social"
                ? "link active"
                : "link"
            }
            href="/category/social"
          >
            Social
          </Link>

          <Link
            onClick={() => setShown(false)}
            className={
              location && location.pathname === "/category/politics"
                ? "link active"
                : "link"
            }
            href="/category/politics"
          >
            Politics
          </Link>

          {!user && (
            <>
              <Link
                onClick={() => setShown(false)}
                className={"link"}
                href="/login"
              >
                Login
              </Link>

              <Link
                onClick={() => setShown(false)}
                className={"link"}
                href="/sign-up"
              >
                Register
              </Link>
            </>
          )}
        </div>
      </nav>
    </>
  );
};

export default Navbar;
