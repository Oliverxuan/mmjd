import axios from "axios";

export function getGood() {
  return axios({
    method: "get",
    url: "http://121.5.114.161:3000/mmjd"
  });
}
