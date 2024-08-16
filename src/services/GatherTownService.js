import axios from "axios";

const url = "http://localhost:8888";

export default {
  mapData: (params) => {
    return axios({
      method: "GET",
      baseURL: url,
      url: `/portal/maps`,
      params: params,
    });
  },
};
