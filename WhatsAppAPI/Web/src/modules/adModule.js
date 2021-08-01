import { getToken } from "./authManager";
const baseUrl = "http://localhost:8088/";
export const getAllEvents = (baseUrl) => {
  return getToken().then((token) => {
    return fetch(baseUrl, {
      method: "GET",
      headers: {
        Authorization: `Bearer ${token}`,
      },
    }).then((resp) => {
      if (resp.ok) {
        return resp.json();
      } else {
        throw new Error(
          "An unknown error occurred while trying to get quotes."
        );
      }
    });
  });
};

export const getEventById = (baseUrl) => {
  return getToken().then((token) => {
    return fetch(baseUrl, {
      method: "GET",
      headers: {
        Authorization: `Bearer ${token}`,
      },
    }).then((resp) => {
      if (resp.ok) {
        return resp.json();
      } else {
        throw new Error(
          "An unknown error occurred while trying to get quotes."
        );
      }
    });
  });
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
