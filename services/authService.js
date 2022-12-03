/* eslint-disable import/no-anonymous-default-export */
import http from "./httpService";
import JwtDecode from "jwt-decode";

import storage from "utils/storage";
import url from "config/url";

const tokenKey = "token";
const adminTokenKey = "adminTokenKey";

export const getJwt = () => {
  return storage.getItem(tokenKey);
};

export const getAdminJwt = () => {
  return storage.getItem(adminTokenKey);
};

http.setJwt(getJwt());

export const login = async (userObj) => {
  const response = await http.post(`${url}/auth/login`, {
    email: userObj.email,
    password: userObj.password,
  });

  switch (response.data.email) {
    case "admin@izonvoice.ng" || "admin@izonvoice.local.ng":
      storage.setItem(adminTokenKey, response.data.token);
      break;

    default:
      const jwt = response.data.token;
      storage.setItem(tokenKey, jwt);
      break;
  }

  return response;
};

// Getting the current user
function getCurrentUser() {
  try {
    const jwt = storage.getItem(tokenKey);
    return JwtDecode(jwt);
  } catch (ex) {
    return null;
  }
}

const currentUser = getCurrentUser();

// Getting the admin
function getAdmin() {
  try {
    const jwt = storage.getItem(adminTokenKey);
    return JwtDecode(jwt);
  } catch (ex) {
    return null;
  }
}

const admin = getAdmin();

export const loginWithJwt = (jwt) => {
  storage.setItem(tokenKey, jwt);
};

export const logout = () => {
  storage.removeItem(tokenKey);
};

export const logoutAdmin = () => {
  storage.removeItem(adminTokenKey);
};

export const googleAuth = async (tokenId) => {
  const res = await http.post("/google-auth", {
    token: tokenId,
  });

  if (res.ok) {
    loginWithJwt(res.data.data);
  }

  return res;
};

export default {
  admin,
  currentUser,
  getJwt,
  googleAuth,
  login,
  loginWithJwt,
  logout,
  logoutAdmin,
};
