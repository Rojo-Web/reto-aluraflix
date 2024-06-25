import { useEffect, useState } from "react"
import Banner from "../../Components/Banner/Index"
import Genero from "../../Components/Genero/Index"
import { getGeneros } from "../../API/Api";



const Home = () => {
const [generos, setGeneros] = useState([]);

  useEffect(() => {
    getGeneros().then((response) => {
      setGeneros(response.data);
    });
  }, []);
  console.log(generos);

    return<>
        <Banner Titulo="¡La musica es vida!" 
        Parrafo="La musica es uno de los mejores acompañantes que tenemos"
        url="https://www.youtube.com/watch?v=-7JOa3dISg0"
        ></Banner>
        <Genero/>
        {
        //Enviamos los generos 
        generos.map((genero) => (
          <Genero
            key={genero.id}
            colorPrimario ={genero.colorPrimario}
            colorSecundario ={genero.colorSecundario}
            titulo ={genero.titulo}
            // colaboradores={colaboradores.filter(
            //   (colaborador) => colaborador.equipo === equipo.titulo
            // )}
            // eliminarColaborador={eliminarColaborador}
            // actualizarColor={actualizarColor}
            // like={like}
          />
        ))
      }
        </>
}


export default Home