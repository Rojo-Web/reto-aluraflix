import {  Box, Button, MenuItem, Select, TextField } from "@mui/material";
import React, { useState } from "react";
import { enviarMusica } from "../../API/Api";
import { useNavigate } from "react-router-dom";

const Formulario = () => {
  const navigate = useNavigate();
  const [generos, setgeneros] = useState("");

  const [nombre, setNombre] = useState("");
  //const [genero, actualizarGenero] = useState(0);
  const [url, setUrl] = useState("");

  const reset = () => {
    setgeneros("");
    setNombre("");
    setUrl("");
  };

  const manejarNombre = (e) => {
    setNombre(e.target.value);
  };
  const manejarGeneros = (e) => {
    setgeneros(e.target.value);
  };
  const manejarUrl = (e) => {
    const { value } = e.target;
    setUrl(value);
    validateUrl(value);
    //setUrl(e.target.value);
  };

  const manejadorEnvio = async (e) => {
    e.preventDefault();
    console.log("Entre al envio");
    const res = await enviarMusica(nombre, url, generos);
    console.log(res);
    if (res !== "Ha ocurrido un error al enviar la cancion") {
      navigate("/");
    }
  };
//Para enviar un mensaje personalizado de error
  const [error, setError] = useState(false);
  const [helperText, setHelperText] = useState("");

  const validateUrl = (value) => {
    //starsWith es para decir que debe de iniciar con
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
            display=""
            alignItems="center"
            justifyContent="center"
            gap={2}
            p={2}
          >
            <Box>
              <h2>Crea una cancion</h2>
              <p>Llena la pagina de la musica mas magica que se te ocurra</p>
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
                label="Generos"
                placeholder="Generos"
                onChange={manejarGeneros}
                required
              >
                <MenuItem disabled value="">
                  <em>Generos</em>
                </MenuItem>
                <MenuItem value="Anime">Anime</MenuItem>
                <MenuItem value="Rock">Rock</MenuItem>
                <MenuItem value="Musica Clasica">Musica Clasica</MenuItem>
                <MenuItem value="Electro swimn">Electro swimn</MenuItem>
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
                Crear
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
