import axios from "axios";

export const api = axios.create({
  baseURL: "http://localhost:3000",
});

export const getGeneros = async () => {
  const response = await api.get("/Genero");
  return response
};
