import Link from "next/link";

import DashboardWrapper from "components/admin/Wrapper";

const AdminDashboard = () => {
  return (
    <DashboardWrapper>
      <div className="cards">
        <Link className="card" href={`/posts/create-post`}>
          <div className="overlay"></div>
          <div className="circle">
            <i className="fa-solid fa-plus"></i>
          </div>

          <h4>Create Post</h4>
        </Link>

        <Link className="card" href={`/posts/manage-posts`}>
          <div className="overlay"></div>
          <div className="circle">
            <i className="fa-solid fa-signs-post"></i>
          </div>

          <h4>Manage all Posts</h4>
        </Link>

        <Link className="card" href={`/users/manage-users`}>
          <div className="overlay"></div>

          <div className="circle">
            <i className="fa-solid fa-users"></i>
          </div>

          <h4>Manage Users</h4>
        </Link>
      </div>
    </DashboardWrapper>
  );
};

export default AdminDashboard;
