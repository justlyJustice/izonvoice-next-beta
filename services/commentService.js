/* eslint-disable import/no-anonymous-default-export */
import url from "config/url";
import http from "./httpService";

const addReply = (message, commentId) =>
  http.post(`${url}comments/${commentId}/replies`, {
    message,
  });

const createComment = (postId, message) =>
  http.post(`${url}posts/${postId}/comments`, {
    message,
  });

const getComments = (postId) => http.get(`${url}posts/${postId}/comments`);

export default {
  addReply,
  createComment,
  getComments,
};
