import { request } from "./request";

export function GetUser() {
  return request({
    url: "/users/name",
    method: "POST"
  });
}

export function ChangeUserSkin(flag, type, fix) {
  return request({
    url: "/users/skintest",
    method: "POST",
    data: {
      flag: flag,
      type: type,
      fix: fix
    }
  });
}
