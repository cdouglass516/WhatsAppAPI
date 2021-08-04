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

export const EditLoc = (id, values) => {
  return fetch(`${baseUrl}/${id}`, {
    method: "PUT",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(values),
  }).then((data) => data.json());
};

export const saveFormData = (location) => {
  return getToken().then((token) => {
    return fetch(baseUrl, {
      method: "POST",
      headers: {
        Authorization: `Bearer ${token}`,
        "Content-Type": "application/json",
      },
      body: JSON.stringify(location),
    }).then((resp) => {
      if (resp.ok) {
        return resp.json();
      } else if (resp.status === 401) {
        throw new Error("Unauthorized");
      } else {
        throw new Error(
          "An unknown error occurred while trying to save a new location."
        );
      }
    });
  });
};
