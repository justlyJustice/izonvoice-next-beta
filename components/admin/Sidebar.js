import { logo } from "/public/assets/images";
import Link from "next/link";

import authService from "services/authService";
import Image from "next/image";

const Sidebar = ({ isOpen, handleClose }) => {
  const handleLogout = () => {
    authService.logoutAdmin();

    //   window.location = `/auth/admin`;
  };

  return (
    <div className={isOpen ? "aside-bar slide" : "aside-bar"}>
      <div className="img-contain">
        <Link href={`/admin/dashboard`} onClick={handleClose}>
          <Image src={logo} alt="Side Logo" height={200} width={200} />
        </Link>

        <i className="fa-solid fa-xmark" onClick={handleClose}></i>
      </div>

      <div className="menu-contain">
        <Link
          href={`/posts/create-post`}
          className="menu-item"
          onClick={handleClose}
        >
          <i
            className="fa-solid 
            fa-circle-plus"
          ></i>{" "}
          Create Post
        </Link>

        <Link
          href={`/posts/manage-posts`}
          className="menu-item"
          onClick={handleClose}
        >
          <i className="fa-solid fa-signs-post"></i> Manage all Posts
        </Link>

        <Link
          href={`/users/manage-users`}
          className="menu-item"
          onClick={handleClose}
        >
          <i className="fa-sharp fa-solid fa-users"></i> Manage Users
        </Link>
      </div>

      <div className="sign-out-contain">
        <Link href={`#`} onClick={handleLogout} className={`link`}>
          Logout, Admin <i className="fa-solid fa-arrow-right-from-bracket"></i>
        </Link>
      </div>
    </div>
  );
};

export default Sidebar;
