import { getToken } from "./authManager";
const baseUrl = "/api/Location";
export const getAdById = (baseUrl) => {
  return fetch(baseUrl, {
    method: "GET",
    headers: {},
  }).then((resp) => {
    if (resp.ok) {
      return resp.json();
    } else {
      throw new Error("An unknown error occurred while trying to get quotes.");
    }
  });
};
