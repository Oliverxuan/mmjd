import { request } from "./request";

export function register(name, password) {
  return request({
    url: "/users",
    method: "POST",
    data: {
      name: name,
      password: password
    }
  });
}
