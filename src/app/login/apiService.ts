import { LOGIN } from "../core/urls";
import { TUser } from "../types/user";

export const loginRequest = (email, password) => {
  return new Promise<{
      error: string | null,
      user: TUser,
      token: string
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
    .then(res => resolve({
      error: res.error,
      user: res.user,
      token: res.token
    }))
    .catch((e) => console.log("Login API error::", e));
  });
};
