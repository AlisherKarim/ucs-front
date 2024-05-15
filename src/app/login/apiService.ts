import { LOCAL_STORAGE_TOKEN, LOCAL_STORAGE_USER } from "../core/constants";
import { LOGIN } from "../core/urls";
import { TUser } from "../types/user";

export const loginRequest = (email, password) => {
  return new Promise<{
    error: string | null;
    user: TUser;
  }>((resolve, reject) => {
    let endpoint = LOGIN;
    fetch(endpoint, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json",
      },
      body: JSON.stringify({
        username: email,
        password: password,
      }),
    })
      .then((res) => res.json())
      .then((res) => {
        localStorage.setItem(LOCAL_STORAGE_USER, res.user);
        localStorage.setItem(LOCAL_STORAGE_TOKEN, res.token);
        resolve({
          error: res.error,
          user: res.user,
        });
      })
      .catch((e) => console.log("Login API error::", e));
  });
};
