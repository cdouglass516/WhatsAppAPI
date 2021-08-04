import { getToken } from "./authManager";
const baseUrl = "";
let fetchUrl = "";
export const editFormData = (user, id) => {
  return getToken().then((token) => {
    return fetch(baseUrl + `/${id}`, {
      method: "PUT",
      headers: {
        Authorization: `Bearer ${token}`,
        "Content-Type": "application/json",
      },
      body: JSON.stringify(user),
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
export const GetAllUsers = (id) => {
  fetchUrl = `${baseUrl}/getall/${id}`;
  return getToken().then((token) => {
    return fetch(fetchUrl, {
      method: "GET",
      headers: {
        Authorization: `Bearer ${token}`,
      },
    }).then((resp) => resp.json());
  });
};
