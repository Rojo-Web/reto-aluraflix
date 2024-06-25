import { useEffect, useState } from "react";
import Banner from "../../Components/Banner/Index";
import Genero from "../../Components/Genero/Index";
import { get } from "../../API/Api";

const Home = () => {
  const [generos, setGeneros] = useState([]);
  const [canciones, setCanciones] = useState([]);

  useEffect(() => {
    get("Genero").then((response) => {
      setGeneros(response.data);
    });
    get("Cancion").then((response) => {
      setCanciones(response.data);
    });
  }, []);
  console.log("generos ", generos);
  console.log("Canciones ", canciones, "   ", typeof canciones);

  return (
    <>
      <Banner
        Titulo="¡La musica es vida!"
        Parrafo="La musica es uno de los mejores acompañantes que tenemos"
        url="https://www.youtube.com/watch?v=-7JOa3dISg0"
      ></Banner>
      <Genero />
      {canciones=== null ?<></>: (<>{
        //Enviamos los generos
        
        generos.map((genero) => (
          <Genero
            key={genero.id}
            colorPrimario={genero.colorPrimario}
            colorSecundario={genero.colorSecundario}
            titulo={genero.titulo}
            cancioness={canciones.filter(
              (cancion) => cancion.genero === genero.titulo
            )}
            // eliminarColaborador={eliminarColaborador}
            // actualizarColor={actualizarColor}
            // like={like}
          />
        ))
      }</>)}
    </>
  );
};

export default Home;
