import { useRouter } from "next/router";

import useAuth from "hooks/useAuth";

const ProtectedRoute = ({ children }) => {
  const { user } = useAuth();
  const router = useRouter();

  return (
    <div>
      {user &&
      (user.email === `admin@izonvoice.ng` ||
        user.email === `admin.local@izonvoice.ng`)
        ? children
        : router.push("/auth/admin")}
    </div>
  );
};

export default ProtectedRoute;
