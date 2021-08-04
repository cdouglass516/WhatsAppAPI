﻿import firebase from "firebase/app";
import "firebase/auth";

const _apiUrl = "/api/User";

const _doesUserExist = (firebaseUserId) => {
  return getToken().then((token) =>
    fetch(`${_apiUrl}/DoesUserExist/${firebaseUserId}`, {
      method: "GET",
      headers: {
        Authorization: `Bearer ${token}`,
      },
    }).then((resp) => resp.json())
  );
};

export const getUserRole = (firebaseUserId) => {
  return getToken().then((token) =>
    fetch(`${_apiUrl}/DoesUserExist/${firebaseUserId}`, {
      method: "GET",
      headers: {
        Authorization: `Bearer ${token}`,
      },
    }).then((resp) => resp.json())
  );
};

const _saveUser = (userProfile) => {
  return getToken().then((token) =>
    fetch(_apiUrl + "/add", {
      method: "POST",
      headers: {
        Authorization: `Bearer ${token}`,
        "Content-Type": "application/json",
      },
      body: JSON.stringify(userProfile),
    }).then((resp) => resp.json())
  );
};

export const getToken = () => firebase.auth().currentUser.getIdToken();
export const getFBUserID = () => firebase.auth().currentUser.uid;
export const login = (email, pw) => {
  return firebase
    .auth()
    .signInWithEmailAndPassword(email, pw)
    .then((signInResponse) => _doesUserExist(signInResponse.user.uid))
    .then((doesUserExist) => {
      if (doesUserExist === -1) {
        // If we couldn't find the user in our app's database, we should logout of firebase
        logout();
        alert("User is not found contact support");
        // throw new Error(
        //   "Something's wrong. The user exists in firebase, but not in the application database."
        // );
      } else {
        return doesUserExist;
      }
    })
    .catch((err) => {
      console.error(err);
      throw err;
    });
};

export const logout = () => {
  firebase.auth().signOut();
};

export const register = (userProfile, password) => {
  return firebase
    .auth()
    .createUserWithEmailAndPassword(userProfile.email, password)
    .then((createResponse) =>
      _saveUser({
        ...userProfile,
        firebaseId: createResponse.user.uid,
      })
    );
};

export const onLoginStatusChange = (onLoginStatusChangeHandler) => {
  firebase.auth().onAuthStateChanged((user) => {
    onLoginStatusChangeHandler(!!user);
  });
};
