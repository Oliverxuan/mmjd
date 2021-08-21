import axios from "axios";

export function getGoods() {
  return axios({
    method: "get",
    url: "http://121.5.114.161:6901/mmjd"
  });
}
