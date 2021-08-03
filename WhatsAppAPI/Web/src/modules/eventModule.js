import { getToken } from "./authManager";
const baseUrl = "/api/Event";
let fetchUrl = "";
export const getAllEvents = () => {
  fetchUrl = baseUrl + "/getEvents/";
  return fetch(fetchUrl, {
    method: "GET",
    headers: {},
  }).then((resp) => {
    if (resp.ok) {
      return resp.json();
    } else {
      throw new Error("An unknown error occurred while trying to get events.");
    }
  });
};

export const getEventTypes = () => {
  fetchUrl = baseUrl + "/GetEventTypes/";
  return fetch(fetchUrl, {
    method: "GET",
    headers: {},
  }).then((resp) => {
    if (resp.ok) {
      return resp.json();
    } else {
      throw new Error(
        "An unknown error occurred while trying to get event types."
      );
    }
  });
};

export const getEventByEventId = (userId) => {
  fetchUrl = baseUrl + "/GetEvents/" + userId;
  return getToken().then((token) => {
    return fetch(fetchUrl, {
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

export const getEventById = (id) => {
  fetchUrl = baseUrl + "/GetEvent/" + id;
  return getToken().then((token) => {
    return fetch(fetchUrl, {
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

export const saveFormData = (ev) => {
  return getToken().then((token) => {
    return fetch(baseUrl, {
      method: "POST",
      headers: {
        Authorization: `Bearer ${token}`,
        "Content-Type": "application/json",
      },
      body: JSON.stringify(ev),
    }).then((resp) => {
      if (resp.ok) {
        return resp.json();
      } else if (resp.status === 401) {
        throw new Error("Unauthorized");
      } else {
        throw new Error(
          "An unknown error occurred while trying to save a new quote."
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
