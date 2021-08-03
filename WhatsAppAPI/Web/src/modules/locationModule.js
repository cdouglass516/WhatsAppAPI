import { getToken } from "./authManager";
const baseUrl = "/api/Location";
let fetchUrl = "";
export const getLocName = (id) => {
  fetchUrl = baseUrl + `/${id}`;
  return fetch(fetchUrl, {
    method: "GET",
    headers: {},
  }).then((resp) => resp.json());
};
export const getAll = () => {
  fetchUrl = baseUrl;
  return fetch(fetchUrl, {
    method: "GET",
    headers: {},
  }).then((resp) => resp.json());
};

export const DeleteEvent = (comment) => {
  return fetch(`${baseUrl}comments/${comment.id}`, {
    method: "DELETE",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(comment),
  }).then((data) => data.json());
};

export const EditEvent = (comment) => {
  return fetch(`${baseUrl}comments/${comment.id}`, {
    method: "PUT",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(comment),
  }).then((data) => data.json());
};

export const addEvent = (video, baseUrl) => {
  return getToken().then((token) => {
    return fetch(baseUrl, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(video),
    });
  });
};
