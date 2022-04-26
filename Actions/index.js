import axios from "react-native-axios";

export const getData = (URL) => {
  return axios(
      {
        method: "GET",
        url: URL,
      },
    )
};

export const postData = (URL, data) => {
  return axios(
      {
        method: "POST",
        url: URL,
        data: data,
        headers: {"Content-Type": "multipart/form-data"},
      },
    )
};