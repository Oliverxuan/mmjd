import { request } from "./request";

export function PostMoment(content, goodsId) {
  return request({
    url: "/moment",
    method: "POST",
    data: {
      content: content,
      goodsId: goodsId
    }
  });
}

export function GetMoment(goodsId) {
  return request({
    url: "/moment/content",
    method: "POST",
    data: {
      goodsId: goodsId
    }
  });
}
export function GetUserMoment() {
  return request({
    url: "/moment/personmoment",
    method: "POST"
  });
}
export function GetAllMoment(nums) {
  return request({
    url: "/moment/all",
    method: "POST",
    data: {
      nums: nums
    }
  });
}
export function GetNewMoment(nums) {
  return request({
    url: "/moment/new",
    method: "POST",
    data: {
      nums: nums
    }
  });
}
