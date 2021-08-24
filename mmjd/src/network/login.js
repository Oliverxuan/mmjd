import { request } from "./request";

export function login(name, password) {
  return request({
    url: "/login",
    method: "POST",
    data: {
      name: name,
      password: password
    }
  });
}
