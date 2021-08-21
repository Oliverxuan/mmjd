import { request } from "./request";

export function moment(content) {
  return request({
    url: "/moment",
    method: "POST",
    data: {
      content: "我的测试token"
    }
  });
}
