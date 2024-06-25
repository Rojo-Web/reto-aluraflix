import axios from "axios";

export const api = axios.create({
  baseURL: "http://localhost:3000",
});

export const get = async (param) => {
  const response = await api.get(`/${param}`);
  return response
};


export const urlCodigo = (str) => {
  const index = str.indexOf("=");

  if (index !== -1) {
    return str.substring(index + 1);
  } else {
    return "";
  }
};