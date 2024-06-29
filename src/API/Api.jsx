import axios from "axios";

export const api = axios.create({
  baseURL: "http://localhost:3000",
});

export const get = async (param) => {
  const response = await api.get(`/${param}`);
  return response
};

export const getID = async (param,ID) => {
  const response = await api.get(`/${param}/${ID}`);
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

export async function enviarMusica(titulo, url, genero) {
  const conexion = await fetch("http://localhost:3000/Cancion", {
      method: "POST",
      headers: { "Content-type": "application/json" },
      body: JSON.stringify({
          titulo: titulo,
          url: url,
          genero: genero
      })
  })
  const conexionConvertida = conexion.json();
  if (!conexion.ok) {
      throw new Error("Ha ocurrido un error al enviar la cancion");
  }
  return conexionConvertida;
}

export async function eliminarCancion(id) {
  const conexion = await fetch(`http://localhost:3000/Cancion/${id}`, {
      method: "DELETE",
      headers: {
          "Content-type": "application/json"
      }
  })
  const conexionConvertida = conexion.json();
  if (!conexion.ok) {
      throw new Error("Ha ocurrido un error al eliminar la cancion");
  }
  return conexionConvertida
}

export async function actualizarMusica(id, titulo, url, genero) {
  const conexion = await fetch(`http://localhost:3000/Cancion/${id}`, {
      method: "PUT",
      headers: { "Content-type": "application/json" },
      body: JSON.stringify({
          titulo: titulo,
          url: url,
          genero: genero
      })
  });
  
  const conexionConvertida = await conexion.json(); 
  if (!conexion.ok) {
      throw new Error("Ha ocurrido un error al actualizar la canción");
  }
  return conexionConvertida;
}
