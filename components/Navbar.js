import { useEffect, useRef, useState } from "react";
import { useRouter } from "next/router";
import Link from "next/link";

import useAuth from "hooks/useAuth";
import Image from "next/image";

const Navbar = ({ fixed }) => {
  const { pathname } = useRouter();

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
          <Image
            className="nav-logo"
            src={`/assets/images/Logo.png`}
            alt="Nav Logo"
            width={`150`}
            height={`150`}
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
              pathname && pathname === "/home" ? "link active" : "link"
            }
            href="/home"
          >
            Home
          </Link>

          <Link
            onClick={() => setShown(false)}
            className={
              pathname && pathname === "/category/agriculture"
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
              pathname && pathname === "/category/culture"
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
              pathname && pathname === "/category/finance"
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
              pathname && pathname === "/category/sports"
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
              pathname && pathname === "/category/social"
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
              pathname && pathname === "/category/politics"
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
