import { request } from "./request";

export function getGoods() {
  return request({
    method: "get",
    url: "/mmjd"
  });
}
export function getPersonGoods() {
  return request({
    method: "post",
    url: "/mmjd/personimg"
  });
}
export function getUserStore() {
  return request({
    method: "post",
    url: "/users/store"
  });
}
export function changeUserStore(id) {
  return request({
    method: "post",
    url: "/users/changestore",
    data: {
      goodsId: id
    }
  });
}
