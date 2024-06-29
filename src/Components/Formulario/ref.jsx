import { Box, Button, MenuItem, Select, TextField } from "@mui/material";
import React, { useEffect, useState } from "react";
import { actualizarMusica, enviarMusica } from "../../API/Api";
import { useNavigate, useParams } from "react-router-dom";

const Formulario = (props) => {
  const { tipo } = props;
  const { id } = useParams();
  const navigate = useNavigate();
  
  const [nombre, setNombre] = useState("");
  const [generos, setGeneros] = useState("");
  const [url, setUrl] = useState("");
  const [data, setData] = useState(null);
  
  const [error, setError] = useState(false);
  const [helperText, setHelperText] = useState("");

  useEffect(() => {
    const cargarCancion = async () => {
      if (tipo === "EDITAR" && id) {
        try {
          const response = await fetch(`http://localhost:3000/Cancion/${id}`);
          const data = await response.json();
          setData(data);
        } catch (error) {
          console.error("Error al cargar la canción:", error);
        }
      }
    };
    cargarCancion();
  }, [tipo, id]);

  useEffect(() => {
    if (data && tipo === "EDITAR") {
      setNombre(data.titulo);
      setUrl(data.url);
      setGeneros(data.genero);
    }
  }, [data, tipo]);

  const reset = () => {
    setGeneros("");
    setNombre("");
    setUrl("");
  };

  const manejarNombre = (e) => {
    setNombre(e.target.value);
  };

  const manejarGeneros = (e) => {
    setGeneros(e.target.value);
  };

  const manejarUrl = (e) => {
    const { value } = e.target;
    setUrl(value);
    validateUrl(value);
  };

  const manejadorEnvio = async (e) => {
    e.preventDefault();
    console.log("Entre al envio");
    let res;
    try {
      if (tipo === "EDITAR" && id) {
        res = await actualizarMusica(id, nombre, url, generos);
      } else {
        res = await enviarMusica(nombre, url, generos);
      }
      console.log(res);
      if (res) {
        navigate("/");
      }
    } catch (error) {
      console.error("Error al enviar la canción:", error);
      alert('Algo salió mal');
    }
  };

  const validateUrl = (value) => {
    const isValid = value.startsWith("https://www.youtube.com/");
    setError(!isValid);
    setHelperText(
      isValid ? "" : 'La URL debe comenzar con "https://www.youtube.com"'
    );
  };

  return (
    <>
      <div
        style={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <form onSubmit={manejadorEnvio}>
          <Box
            my={4}
            display="flex"
            alignItems="center"
            justifyContent="center"
            gap={2}
            p={2}
          >
            <Box>
              <h2>{tipo === "EDITAR" ? "Edita la canción" : "Crea una canción"}</h2>
              <p>Llena la página de la música más mágica que se te ocurra</p>
            </Box>
            <Box
              display="grid"
              gridTemplateColumns="repeat(auto-fill, minmax(100px, 1fr))"
              alignItems="center"
              gap={2}
              my={4}
              width={200}
            >
              <TextField
                id="Nombre"
                label="Nombre"
                variant="outlined"
                value={nombre}
                onChange={manejarNombre}
                required
              />

              <Select
                id="Genero"
                value={generos}
                displayEmpty
                label="Géneros"
                placeholder="Géneros"
                onChange={manejarGeneros}
                required
              >
                <MenuItem disabled value="">
                  <em>Géneros</em>
                </MenuItem>
                <MenuItem value="Anime">Anime</MenuItem>
                <MenuItem value="Rock">Rock</MenuItem>
                <MenuItem value="Música Clásica">Música Clásica</MenuItem>
                <MenuItem value="Electro Swing">Electro Swing</MenuItem>
              </Select>
              <TextField
                id="URL"
                label="URL"
                variant="outlined"
                value={url}
                onChange={manejarUrl}
                error={error}
                helperText={helperText}
                required
              />
            </Box>
            <Box gap={5} my={2} display="flex">
              <Button variant="outlined" type="submit">
                {tipo === "EDITAR" ? "Actualizar Canción" : "Crear Canción"}
              </Button>
              <Button variant="outlined" type="reset" onClick={reset}>
                Limpiar
              </Button>
            </Box>
          </Box>
        </form>
      </div>
    </>
  );
};

export default Formulario;
