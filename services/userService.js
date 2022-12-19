import Cookies from "js-cookie";
import authService from "./authService";
import http from "./httpService";

const tokenKey = "token";

export async function register(user) {
  const res = await http.post(`/auth/signup`, {
    name: user.name,
    email: user.email,
    password: user.password,
  });

  if (res.ok) {
    authService.loginWithJwt(res.data.token);
    Cookies.set(tokenKey, res.data.token);
  }

  return res;
}

export const getUsers = async () => {
  return await http.get(`/users`);
};

export const deleteUser = async (userId) => {
  return await http.delete(`/users/${userId}`);
};
