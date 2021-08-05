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

export const getAllEventsByDistance = (home) => {
  fetchUrl = baseUrl + "/getdistanceevents/";
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

export const getEventByUserId = (userId) => {
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
          "An unknown error occurred while trying to get events."
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
        const ret = resp.json();
        console.log(ret);
        return ret;
      } else {
        throw new Error(
          "An unknown error occurred while trying to get events."
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
          "An unknown error occurred while trying to save an event."
        );
      }
    });
  });
};
export const editFormData = (ev) => {
  return getToken().then((token) => {
    return fetch(baseUrl + `/${ev.id}`, {
      method: "PUT",
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
          "An unknown error occurred while trying to edit event."
        );
      }
    });
  });
};

export const cancelEvent = (id) => {
  return getToken().then((token) => {
    return fetch(`${baseUrl}/cancel/${id}`, {
      method: "GET",
      headers: {
        Authorization: `Bearer ${token}`,
      },
    }).then((data) => data.json());
  });
};

export const deleteEvent = (id) => {
  return getToken().then((token) => {
    return fetch(`${baseUrl}/${id}`, {
      method: "DELETE",
      headers: {
        Authorization: `Bearer ${token}`,
      },
      body: JSON.stringify(id),
    });
  });
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
