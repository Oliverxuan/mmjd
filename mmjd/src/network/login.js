import { request } from "./request";

// $axios({
//   method: "post",
//   url: "/url",
//   data: {
//     id: 1
//   }
// }).then(
//   res => {
//     console.log(res.data);
//   },
//   err => {
//     console.log(err);
//   }
// );
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
