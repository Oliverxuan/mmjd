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
export function getCheck(goodsId) {
  return request({
    url: "/users/check",
    method: "POST",
    data: {
      goodsId: goodsId
    }
  });
}
export function deleteCheck(goodsId) {
  return request({
    url: "/users/delete",
    method: "POST",
    data: {
      goodsId: goodsId
    }
  });
}
export function upStore(goodsId) {
  return request({
    url: "/users/up",
    method: "POST",
    data: {
      goodsId: goodsId
    }
  });
}
export function downStore(goodsId) {
  return request({
    url: "/users/down",
    method: "POST",
    data: {
      goodsId: goodsId
    }
  });
}
